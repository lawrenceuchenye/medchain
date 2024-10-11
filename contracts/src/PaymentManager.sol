// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

// Import OpenZeppelin's ReentrancyGuard for security against reentrancy attacks
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";

// Interface to interact with MedChain contract
interface IMedChain {
    function isRegistered(address _user) external view returns (bool);
}

/**
 * @title PaymentManager
 * @dev Manages sponsorships and fund disbursements between sponsors, doctors/volunteers, and patients.
 */
contract PaymentManager is ReentrancyGuard {
    // Reference to the MedChain contract
    IMedChain public medChain;

    // Sponsorship counter for unique IDs
    uint256 public sponsorshipCount;

    // Struct representing a sponsorship
    struct Sponsorship {
        uint256 id;
        address sponsor;
        address recipient; // Doctor or Volunteer
        address patient;
        uint256 amount;
        bool confirmed;
        bool withdrawn;
    }

    // Mapping from sponsorship ID to Sponsorship
    mapping(uint256 => Sponsorship) public sponsorships;

    // Events
    event SponsorshipCreated(
        uint256 indexed id,
        address indexed sponsor,
        address indexed recipient,
        address patient,
        uint256 amount,
        uint256 timestamp
    );

    event TaskConfirmed(
        uint256 indexed id,
        address indexed patient,
        uint256 timestamp
    );

    event FundsDisbursed(
        uint256 indexed id,
        address indexed recipient,
        uint256 amount,
        uint256 timestamp
    );

    /**
     * @dev Modifier to check if the caller is the associated patient for a sponsorship.
     * @param _sponsorshipId The ID of the sponsorship.
     */
    modifier onlyPatient(uint256 _sponsorshipId) {
        require(
            sponsorships[_sponsorshipId].patient == msg.sender,
            "Only the associated patient can confirm the task."
        );
        _;
    }

    /**
     * @dev Constructor to set the MedChain contract address.
     * @param _medChainAddress The address of the deployed MedChain contract.
     */
    constructor(address _medChainAddress) {
        require(
            _medChainAddress != address(0),
            "MedChain address cannot be zero."
        );
        medChain = IMedChain(_medChainAddress);
    }

    /**
     * @dev Allows a sponsor to sponsor a doctor or volunteer for a specific patient.
     * @param _recipient The address of the doctor or volunteer.
     * @param _patient The address of the patient.
     */
    function sponsorRecipient(
        address _recipient,
        address _patient
    ) external payable nonReentrant {
        require(msg.value > 0, "Sponsorship amount must be greater than zero.");
        require(
            medChain.isRegistered(_recipient),
            "Recipient must be a registered doctor or volunteer."
        );
        require(
            medChain.isRegistered(_patient),
            "Patient must be a registered user."
        );
        require(_recipient != msg.sender, "Sponsor cannot sponsor themselves.");
        require(_patient != address(0), "Patient address cannot be zero.");

        sponsorshipCount += 1;
        sponsorships[sponsorshipCount] = Sponsorship({
            id: sponsorshipCount,
            sponsor: msg.sender,
            recipient: _recipient,
            patient: _patient,
            amount: msg.value,
            confirmed: false,
            withdrawn: false
        });

        emit SponsorshipCreated(
            sponsorshipCount,
            msg.sender,
            _recipient,
            _patient,
            msg.value,
            block.timestamp
        );
    }

    /**
     * @dev Allows the associated patient to confirm the completion of a task.
     * Upon confirmation, funds are disbursed to the recipient.
     * @param _sponsorshipId The ID of the sponsorship.
     */
    function confirmTask(
        uint256 _sponsorshipId
    ) external onlyPatient(_sponsorshipId) nonReentrant {
        Sponsorship storage sponsorship = sponsorships[_sponsorshipId];
        require(sponsorship.id != 0, "Sponsorship does not exist.");
        require(!sponsorship.confirmed, "Task has already been confirmed.");
        require(!sponsorship.withdrawn, "Funds have already been disbursed.");

        sponsorship.confirmed = true;

        // Transfer funds to the recipient
        (bool success, ) = sponsorship.recipient.call{
            value: sponsorship.amount
        }("");
        require(success, "Transfer to recipient failed.");

        sponsorship.withdrawn = true;

        emit TaskConfirmed(_sponsorshipId, msg.sender, block.timestamp);
        emit FundsDisbursed(
            _sponsorshipId,
            sponsorship.recipient,
            sponsorship.amount,
            block.timestamp
        );
    }

    /**
     * @dev Allows the sponsor to withdraw funds if the task is not confirmed within a certain timeframe.
     * Optional: Implement a timeout mechanism.
     * Currently not implemented as per the requirements.
     */

    // Additional functions like withdrawing funds by sponsors or handling disputes can be added here.

    // Function to return the full Sponsorship struct
    function getSponsorship(
        uint256 _id
    ) external view returns (Sponsorship memory) {
        return sponsorships[_id];
    }
}

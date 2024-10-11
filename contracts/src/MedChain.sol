// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

/**
 * @title MedChain
 * @dev A contract to register and track user addresses with role-specific events for indexing.
 *      Includes admin functionalities for verifying volunteers and key metrics tracking.
 */
contract MedChain {
    /**
     * @dev Represents a user in the MedChain platform.
     */
    struct User {
        string ipfsHash; // IPFS hash of the user's data
        bool isRegistered; // Registration status
        string role; // User role: doctor, patient, volunteer, sponsor, admin
        bool isVerified; // Verification status (applicable for volunteers)
    }

    /**
     * @dev Represents a report made by a user against another user.
     */
    struct Report {
        address reporter; // Address of the user making the report
        address reported; // Address of the user being reported
        string reason; // Reason for the report
        uint256 timestamp; // Time when the report was made
    }

    // Mapping to store user information
    mapping(address => User) private users;

    // Mapping to track admin addresses
    mapping(address => bool) public isAdmin;

    // Mapping to track volunteer verification requests
    mapping(address => bool) public verificationRequests;

    // Array to store all reports
    Report[] public reports;

    // Metrics tracking variables
    uint256 public numberOfSignups;
    uint256 public numberOfVerifications;
    uint256 public numberOfReports;

    // Events for each user role
    event DoctorRegistered(
        address indexed user,
        string ipfsHash,
        string fullName,
        string email,
        string nationality,
        string profilePicture,
        string major,
        string specialty,
        string medicalSchoolEmail,
        string licensure,
        uint256 yearOfGraduation,
        uint256 yearsOfExperience,
        uint256 yearOfExpiration,
        string licensureEmail,
        string hospitalAffiliation,
        uint256 registeredAt
    );

    event PatientRegistered(
        address indexed user,
        string ipfsHash,
        string fullName,
        string email,
        string nationality,
        string profilePicture,
        string dateOfBirth,
        string gender,
        string medicalCondition,
        string allergies,
        string emergencyContact1,
        string emergencyContact2,
        string hospitalEmail,
        string hospitalContact,
        string additionalInformation,
        uint256 registeredAt
    );

    event VolunteerRegistered(
        address indexed user,
        string ipfsHash,
        string fullName,
        string email,
        string nationality,
        string profilePicture,
        string gender,
        uint256 registeredAt
    );

    event SponsorRegistered(
        address indexed user,
        string ipfsHash,
        string fullName,
        string email,
        string nationality,
        string profilePicture,
        string gender,
        string companyName,
        uint256 registeredAt
    );

    // Events for Admin role management
    event AdminAdded(address indexed newAdmin, address indexed addedBy);
    event AdminRemoved(address indexed removedAdmin, address indexed removedBy);
    event AdminRegistered(
        address indexed user,
        string ipfsHash,
        string fullName,
        string email,
        uint256 registeredAt
    );

    // Events for Volunteer Verification Workflow
    event VerificationRequested(address indexed volunteer, uint256 timestamp);
    event VerificationApproved(address indexed volunteer, uint256 timestamp);

    // Event for Reporting Mechanism
    event ReportSubmitted(
        address indexed reporter,
        address indexed reported,
        string reason,
        uint256 timestamp
    );

    /**
     * @dev Modifier to restrict functions to admins only.
     */
    modifier onlyAdmin() {
        require(isAdmin[msg.sender], "Only admins can perform this action.");
        _;
    }

    /**
     * @dev Constructor sets the deployer as the initial admin.
     */
    constructor() {
        isAdmin[msg.sender] = true;
        emit AdminAdded(msg.sender, msg.sender);
    }

    /**
     * @dev Adds a new admin. Can only be called by an existing admin.
     * @param _newAdmin The address to be granted admin privileges.
     */
    function addAdmin(address _newAdmin) external onlyAdmin {
        require(_newAdmin != address(0), "Invalid address.");
        require(!isAdmin[_newAdmin], "Address is already an admin.");

        isAdmin[_newAdmin] = true;
        emit AdminAdded(_newAdmin, msg.sender);
    }

    /**
     * @dev Removes an existing admin. Can only be called by an existing admin.
     * @param _admin The address to have admin privileges revoked.
     */
    function removeAdmin(address _admin) external onlyAdmin {
        require(isAdmin[_admin], "Address is not an admin.");
        require(_admin != msg.sender, "Admins cannot remove themselves.");

        isAdmin[_admin] = false;
        emit AdminRemoved(_admin, msg.sender);
    }

    /**
     * @dev Registers a new user with their IPFS hash and critical information.
     *      Emits a role-specific event upon successful registration.
     *      Refactored into smaller internal functions to prevent "Stack too deep" errors.
     * @param _ipfsHash The IPFS hash of the user's detailed data.
     * @param _fullName The full name of the user.
     * @param _email The email address of the user.
     * @param _role The role of the user (doctor, patient, volunteer, sponsor, admin).
     * @param _additionalInfo Additional role-specific information as a JSON string.
     */
    function registerUser(
        string memory _ipfsHash,
        string memory _fullName,
        string memory _email,
        string memory _role,
        string memory _additionalInfo
    ) external {
        require(!users[msg.sender].isRegistered, "User is already registered.");
        require(bytes(_ipfsHash).length > 0, "IPFS hash is required.");
        require(bytes(_fullName).length > 0, "Full name is required.");
        require(bytes(_email).length > 0, "Email is required.");
        require(
            keccak256(bytes(_role)) == keccak256(bytes("doctor")) ||
                keccak256(bytes(_role)) == keccak256(bytes("patient")) ||
                keccak256(bytes(_role)) == keccak256(bytes("volunteer")) ||
                keccak256(bytes(_role)) == keccak256(bytes("sponsor")) ||
                keccak256(bytes(_role)) == keccak256(bytes("admin")),
            "Invalid role."
        );

        // If the role is admin, ensure that only existing admins can register new admins
        if (keccak256(bytes(_role)) == keccak256(bytes("admin"))) {
            require(
                isAdmin[msg.sender],
                "Only admins can register a new admin."
            );
        }

        // Register the user
        users[msg.sender] = User(_ipfsHash, true, _role, false);

        // Increment the number of signups
        numberOfSignups += 1;

        bytes memory additionalInfoBytes = bytes(_additionalInfo);

        // Delegate role-specific registration to internal functions
        if (keccak256(bytes(_role)) == keccak256(bytes("doctor"))) {
            _registerDoctor(additionalInfoBytes, _ipfsHash, _fullName, _email);
        } else if (keccak256(bytes(_role)) == keccak256(bytes("patient"))) {
            _registerPatient(additionalInfoBytes, _ipfsHash, _fullName, _email);
        } else if (keccak256(bytes(_role)) == keccak256(bytes("volunteer"))) {
            _registerVolunteer(
                additionalInfoBytes,
                _ipfsHash,
                _fullName,
                _email
            );
        } else if (keccak256(bytes(_role)) == keccak256(bytes("sponsor"))) {
            _registerSponsor(additionalInfoBytes, _ipfsHash, _fullName, _email);
        } else if (keccak256(bytes(_role)) == keccak256(bytes("admin"))) {
            _registerAdmin(additionalInfoBytes, _ipfsHash, _fullName, _email);
        }
    }

    /**
     * @dev Internal function to handle doctor registration.
     * @param additionalInfoBytes Encoded additional information specific to doctors.
     * @param _ipfsHash The IPFS hash of the doctor's data.
     * @param _fullName The full name of the doctor.
     * @param _email The email address of the doctor.
     */
    function _registerDoctor(
        bytes memory additionalInfoBytes,
        string memory _ipfsHash,
        string memory _fullName,
        string memory _email
    ) internal {
        (
            string memory nationality,
            string memory profilePicture,
            string memory major,
            string memory specialty,
            string memory medicalSchoolEmail,
            string memory licensure,
            uint256 yearOfGraduation,
            uint256 yearsOfExperience,
            uint256 yearOfExpiration,
            string memory licensureEmail,
            string memory hospitalAffiliation
        ) = abi.decode(
                additionalInfoBytes,
                (
                    string,
                    string,
                    string,
                    string,
                    string,
                    string,
                    uint256,
                    uint256,
                    uint256,
                    string,
                    string
                )
            );

        emit DoctorRegistered(
            msg.sender,
            _ipfsHash,
            _fullName,
            _email,
            nationality,
            profilePicture,
            major,
            specialty,
            medicalSchoolEmail,
            licensure,
            yearOfGraduation,
            yearsOfExperience,
            yearOfExpiration,
            licensureEmail,
            hospitalAffiliation,
            block.timestamp
        );
    }

    /**
     * @dev Internal function to handle patient registration.
     * @param additionalInfoBytes Encoded additional information specific to patients.
     * @param _ipfsHash The IPFS hash of the patient's data.
     * @param _fullName The full name of the patient.
     * @param _email The email address of the patient.
     */
    function _registerPatient(
        bytes memory additionalInfoBytes,
        string memory _ipfsHash,
        string memory _fullName,
        string memory _email
    ) internal {
        (
            string memory nationality,
            string memory profilePicture,
            string memory dateOfBirth,
            string memory gender,
            string memory medicalCondition,
            string memory allergies,
            string memory emergencyContact1,
            string memory emergencyContact2,
            string memory hospitalEmail,
            string memory hospitalContact,
            string memory additionalInformation
        ) = abi.decode(
                additionalInfoBytes,
                (
                    string,
                    string,
                    string,
                    string,
                    string,
                    string,
                    string,
                    string,
                    string,
                    string,
                    string
                )
            );

        emit PatientRegistered(
            msg.sender,
            _ipfsHash,
            _fullName,
            _email,
            nationality,
            profilePicture,
            dateOfBirth,
            gender,
            medicalCondition,
            allergies,
            emergencyContact1,
            emergencyContact2,
            hospitalEmail,
            hospitalContact,
            additionalInformation,
            block.timestamp
        );
    }

    /**
     * @dev Internal function to handle volunteer registration.
     * @param additionalInfoBytes Encoded additional information specific to volunteers.
     * @param _ipfsHash The IPFS hash of the volunteer's data.
     * @param _fullName The full name of the volunteer.
     * @param _email The email address of the volunteer.
     */
    function _registerVolunteer(
        bytes memory additionalInfoBytes,
        string memory _ipfsHash,
        string memory _fullName,
        string memory _email
    ) internal {
        (
            string memory nationality,
            string memory profilePicture,
            string memory gender
        ) = abi.decode(additionalInfoBytes, (string, string, string));

        emit VolunteerRegistered(
            msg.sender,
            _ipfsHash,
            _fullName,
            _email,
            nationality,
            profilePicture,
            gender,
            block.timestamp
        );
    }

    /**
     * @dev Internal function to handle sponsor registration.
     * @param additionalInfoBytes Encoded additional information specific to sponsors.
     * @param _ipfsHash The IPFS hash of the sponsor's data.
     * @param _fullName The full name of the sponsor.
     * @param _email The email address of the sponsor.
     */
    function _registerSponsor(
        bytes memory additionalInfoBytes,
        string memory _ipfsHash,
        string memory _fullName,
        string memory _email
    ) internal {
        (
            string memory nationality,
            string memory profilePicture,
            string memory gender,
            string memory companyName
        ) = abi.decode(additionalInfoBytes, (string, string, string, string));

        emit SponsorRegistered(
            msg.sender,
            _ipfsHash,
            _fullName,
            _email,
            nationality,
            profilePicture,
            gender,
            companyName,
            block.timestamp
        );
    }

    /**
     * @dev Internal function to handle admin registration.
     *      Grants admin privileges to the user.
     * @param additionalInfoBytes Encoded additional information specific to admins (if any).
     * @param _ipfsHash The IPFS hash of the admin's data.
     * @param _fullName The full name of the admin.
     * @param _email The email address of the admin.
     */
    function _registerAdmin(
        bytes memory additionalInfoBytes,
        string memory _ipfsHash,
        string memory _fullName,
        string memory _email
    ) internal {
        // If there are additional admin-specific fields, decode them here
        // Currently, assuming no additional fields for admins

        // Emit AdminRegistered event
        emit AdminRegistered(
            msg.sender,
            _ipfsHash,
            _fullName,
            _email,
            block.timestamp
        );
    }

    /**
     * @dev Allows a volunteer to apply for verification.
     *      Emits a VerificationRequested event upon application.
     */
    function applyForVerification() external {
        require(
            keccak256(bytes(users[msg.sender].role)) ==
                keccak256(bytes("volunteer")),
            "Only volunteers can apply for verification."
        );
        require(users[msg.sender].isRegistered, "User is not registered.");
        require(!users[msg.sender].isVerified, "User is already verified.");
        require(
            !verificationRequests[msg.sender],
            "Verification already requested."
        );

        verificationRequests[msg.sender] = true;
        emit VerificationRequested(msg.sender, block.timestamp);
    }

    /**
     * @dev Allows an admin to approve a volunteer's verification request.
     *      Sets the volunteer's isVerified status to true.
     *      Emits a VerificationApproved event upon approval.
     * @param _volunteer The address of the volunteer to verify.
     */
    function approveVerification(address _volunteer) external onlyAdmin {
        require(
            verificationRequests[_volunteer],
            "No pending verification request."
        );
        require(
            keccak256(bytes(users[_volunteer].role)) ==
                keccak256(bytes("volunteer")),
            "User is not a volunteer."
        );
        require(!users[_volunteer].isVerified, "User is already verified.");

        users[_volunteer].isVerified = true;
        verificationRequests[_volunteer] = false;

        // Increment the number of verifications
        numberOfVerifications += 1;

        emit VerificationApproved(_volunteer, block.timestamp);
    }

    /**
     * @dev Allows a user to report another user for misconduct or other issues.
     *      Emits a ReportSubmitted event upon reporting.
     * @param _reportedUser The address of the user being reported.
     * @param _reason The reason for reporting the user.
     */
    function reportUser(address _reportedUser, string memory _reason) external {
        require(
            users[msg.sender].isRegistered,
            "Only registered users can report."
        );
        require(
            users[_reportedUser].isRegistered,
            "Reported user must be registered."
        );
        require(_reportedUser != msg.sender, "Cannot report yourself.");
        require(bytes(_reason).length > 0, "Reason is required.");

        // Create a new report
        reports.push(
            Report({
                reporter: msg.sender,
                reported: _reportedUser,
                reason: _reason,
                timestamp: block.timestamp
            })
        );

        // Increment the number of reports
        numberOfReports += 1;

        emit ReportSubmitted(
            msg.sender,
            _reportedUser,
            _reason,
            block.timestamp
        );
    }

    /**
     * @dev Checks if a user is registered.
     * @param _user The Ethereum address to check.
     * @return True if the user is registered, false otherwise.
     */
    function isRegistered(address _user) external view returns (bool) {
        return users[_user].isRegistered;
    }

    /**
     * @dev Retrieves the IPFS hash of a registered user.
     * @param _user The Ethereum address of the user.
     * @return The IPFS hash associated with the user.
     */
    function getUserIPFS(address _user) external view returns (string memory) {
        require(users[_user].isRegistered, "User is not registered.");
        return users[_user].ipfsHash;
    }

    /**
     * @dev Retrieves the verification status of a user.
     * @param _user The Ethereum address of the user.
     * @return True if the user is verified, false otherwise.
     */
    function isVerified(address _user) external view returns (bool) {
        require(users[_user].isRegistered, "User is not registered.");
        return users[_user].isVerified;
    }

    /**
     * @dev Retrieves the role of a user.
     * @param _user The Ethereum address of the user.
     * @return The role of the user as a string.
     */
    function getUserRole(address _user) external view returns (string memory) {
        require(users[_user].isRegistered, "User is not registered.");
        return users[_user].role;
    }

    /**
     * @dev Retrieves the total number of reports made.
     * @return The total number of reports.
     */
    function getTotalReports() external view returns (uint256) {
        return numberOfReports;
    }

    /**
     * @dev Retrieves a specific report by index.
     * @param _index The index of the report in the reports array.
     * @return reporter The address of the reporter.
     * @return reported The address of the reported user.
     * @return reason The reason for the report.
     * @return timestamp The time when the report was made.
     */
    function getReport(
        uint256 _index
    )
        external
        view
        returns (
            address reporter,
            address reported,
            string memory reason,
            uint256 timestamp
        )
    {
        require(_index < reports.length, "Report index out of bounds.");
        Report memory rpt = reports[_index];
        return (rpt.reporter, rpt.reported, rpt.reason, rpt.timestamp);
    }

    /**
     * @dev Retrieves the total number of signups.
     * @return The total number of signups.
     */
    function getTotalSignups() external view returns (uint256) {
        return numberOfSignups;
    }

    /**
     * @dev Retrieves the total number of verifications.
     * @return The total number of verifications.
     */
    function getTotalVerifications() external view returns (uint256) {
        return numberOfVerifications;
    }
}

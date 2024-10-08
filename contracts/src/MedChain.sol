// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

/**
 * @title MedChain
 * @dev A contract to register and track user addresses with role-specific events for indexing.
 */
contract MedChain {
    struct User {
        string ipfsHash; // IPFS hash of the user's data
        bool isRegistered; // Flag to track if a user is already registered
    }

    mapping(address => User) private users;

    // Events for each user role
    event DoctorRegistered(
        address indexed user,
        string ipfsHash,
        string fullName,
        string email,
        string specialization,
        string licenseNumber,
        uint256 yearsOfExperience,
        string bio,
        string hospitalAffiliation,
        uint256 registeredAt
    );

    event PatientRegistered(
        address indexed user,
        string ipfsHash,
        string fullName,
        string email,
        string dateOfBirth,
        string gender,
        string medicalHistory,
        string allergies,
        string primaryCarePhysician,
        uint256 registeredAt
    );

    event VolunteerRegistered(
        address indexed user,
        string ipfsHash,
        string fullName,
        string email,
        string gender,
        uint256 registeredAt
    );

    event SponsorRegistered(
        address indexed user,
        string ipfsHash,
        string fullName,
        string email,
        string gender,
        string companyName,
        uint256 registeredAt
    );

    /**
     * @dev Registers a new user with their IPFS hash and critical information.
     * Emits a role-specific event upon successful registration.
     * @param _ipfsHash The IPFS hash of the user's detailed data.
     * @param _fullName The full name of the user.
     * @param _email The email address of the user.
     * @param _role The role of the user (doctor, patient, volunteer, sponsor).
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
                keccak256(bytes(_role)) == keccak256(bytes("sponsor")),
            "Invalid role."
        );

        users[msg.sender] = User(_ipfsHash, true);

        if (keccak256(bytes(_role)) == keccak256(bytes("doctor"))) {
            // Decode _additionalInfo for doctor-specific fields
            (
                string memory specialization,
                string memory licenseNumber,
                uint256 yearsOfExperience,
                string memory bio,
                string memory hospitalAffiliation
            ) = abi.decode(
                    bytes(_additionalInfo),
                    (string, string, uint256, string, string)
                );

            emit DoctorRegistered(
                msg.sender,
                _ipfsHash,
                _fullName,
                _email,
                specialization,
                licenseNumber,
                yearsOfExperience,
                bio,
                hospitalAffiliation,
                block.timestamp
            );
        } else if (keccak256(bytes(_role)) == keccak256(bytes("patient"))) {
            // Decode _additionalInfo for patient-specific fields
            (
                string memory dateOfBirth,
                string memory gender,
                string memory medicalHistory,
                string memory allergies,
                string memory primaryCarePhysician
            ) = abi.decode(
                    bytes(_additionalInfo),
                    (string, string, string, string, string)
                );

            emit PatientRegistered(
                msg.sender,
                _ipfsHash,
                _fullName,
                _email,
                dateOfBirth,
                gender,
                medicalHistory,
                allergies,
                primaryCarePhysician,
                block.timestamp
            );
        } else if (keccak256(bytes(_role)) == keccak256(bytes("volunteer"))) {
            // Decode _additionalInfo for volunteer-specific fields
            string memory gender = abi.decode(bytes(_additionalInfo), (string));

            emit VolunteerRegistered(
                msg.sender,
                _ipfsHash,
                _fullName,
                _email,
                gender,
                block.timestamp
            );
        } else if (keccak256(bytes(_role)) == keccak256(bytes("sponsor"))) {
            // Decode _additionalInfo for sponsor-specific fields
            (string memory gender, string memory companyName) = abi.decode(
                bytes(_additionalInfo),
                (string, string)
            );

            emit SponsorRegistered(
                msg.sender,
                _ipfsHash,
                _fullName,
                _email,
                gender,
                companyName,
                block.timestamp
            );
        }
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
}

// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.18;

import {Test, console} from "forge-std/Test.sol";
import {MedChain} from "../src/MedChain.sol";

contract MedChainTest is Test {
    MedChain public _contract;

    // Dummy data for testing
    string constant mockIPFSHash1 =
        "QmTestHash1234567890abcdefABC1234567890abcdefABCD";
    string constant mockIPFSHash2 =
        "QmAnotherTestHash0987654321fedcbaDCBA0987654321fedcbaDCBA";
    string constant fullName1 = "Dr. John Doe";
    string constant fullName2 = "Dr. Jane Smith";
    string constant email1 = "john.doe@example.com";
    string constant email2 = "jane.smith@example.com";
    string constant roleDoctor = "doctor";
    string constant rolePatient = "patient";
    string constant roleVolunteer = "volunteer";
    string constant roleSponsor = "sponsor";

    // Additional role-specific data
    string constant specialization = "Cardiology";
    string constant licenseNumber = "DOC123456";
    uint256 constant yearsOfExperience = 10;
    string constant bio = "Experienced cardiologist.";
    string constant hospitalAffiliation = "City Hospital";

    string constant dateOfBirth = "1980-01-01";
    string constant gender = "male";
    string constant medicalHistory = "Hypertension";
    string constant allergies = "Penicillin";
    string constant primaryCarePhysician = "Dr. House";

    string constant companyName = "HealthCorp Inc.";

    // Test addresses
    address user1 = address(0x123);
    address user2 = address(0x456);
    address user3 = address(0x789);
    address user4 = address(0xABC);

    // Define the Events
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

    function setUp() public {
        _contract = new MedChain();
    }

    /**
     * @dev Test registering a new doctor user with valid data.
     */
    function testRegisterDoctorUser() public {
        // Prepare additional info for doctor
        bytes memory additionalInfo = abi.encode(
            specialization,
            licenseNumber,
            yearsOfExperience,
            bio,
            hospitalAffiliation
        );

        // Expect the DoctorRegistered event
        vm.expectEmit(true, false, false, true);
        emit DoctorRegistered(
            user1,
            mockIPFSHash1,
            fullName1,
            email1,
            specialization,
            licenseNumber,
            yearsOfExperience,
            bio,
            hospitalAffiliation,
            block.timestamp
        );

        // Simulate user1 calling registerUser
        vm.prank(user1);
        _contract.registerUser(
            mockIPFSHash1,
            fullName1,
            email1,
            roleDoctor,
            string(additionalInfo)
        );

        // Verify that user1 is registered
        bool isRegistered = _contract.isRegistered(user1);
        assertTrue(isRegistered, "User1 should be registered.");

        // Verify that the IPFS hash is stored correctly
        string memory storedHash = _contract.getUserIPFS(user1);
        assertEq(storedHash, mockIPFSHash1, "Stored IPFS hash does not match.");
    }

    /**
     * @dev Test registering a new patient user with valid data.
     */
    function testRegisterPatientUser() public {
        // Prepare additional info for patient
        bytes memory additionalInfo = abi.encode(
            dateOfBirth,
            gender,
            medicalHistory,
            allergies,
            primaryCarePhysician
        );

        // Expect the PatientRegistered event
        vm.expectEmit(true, false, false, true);
        emit PatientRegistered(
            user2,
            mockIPFSHash2,
            fullName2,
            email2,
            dateOfBirth,
            gender,
            medicalHistory,
            allergies,
            primaryCarePhysician,
            block.timestamp
        );

        // Simulate user2 calling registerUser
        vm.prank(user2);
        _contract.registerUser(
            mockIPFSHash2,
            fullName2,
            email2,
            rolePatient,
            string(additionalInfo)
        );

        // Verify that user2 is registered
        bool isRegistered = _contract.isRegistered(user2);
        assertTrue(isRegistered, "User2 should be registered.");

        // Verify that the IPFS hash is stored correctly
        string memory storedHash = _contract.getUserIPFS(user2);
        assertEq(storedHash, mockIPFSHash2, "Stored IPFS hash does not match.");
    }

    /**
     * @dev Test registering a new volunteer user with valid data.
     */
    function testRegisterVolunteerUser() public {
        // Prepare additional info for volunteer
        bytes memory additionalInfo = abi.encode(gender);

        // Expect the VolunteerRegistered event
        vm.expectEmit(true, false, false, true);
        emit VolunteerRegistered(
            user3,
            mockIPFSHash1,
            fullName1,
            email1,
            gender,
            block.timestamp
        );

        // Simulate user3 calling registerUser
        vm.prank(user3);
        _contract.registerUser(
            mockIPFSHash1,
            fullName1,
            email1,
            roleVolunteer,
            string(additionalInfo)
        );

        // Verify that user3 is registered
        bool isRegistered = _contract.isRegistered(user3);
        assertTrue(isRegistered, "User3 should be registered.");

        // Verify that the IPFS hash is stored correctly
        string memory storedHash = _contract.getUserIPFS(user3);
        assertEq(storedHash, mockIPFSHash1, "Stored IPFS hash does not match.");
    }

    /**
     * @dev Test registering a new sponsor user with valid data.
     */
    function testRegisterSponsorUser() public {
        // Prepare additional info for sponsor
        bytes memory additionalInfo = abi.encode(gender, companyName);

        // Expect the SponsorRegistered event
        vm.expectEmit(true, false, false, true);
        emit SponsorRegistered(
            user4,
            mockIPFSHash2,
            fullName2,
            email2,
            gender,
            companyName,
            block.timestamp
        );

        // Simulate user4 calling registerUser
        vm.prank(user4);
        _contract.registerUser(
            mockIPFSHash2,
            fullName2,
            email2,
            roleSponsor,
            string(additionalInfo)
        );

        // Verify that user4 is registered
        bool isRegistered = _contract.isRegistered(user4);
        assertTrue(isRegistered, "User4 should be registered.");

        // Verify that the IPFS hash is stored correctly
        string memory storedHash = _contract.getUserIPFS(user4);
        assertEq(storedHash, mockIPFSHash2, "Stored IPFS hash does not match.");
    }

    /**
     * @dev Test ensuring that a user cannot register twice.
     */
    function testCannotRegisterTwice() public {
        // Prepare additional info for doctor
        bytes memory additionalInfo = abi.encode(
            specialization,
            licenseNumber,
            yearsOfExperience,
            bio,
            hospitalAffiliation
        );

        // Simulate user1 registering the first time
        vm.prank(user1);
        _contract.registerUser(
            mockIPFSHash1,
            fullName1,
            email1,
            roleDoctor,
            string(additionalInfo)
        );

        // Attempt to register user1 again with different data
        vm.prank(user1);
        vm.expectRevert("User is already registered.");
        _contract.registerUser(
            mockIPFSHash2,
            fullName2,
            email2,
            roleDoctor,
            string(additionalInfo)
        );
    }

    /**
     * @dev Test that an unregistered user is not marked as registered.
     */
    function testUnregisteredUserIsNotRegistered() public {
        // Ensure that user5, who hasn't registered, is not registered
        address user5 = address(0xDEF);
        bool isRegistered = _contract.isRegistered(user5);
        assertFalse(isRegistered, "User5 should not be registered.");
    }

    /**
     * @dev Test retrieving IPFS hash for a registered user.
     */
    function testGetUserIPFS() public {
        // Prepare additional info for doctor
        bytes memory additionalInfo = abi.encode(
            specialization,
            licenseNumber,
            yearsOfExperience,
            bio,
            hospitalAffiliation
        );

        // Register user1
        vm.prank(user1);
        _contract.registerUser(
            mockIPFSHash1,
            fullName1,
            email1,
            roleDoctor,
            string(additionalInfo)
        );

        // Retrieve IPFS hash
        string memory retrievedHash = _contract.getUserIPFS(user1);
        assertEq(
            retrievedHash,
            mockIPFSHash1,
            "Retrieved IPFS hash does not match."
        );
    }

    /**
     * @dev Test that retrieving IPFS hash for an unregistered user reverts.
     */
    function testGetIPFSOfUnregisteredUser() public {
        // Attempt to retrieve IPFS hash for user5 who is not registered
        address user5 = address(0xDEF);
        vm.expectRevert("User is not registered.");
        _contract.getUserIPFS(user5);
    }

    /**
     * @dev Test event emission upon user registration for each role.
     */
    function testUserRegisteredEventEmission() public {
        // Prepare additional info for patient
        bytes memory patientAdditionalInfo = abi.encode(
            dateOfBirth,
            gender,
            medicalHistory,
            allergies,
            primaryCarePhysician
        );

        // Expect the PatientRegistered event
        vm.expectEmit(true, false, false, true);
        emit PatientRegistered(
            user2,
            mockIPFSHash2,
            fullName2,
            email2,
            dateOfBirth,
            gender,
            medicalHistory,
            allergies,
            primaryCarePhysician,
            block.timestamp
        );

        // Register user2 as a patient
        vm.prank(user2);
        _contract.registerUser(
            mockIPFSHash2,
            fullName2,
            email2,
            rolePatient,
            string(patientAdditionalInfo)
        );
    }

    /**
     * @dev Test registering a user with an invalid role.
     */
    function testRegisterUserWithInvalidRole() public {
        string memory invalidRole = "invalid_role";

        // Prepare additional info (dummy, as it won't be used)
        bytes memory additionalInfo = abi.encode("");

        // Attempt to register with an invalid role
        vm.prank(user1);
        vm.expectRevert("Invalid role.");
        _contract.registerUser(
            mockIPFSHash1,
            fullName1,
            email1,
            invalidRole,
            string(additionalInfo)
        );
    }

    /**
     * @dev Test registering a user with empty IPFS hash.
     */
    function testRegisterUserWithEmptyIPFSHash() public {
        string memory emptyIPFSHash = "";

        // Prepare additional info for doctor
        bytes memory additionalInfo = abi.encode(
            specialization,
            licenseNumber,
            yearsOfExperience,
            bio,
            hospitalAffiliation
        );

        // Attempt to register with an empty IPFS hash
        vm.prank(user1);
        vm.expectRevert("IPFS hash is required.");
        _contract.registerUser(
            emptyIPFSHash,
            fullName1,
            email1,
            roleDoctor,
            string(additionalInfo)
        );
    }

    /**
     * @dev Test registering a user with empty full name.
     */
    function testRegisterUserWithEmptyFullName() public {
        string memory emptyFullName = "";

        // Prepare additional info for doctor
        bytes memory additionalInfo = abi.encode(
            specialization,
            licenseNumber,
            yearsOfExperience,
            bio,
            hospitalAffiliation
        );

        // Attempt to register with an empty full name
        vm.prank(user1);
        vm.expectRevert("Full name is required.");
        _contract.registerUser(
            mockIPFSHash1,
            emptyFullName,
            email1,
            roleDoctor,
            string(additionalInfo)
        );
    }

    /**
     * @dev Test registering a user with empty email.
     */
    function testRegisterUserWithEmptyEmail() public {
        string memory emptyEmail = "";

        // Prepare additional info for doctor
        bytes memory additionalInfo = abi.encode(
            specialization,
            licenseNumber,
            yearsOfExperience,
            bio,
            hospitalAffiliation
        );

        // Attempt to register with an empty email
        vm.prank(user1);
        vm.expectRevert("Email is required.");
        _contract.registerUser(
            mockIPFSHash1,
            fullName1,
            emptyEmail,
            roleDoctor,
            string(additionalInfo)
        );
    }
}

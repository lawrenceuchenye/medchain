// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.18;

import {Test, console} from "forge-std/Test.sol";
import {MedChain} from "../src/MedChain.sol";

/**
 * @title MedChainTest
 * @dev Test suite for the MedChain contract.
 */
contract MedChainTest is Test {
    MedChain public medChain;

    // Dummy user addresses
    address deployer = address(0x1);
    address admin1 = address(0x2);
    address admin2 = address(0x3);
    address doctor = address(0x4);
    address patient = address(0x5);
    address volunteer = address(0x6);
    address sponsor = address(0x7);
    address nonAdmin = address(0x8);

    /**
     * @dev Set up the testing environment by deploying the MedChain contract.
     */
    function setUp() public {
        // Deploy the MedChain contract from the deployer address
        vm.prank(deployer);
        medChain = new MedChain();

        // Add admin1 as an admin
        vm.prank(deployer);
        medChain.addAdmin(admin1);

        // Register a doctor
        vm.prank(doctor);
        bytes memory doctorInfo = abi.encode(
            "USA", // nationality
            "http://example.com/doctor.jpg", // profilePicture
            "Internal Medicine", // major
            "Cardiology", // specialty
            "medical.school@example.com", // medicalSchoolEmail
            "LIC123456", // licensure
            uint256(1625097600), // yearOfGraduation
            uint256(10), // yearsOfExperience
            uint256(1893456000), // yearOfExpiration
            "licensure.email@example.com", // licensureEmail
            "City Hospital" // hospitalAffiliation
        );
        medChain.registerUser(
            "QmDoctorIPFSHash",
            "Dr. Alice",
            "alice@example.com",
            "doctor",
            string(doctorInfo)
        );

        // Register a patient
        vm.prank(patient);
        bytes memory patientInfo = abi.encode(
            "UK", // nationality
            "http://example.com/patient.jpg", // profilePicture
            "1990-01-01", // dateOfBirth
            "male", // gender
            "Hypertension", // medicalCondition
            "Penicillin", // allergies
            "Jane Emergency", // emergencyContact1
            "John Emergency", // emergencyContact2
            "hospital.email@example.com", // hospitalEmail
            "123-456-7890", // hospitalContact
            "Additional information about the patient." // additionalInformation
        );
        medChain.registerUser(
            "QmPatientIPFSHash",
            "Charlie Patient",
            "charlie@example.com",
            "patient",
            string(patientInfo)
        );

        // Register a volunteer
        vm.prank(volunteer);
        bytes memory volunteerInfo = abi.encode(
            "Canada", // nationality
            "http://example.com/volunteer.jpg", // profilePicture
            "female" // gender
        );
        medChain.registerUser(
            "QmVolunteerIPFSHash",
            "Bob Volunteer",
            "bob@example.com",
            "volunteer",
            string(volunteerInfo)
        );

        // Register a sponsor
        vm.prank(sponsor);
        bytes memory sponsorInfo = abi.encode(
            "Germany", // nationality
            "http://example.com/sponsor.jpg", // profilePicture
            "female", // gender
            "Tech Corp" // companyName
        );
        medChain.registerUser(
            "QmSponsorIPFSHash",
            "Diana Sponsor",
            "diana@example.com",
            "sponsor",
            string(sponsorInfo)
        );

        // Ensure nonAdmin is not registered
        bool isNonAdminRegistered = medChain.isRegistered(nonAdmin);
        assertFalse(isNonAdminRegistered, "nonAdmin should not be registered.");
    }

    /**
     * @dev Test that only admins can add new admins.
     */
    function testOnlyAdminsCanAddAdmins() public {
        // Attempt to add admin2 by nonAdmin (should fail)
        vm.prank(nonAdmin);
        vm.expectRevert("Only admins can perform this action.");
        medChain.addAdmin(admin2);

        // Add admin2 by admin1 (should succeed)
        vm.prank(admin1);
        medChain.addAdmin(admin2);

        // Verify admin2 is now an admin
        bool isAdmin2 = medChain.isAdmin(admin2);
        assertTrue(isAdmin2, "admin2 should be an admin.");
    }

    /**
     * @dev Test that only admins can remove existing admins.
     */
    function testOnlyAdminsCanRemoveAdmins() public {
        // Add admin2 by admin1
        vm.prank(admin1);
        medChain.addAdmin(admin2);

        // Remove admin2 by admin1 (should succeed)
        vm.prank(admin1);
        medChain.removeAdmin(admin2);

        // Verify admin2 is no longer an admin
        bool isAdmin2 = medChain.isAdmin(admin2);
        assertFalse(isAdmin2, "admin2 should no longer be an admin.");

        // Attempt to remove admin1 by nonAdmin (should fail)
        vm.prank(nonAdmin);
        vm.expectRevert("Only admins can perform this action.");
        medChain.removeAdmin(admin1);
    }

    /**
     * @dev Test volunteer applying for verification.
     */
    function testVolunteerCanApplyForVerification() public {
        // Volunteer applies for verification
        vm.prank(volunteer);
        medChain.applyForVerification();

        // Verify that the verification request is recorded
        bool hasRequested = medChain.verificationRequests(volunteer);
        assertTrue(hasRequested, "Verification request should be recorded.");

        // Attempt to apply again (should fail)
        vm.prank(volunteer);
        vm.expectRevert("Verification already requested.");
        medChain.applyForVerification();
    }

    /**
     * @dev Test admin approving volunteer verification.
     */
    function testAdminCanApproveVolunteerVerification() public {
        // Volunteer applies for verification
        vm.prank(volunteer);
        medChain.applyForVerification();

        // Admin approves the verification
        vm.prank(admin1);
        medChain.approveVerification(volunteer);

        // Verify that the volunteer is now verified
        bool isVerified = medChain.isVerified(volunteer);
        assertTrue(isVerified, "Volunteer should be verified after approval.");

        // Verify that the verification request is cleared
        bool hasRequested = medChain.verificationRequests(volunteer);
        assertFalse(
            hasRequested,
            "Verification request should be cleared after approval."
        );
    }

    /**
     * @dev Test that non-admins cannot approve verification requests.
     */
    function testNonAdminsCannotApproveVerification() public {
        // Volunteer applies for verification
        vm.prank(volunteer);
        medChain.applyForVerification();

        // Non-admin attempts to approve verification (should fail)
        vm.prank(nonAdmin);
        vm.expectRevert("Only admins can perform this action.");
        medChain.approveVerification(volunteer);
    }

    /**
     * @dev Test that only volunteers can apply for verification.
     */
    function testOnlyVolunteersCanApplyForVerification() public {
        // Doctor attempts to apply for verification (should fail)
        vm.prank(doctor);
        vm.expectRevert("Only volunteers can apply for verification.");
        medChain.applyForVerification();

        // Sponsor attempts to apply for verification (should fail)
        vm.prank(sponsor);
        vm.expectRevert("Only volunteers can apply for verification.");
        medChain.applyForVerification();
    }

    /**
     * @dev Test that verified volunteers can perform verified actions (if any).
     *      Placeholder for future functionalities.
     */
    function testVerifiedVolunteerCanPerformActions() public {
        // Implement tests based on future functionalities that require verified volunteers
    }

    /**
     * @dev Test that admins cannot remove themselves.
     */
    function testAdminsCannotRemoveThemselves() public {
        // Attempt to remove admin1 by admin1 (should fail)
        vm.prank(admin1);
        vm.expectRevert("Admins cannot remove themselves.");
        medChain.removeAdmin(admin1);
    }

    /**
     * @dev Test that adding an admin with zero address fails.
     */
    function testAddAdminWithZeroAddressFails() public {
        vm.prank(admin1);
        vm.expectRevert("Invalid address.");
        medChain.addAdmin(address(0));
    }

    /**
     * @dev Test that removing a non-admin address fails.
     */
    function testRemoveNonAdminFails() public {
        vm.prank(admin1);
        vm.expectRevert("Address is not an admin.");
        medChain.removeAdmin(nonAdmin);
    }
}

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
    address reporter = address(0x9);
    address reportedUser = address(0xA);

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

        // Register a reporter and a reported user for reporting tests
        vm.prank(reporter);
        bytes memory reporterInfo = abi.encode(
            "France", // nationality
            "http://example.com/reporter.jpg", // profilePicture
            "male" // gender
        );
        medChain.registerUser(
            "QmReporterIPFSHash",
            "Eve Reporter",
            "eve@example.com",
            "volunteer",
            string(reporterInfo)
        );

        vm.prank(reportedUser);
        bytes memory reportedUserInfo = abi.encode(
            "Spain", // nationality
            "http://example.com/reported.jpg", // profilePicture
            "male" // gender
        );
        medChain.registerUser(
            "QmReportedIPFSHash",
            "Frank Reported",
            "frank@example.com",
            "volunteer",
            string(reportedUserInfo)
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

        // Verify that numberOfSignups remains consistent
        uint256 totalSignups = medChain.getTotalSignups();
        assertEq(totalSignups, 7, "Total signups should remain unchanged.");
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

        // Verify that numberOfVerifications has incremented
        uint256 totalVerifications = medChain.getTotalVerifications();
        assertEq(totalVerifications, 1, "Total verifications should be 1.");
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

        // Verify that the volunteer is not verified
        bool isVerified = medChain.isVerified(volunteer);
        assertFalse(
            isVerified,
            "Volunteer should not be verified if approval failed."
        );

        // Verify that numberOfVerifications remains unchanged
        uint256 totalVerifications = medChain.getTotalVerifications();
        assertEq(
            totalVerifications,
            0,
            "Total verifications should remain unchanged."
        );
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

    /**
     * @dev Test that numberOfSignups increments correctly upon user registration.
     */
    function testNumberOfSignupsIncrements() public {
        // Initial signups: 7 (from setUp)
        uint256 initialSignups = medChain.getTotalSignups();
        assertEq(initialSignups, 7, "Initial signups should be 7.");

        // Register a new volunteer
        vm.prank(reporter);
        bytes memory newVolunteerInfo = abi.encode(
            "Italy", // nationality
            "http://example.com/newvolunteer.jpg", // profilePicture
            "female" // gender
        );
        medChain.registerUser(
            "QmNewVolunteerIPFSHash",
            "Grace NewVolunteer",
            "grace@example.com",
            "volunteer",
            string(newVolunteerInfo)
        );

        // Verify that numberOfSignups has incremented
        uint256 updatedSignups = medChain.getTotalSignups();
        assertEq(
            updatedSignups,
            8,
            "Total signups should have incremented to 8."
        );
    }

    /**
     * @dev Test that numberOfReports increments correctly upon report submission.
     */
    function testNumberOfReportsIncrements() public {
        // Initial reports: 0
        uint256 initialReports = medChain.getTotalReports();
        assertEq(initialReports, 0, "Initial reports should be 0.");

        // Reporter reports reportedUser
        vm.prank(reporter);
        medChain.reportUser(reportedUser, "Inappropriate behavior.");

        // Verify that numberOfReports has incremented
        uint256 updatedReports = medChain.getTotalReports();
        assertEq(
            updatedReports,
            1,
            "Total reports should have incremented to 1."
        );

        // Verify that the report is stored correctly
        (
            address rptReporter,
            address rptReported,
            string memory rptReason,
            uint256 rptTimestamp
        ) = medChain.getReport(0);

        assertEq(rptReporter, reporter, "Reporter address mismatch.");
        assertEq(rptReported, reportedUser, "Reported user address mismatch.");
        assertEq(
            rptReason,
            "Inappropriate behavior.",
            "Report reason mismatch."
        );
        // Timestamp can be checked for being non-zero or within a reasonable range if needed
    }

    /**
     * @dev Test that reports cannot be made by unregistered users.
     */
    function testUnregisteredUsersCannotReport() public {
        // nonAdmin is not registered
        vm.prank(nonAdmin);
        vm.expectRevert("Only registered users can report.");
        medChain.reportUser(reportedUser, "Spam messages.");
    }

    /**
     * @dev Test that reports cannot be made against unregistered users.
     */
    function testCannotReportUnregisteredUsers() public {
        // Attempt to report a non-registered user (assuming address 0xB is not registered)
        address unregisteredUser = address(0xB);
        vm.prank(reporter);
        vm.expectRevert("Reported user must be registered.");
        medChain.reportUser(unregisteredUser, "Fake profile.");
    }

    /**
     * @dev Test that users cannot report themselves.
     */
    function testUsersCannotReportThemselves() public {
        vm.prank(reporter);
        vm.expectRevert("Cannot report yourself.");
        medChain.reportUser(reporter, "Self-reporting.");
    }

    /**
     * @dev Test that reports must have a reason.
     */
    function testReportMustHaveReason() public {
        vm.prank(reporter);
        vm.expectRevert("Reason is required.");
        medChain.reportUser(reportedUser, "");
    }

    /**
     * @dev Test that the reports array stores multiple reports correctly.
     */
    function testMultipleReportsAreStoredCorrectly() public {
        // Submit first report
        vm.prank(reporter);
        medChain.reportUser(reportedUser, "Harassment.");

        // Submit second report
        vm.prank(doctor);
        medChain.reportUser(reportedUser, "Spam.");

        // Verify total reports
        uint256 totalReports = medChain.getTotalReports();
        assertEq(totalReports, 2, "Total reports should be 2.");

        // Verify first report
        (
            address rptReporter1,
            address rptReported1,
            string memory rptReason1,
            uint256 rptTimestamp1
        ) = medChain.getReport(0);
        assertEq(rptReporter1, reporter, "First report: Reporter mismatch.");
        assertEq(
            rptReported1,
            reportedUser,
            "First report: Reported user mismatch."
        );
        assertEq(rptReason1, "Harassment.", "First report: Reason mismatch.");

        // Verify second report
        (
            address rptReporter2,
            address rptReported2,
            string memory rptReason2,
            uint256 rptTimestamp2
        ) = medChain.getReport(1);
        assertEq(rptReporter2, doctor, "Second report: Reporter mismatch.");
        assertEq(
            rptReported2,
            reportedUser,
            "Second report: Reported user mismatch."
        );
        assertEq(rptReason2, "Spam.", "Second report: Reason mismatch.");
    }
}

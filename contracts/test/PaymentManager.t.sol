// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.18;

import {Test, console} from "forge-std/Test.sol";
import {PaymentManager} from "../src/PaymentManager.sol";

// Import the MedChain contract for testing
import "../src/MedChain.sol";

/**
 * @title PaymentManagerTest
 * @dev Test suite for the PaymentManager contract.
 */
contract PaymentManagerTest is Test {
    PaymentManager public paymentManager;
    MedChain public medChain;

    // Dummy user addresses
    address sponsor = address(0xABCD);
    address doctor = address(0x1234);
    address volunteer = address(0x5678);
    address patient = address(0x9ABC);
    address nonRegistered = address(0xDEF0);

    // Sponsorship variables
    uint256 sponsorshipId;

    // Helper variables
    uint256 initialBalanceDoctor;
    uint256 initialBalanceVolunteer;

    /**
     * @dev Set up the testing environment by deploying MedChain and PaymentManager contracts.
     */
    function setUp() public {
        // Deploy MedChain contract
        medChain = new MedChain();

        // Deploy PaymentManager with MedChain's address
        paymentManager = new PaymentManager(address(medChain));

        // === Doctor Registration ===
        vm.prank(doctor);
        bytes memory doctorAdditionalInfo = abi.encode(
            "USA", // nationality
            "http://example.com/doctor.jpg", // profilePicture
            "Internal Medicine", // major
            "Cardiology", // specialty
            "medical.school@example.com", // medicalSchoolEmail
            "LIC123456", // licensure
            uint256(1625097600), // yearOfGraduation (Unix timestamp for July 1, 2021)
            uint256(10), // yearsOfExperience
            uint256(1893456000), // yearOfExpiration (Unix timestamp for July 1, 2030)
            "licensure.email@example.com", // licensureEmail
            "City Hospital" // hospitalAffiliation
        );
        medChain.registerUser(
            "QmDoctorIPFSHash",
            "Dr. Alice",
            "alice@example.com",
            "doctor",
            string(doctorAdditionalInfo) // Wrap with string()
        );

        // === Volunteer Registration ===
        vm.prank(volunteer);
        bytes memory volunteerAdditionalInfo = abi.encode(
            "Canada", // nationality
            "http://example.com/volunteer.jpg", // profilePicture
            "female" // gender
        );
        medChain.registerUser(
            "QmVolunteerIPFSHash",
            "Bob Volunteer",
            "bob@example.com",
            "volunteer",
            string(volunteerAdditionalInfo) // Wrap with string()
        );

        // === Patient Registration ===
        vm.prank(patient);
        bytes memory patientAdditionalInfo = abi.encode(
            "UK", // nationality
            "http://example.com/patient.jpg", // profilePicture
            "1990-01-01", // dateOfBirth
            "male", // gender
            "Hypertension", // medicalCondition
            "Penicillin", // allergies
            "Jane Emergency", // emergencyContact1
            "John Emergency", // emergencyContact2 (optional)
            "hospital.email@example.com", // hospitalEmail (optional)
            "123-456-7890", // hospitalContact (optional)
            "Additional information about the patient." // additionalInformation (optional)
        );
        medChain.registerUser(
            "QmPatientIPFSHash",
            "Charlie Patient",
            "charlie@example.com",
            "patient",
            string(patientAdditionalInfo) // Wrap with string()
        );

        // === Sponsor Registration ===
        vm.prank(sponsor);
        bytes memory sponsorAdditionalInfo = abi.encode(
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
            string(sponsorAdditionalInfo) // Wrap with string()
        );

        // Ensure nonRegistered is not registered
    }

    /**
     * @dev Test that sponsors can successfully sponsor a registered doctor.
     */
    function testSponsorDoctor() public {
        uint256 sponsorInitialBalance = sponsor.balance;
        uint256 amount = 1 ether;

        // Sponsor funds the doctor
        vm.deal(sponsor, 10 ether); // Assign initial balance
        vm.prank(sponsor);
        vm.expectEmit(true, true, true, true);
        emit PaymentManager.SponsorshipCreated(
            1,
            sponsor,
            doctor,
            patient,
            amount,
            block.timestamp
        );
        paymentManager.sponsorRecipient{value: amount}(doctor, patient);

        // Verify sponsorship details
        PaymentManager.Sponsorship memory sponsorship = paymentManager
            .getSponsorship(1);
        assertEq(sponsorship.id, 1, "Sponsorship ID should be 1.");
        assertEq(sponsorship.sponsor, sponsor, "Sponsor address mismatch.");
        assertEq(sponsorship.recipient, doctor, "Recipient address mismatch.");
        assertEq(sponsorship.patient, patient, "Patient address mismatch.");
        assertEq(sponsorship.amount, amount, "Sponsorship amount mismatch.");
        assertFalse(
            sponsorship.confirmed,
            "Sponsorship should not be confirmed yet."
        );
        assertFalse(
            sponsorship.withdrawn,
            "Sponsorship should not be withdrawn yet."
        );

        // Verify sponsor's balance decreased
        assertEq(
            sponsor.balance,
            sponsorInitialBalance - amount,
            "Sponsor's balance should decrease by the sponsored amount."
        );
    }

    /**
     * @dev Test that sponsors cannot sponsor non-registered recipients.
     */
    function testSponsorNonRegisteredRecipient() public {
        uint256 amount = 1 ether;
        vm.deal(sponsor, 10 ether); // Assign initial balance

        vm.prank(sponsor);
        vm.expectRevert("Recipient must be a registered doctor or volunteer.");
        paymentManager.sponsorRecipient{value: amount}(nonRegistered, patient);
    }

    /**
     * @dev Test that non-patients cannot confirm tasks.
     */
    function testNonPatientCannotConfirmTask() public {
        uint256 amount = 1 ether;

        // Sponsor funds the doctor
        vm.deal(sponsor, 10 ether); // Assign initial balance
        vm.prank(sponsor);
        paymentManager.sponsorRecipient{value: amount}(doctor, patient);

        // Attempt to confirm task by someone other than the patient
        vm.prank(sponsor);
        vm.expectRevert("Only the associated patient can confirm the task.");
        paymentManager.confirmTask(1);
    }

    /**
     * @dev Test that patients can confirm tasks and funds are disbursed.
     */
    function testPatientCanConfirmTaskAndFundsDisbursed() public {
        uint256 amount = 1 ether;

        // Sponsor funds the doctor
        vm.deal(sponsor, 10 ether); // Assign initial balance
        vm.prank(sponsor);
        paymentManager.sponsorRecipient{value: amount}(doctor, patient);

        // Record doctor's initial balance
        initialBalanceDoctor = doctor.balance;
        vm.deal(doctor, 0); // Reset doctor's balance for accurate testing

        // Patient confirms the task
        vm.prank(patient);
        vm.expectEmit(true, false, false, true);
        emit PaymentManager.TaskConfirmed(1, patient, block.timestamp);
        vm.expectEmit(true, false, false, true);
        emit PaymentManager.FundsDisbursed(1, doctor, amount, block.timestamp);
        paymentManager.confirmTask(1);

        // Verify sponsorship status
        PaymentManager.Sponsorship memory sponsorship = paymentManager
            .getSponsorship(1);
        assertTrue(sponsorship.confirmed, "Sponsorship should be confirmed.");
        assertTrue(sponsorship.withdrawn, "Sponsorship should be withdrawn.");

        // Verify doctor's balance increased
        assertEq(
            doctor.balance,
            initialBalanceDoctor + amount,
            "Doctor's balance should increase by the sponsored amount."
        );
    }

    /**
     * @dev Test that a task cannot be confirmed twice.
     */
    function testCannotConfirmTaskTwice() public {
        uint256 amount = 1 ether;

        // Sponsor funds the volunteer
        vm.deal(sponsor, 10 ether); // Assign initial balance
        vm.prank(sponsor);
        paymentManager.sponsorRecipient{value: amount}(volunteer, patient);

        // Patient confirms the task
        vm.prank(patient);
        paymentManager.confirmTask(1);

        // Attempt to confirm the same task again
        vm.prank(patient);
        vm.expectRevert("Task has already been confirmed.");
        paymentManager.confirmTask(1);
    }

    /**
     * @dev Test that only registered patients can confirm tasks.
     */
    function testOnlyRegisteredPatientCanConfirm() public {
        uint256 amount = 1 ether;

        // Sponsor funds the doctor
        vm.deal(sponsor, 10 ether); // Assign initial balance
        vm.prank(sponsor);
        paymentManager.sponsorRecipient{value: amount}(doctor, patient);

        // Attempt to confirm task by non-registered user
        vm.prank(nonRegistered);
        vm.expectRevert("Only the associated patient can confirm the task.");
        paymentManager.confirmTask(1);
    }

    /**
     * @dev Test that funds cannot be disbursed before task confirmation.
     */
    function testFundsCannotBeDisbursedBeforeConfirmation() public {
        uint256 amount = 1 ether;

        // Sponsor funds the volunteer
        vm.deal(sponsor, 10 ether); // Assign initial balance
        vm.prank(sponsor);
        paymentManager.sponsorRecipient{value: amount}(volunteer, patient);

        // Verify volunteer's balance remains unchanged
        assertEq(
            volunteer.balance,
            0,
            "Volunteer should not have received funds yet."
        );
    }

    /**
     * @dev Test that sponsors cannot sponsor themselves.
     */
    function testSponsorCannotSponsorSelf() public {
        uint256 amount = 1 ether;

        vm.deal(sponsor, 10 ether); // Assign initial balance

        vm.prank(sponsor);
        vm.expectRevert("Sponsor cannot sponsor themselves.");
        paymentManager.sponsorRecipient{value: amount}(sponsor, patient);
    }

    /**
     * @dev Test that sponsorship amount must be greater than zero.
     */
    function testSponsorshipAmountGreaterThanZero() public {
        vm.deal(sponsor, 10 ether); // Assign initial balance

        vm.prank(sponsor);
        vm.expectRevert("Sponsorship amount must be greater than zero.");
        paymentManager.sponsorRecipient{value: 0}(doctor, patient);
    }

    /**
     * @dev Test that a patient cannot confirm a non-existent sponsorship.
     */
    function testConfirmNonExistentSponsorship() public {
        vm.prank(patient);
        vm.expectRevert("Sponsorship does not exist.");
        paymentManager.confirmTask(999);
    }
}

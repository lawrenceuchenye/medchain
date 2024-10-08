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

        // Correct: Assigning bytes to a bytes variable
        bytes memory additionalInfo = abi.encode(
            "Cardiology",
            "LIC123456",
            uint256(10),
            "Experienced cardiologist.",
            "City Hospital"
        );

        // Deploy PaymentManager with MedChain's address
        paymentManager = new PaymentManager(address(medChain));

        // Register doctor
        vm.prank(doctor);
        medChain.registerUser(
            "QmDoctorIPFSHash",
            "Dr. Alice",
            "alice@example.com",
            "doctor",
            string(additionalInfo) // Wrap with string()
        );

        // Register volunteer
        vm.prank(volunteer);
        medChain.registerUser(
            "QmVolunteerIPFSHash",
            "Bob Volunteer",
            "bob@example.com",
            "volunteer",
            string(abi.encode("male")) // Wrap with string()
        );

        // Register patient
        vm.prank(patient);
        medChain.registerUser(
            "QmPatientIPFSHash",
            "Charlie Patient",
            "charlie@example.com",
            "patient",
            string(
                abi.encode(
                    "1990-01-01",
                    "male",
                    "Hypertension",
                    "Penicillin",
                    "Dr. House"
                )
            ) // Wrap with string()
        );

        // Ensure nonRegistered is not registered
    }

    // Rest of your test functions remain unchanged...
}

// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Test, console} from "forge-std/Test.sol";
import {MedChain} from "../src/MedChain.sol";

contract MedChainTest is Test {
    MedChain public _contract;

    // Dummy IPFS hash for testing purposes
    string constant mockIPFSHash = "QmTestHash123";
    string constant anotherIPFSHash = "QmAnotherTestHash456";

    address user1 = address(0x123);
    address user2 = address(0x456);

    function setUp() public {
        _contract = new MedChain();
    }

    // Test case 1: Register a new user with a mock IPFS hash
    function testRegisterNewUser() public {
        vm.prank(user1); // Simulate user1 calling the function
        _contract.registerUser(mockIPFSHash);

        // Check if user1's IPFS hash is stored correctly
        assertEq(_contract.getUserIPFS(user1), mockIPFSHash);
    }

    // Test case 2: Check if a user is already registered using the mock IPFS hash
    function testCheckIfUserIsRegistered() public {
        vm.prank(user1); // Simulate user1 calling the function
        _contract.registerUser(mockIPFSHash);

        // Check if user1 is indeed registered
        bool isRegistered = _contract.isRegistered(user1);
        assertTrue(isRegistered);
    }

    // Test case 3: Ensure that a user cannot register twice
    function testCannotRegisterTwice() public {
        // Start pranking as user1
        vm.startPrank(user1);

        // First registration by user1
        _contract.registerUser(mockIPFSHash);

        // Second registration attempt by user1, should revert
        vm.expectRevert("User is already registered.");
        _contract.registerUser(anotherIPFSHash);

        // Stop pranking
        vm.stopPrank();
    }

    // Test case 4: Check that an unregistered user is not registered
    function testUnregisteredUserIsNotRegistered() public {
        // Ensure that user2, who hasn't registered, is not registered
        bool isRegistered = _contract.isRegistered(user2);
        assertFalse(isRegistered);
    }
}

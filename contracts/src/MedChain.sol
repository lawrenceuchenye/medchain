// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

contract MedChain {
    struct User {
        string ipfsHash; // IPFS hash of the user's data
        bool isRegistered; // Flag to track if a user is already registered
    }

    mapping(address => User) private users;

    event UserRegistered(address indexed user, string ipfsHash);

    // Register a new user with their IPFS hash
    function registerUser(string memory _ipfsHash) external {
        require(!users[msg.sender].isRegistered, "User is already registered.");
        users[msg.sender] = User(_ipfsHash, true);

        emit UserRegistered(msg.sender, _ipfsHash);
    }

    // Check if a user is registered
    function isRegistered(address _user) external view returns (bool) {
        return users[_user].isRegistered;
    }

    // Get the IPFS hash of a registered user
    function getUserIPFS(address _user) external view returns (string memory) {
        require(users[_user].isRegistered, "User is not registered.");
        return users[_user].ipfsHash;
    }
}

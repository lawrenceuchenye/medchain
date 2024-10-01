// contracts/MedChain.sol

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/AccessControl.sol";

contract MedChain is AccessControl {
    bytes32 public constant ADMIN_ROLE = keccak256("ADMIN_ROLE");

    struct User {
        address userAddress;
        string dataCID;
        string name;
        string email;
        string role;
        uint256 registeredAt;
        bool isVerified;
    }

    // Mapping from user address to User struct
    mapping(address => User) public users;

    // Events
    event UserRegistered(
        address indexed userAddress,
        string dataCID,
        string name,
        string email,
        string role,
        uint256 registeredAt
    );

    event UserVerified(address indexed userAddress);

    /**
     * Constructor sets up roles
     */
    constructor() {
        _setupRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _setupRole(ADMIN_ROLE, msg.sender);
    }

    /**
     * Registers a new user by storing their CID and basic information.
     * @param _userAddress The Ethereum address of the user.
     * @param _dataCID The CID of the user's data on IPFS.
     * @param _name The name of the user.
     * @param _email The email of the user.
     * @param _role The role of the user (e.g., doctor, volunteer).
     */
    function registerUser(
        address _userAddress,
        string memory _dataCID,
        string memory _name,
        string memory _email,
        string memory _role
    ) public onlyRole(ADMIN_ROLE) {
        require(_userAddress != address(0), "Invalid address");
        require(
            bytes(users[_userAddress].userAddress).length == 0,
            "User already registered"
        );

        users[_userAddress] = User({
            userAddress: _userAddress,
            dataCID: _dataCID,
            name: _name,
            email: _email,
            role: _role,
            registeredAt: block.timestamp,
            isVerified: false
        });

        emit UserRegistered(
            _userAddress,
            _dataCID,
            _name,
            _email,
            _role,
            block.timestamp
        );
    }

    /**
     * Verifies a user's credentials.
     * @param _userAddress The Ethereum address of the user to verify.
     */
    function verifyUser(address _userAddress) public onlyRole(ADMIN_ROLE) {
        require(
            users[_userAddress].userAddress != address(0),
            "User not registered"
        );
        require(!users[_userAddress].isVerified, "User already verified");

        users[_userAddress].isVerified = true;

        emit UserVerified(_userAddress);
    }

    /**
     * Retrieves user information.
     * @param _userAddress The Ethereum address of the user.
     * @return User struct containing user details.
     */
    function getUser(address _userAddress) public view returns (User memory) {
        require(
            users[_userAddress].userAddress != address(0),
            "User not registered"
        );
        return users[_userAddress];
    }
}

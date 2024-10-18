// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

contract User{

    uint256 userCount=0;

    struct UserData{
        string CID;
        bool isVerified;
        uint256 id;
    }



    event addedUser(address indexed userId);

    mapping(address => UserData) UserDB;
    mapping(address => string[]) UserFilesDB;
    uint256 verifiedUsers=0;
    uint256 unverifiedUsers=0;
    uint256 reportedUsers=0;
    uint256 totalUsers=0;

    function addUser(string memory _cid) external {
        userCount+=1;
        UserData memory newUser=UserData({ CID:_cid,isVerified:false,id:userCount});
        UserDB[msg.sender]=newUser;
    }

    function getUser() external view returns(UserData memory){
        return UserDB[msg.sender];
    }

    function getUserFiles() external view returns(string[] memory){
        return UserFilesDB[msg.sender];
    }

    function addFile(string memory fileCID) external {
        UserFilesDB[msg.sender].push(fileCID);
    }

}

// CONTRACT ADDRESS:0x22bF4959CfE77518a6448e3F5dA136F28D3c9ED9
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

    function addUser(string memory _cid,address uid) external {
        userCount+=1;
        UserData memory newUser=UserData({ CID:_cid,isVerified:false,id:userCount});
        UserDB[uid]=newUser;
    }

    function getUser() external view returns(UserData memory){
        return UserDB[msg.sender];
    }

    function getUserFiles(address uid) external view returns(string[] memory){
        return UserFilesDB[uid];
    }

    function addFile(string memory fileCID,address uid) external {
        UserFilesDB[uid].push(fileCID);
    }

}

// CONTRACT ADDRESS:0x9c060a3371D053250C688a8A1b90D49FC8d41f9B
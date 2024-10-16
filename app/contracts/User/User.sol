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

    function addUser(string memory _cid) external {
        userCount+=1;
        UserData memory newUser=UserData({ CID:_cid,isVerified:false,id:userCount});
        UserDB[msg.sender]=newUser;
    }

    function getUser(address userId) external view returns(UserData memory){
        return UserDB[userId];
    }

}

// CONTRACT ADDRESS:0x113924fF85B46eE1565017e57f41649032A02336
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

contract User{

    uint256 userCount=0;

    struct UserData{
        string CID;
        bool isVerified;
        uint256 id;
    }

    struct Medicine{
        string Name;
        uint256 Dosage;
        uint256 Interval;
        uint256 Days;
    }



    event addedUser(address indexed userId);

    mapping(address => UserData) UserDB;
    mapping(address => string[]) UserFilesDB;
    mapping (address => Medicine[]) MedWatchList;

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

    function addMed(string memory name_,uint256 dosage_,uint256 interval_,uint256 days_,address uid) external {
  Medicine memory newMed=Medicine({ Name:name_,Interval:interval_,Dosage:dosage_,Days:days_});
        MedWatchList[uid].push(newMed);
    }

    function getMedicine(address uid) external view returns(Medicine[] memory) {
        return MedWatchList[uid];
    }

}

// CONTRACT ADDRESS:0xA187De080bb95d7bEe08b52f6eB58fE84BF441B5
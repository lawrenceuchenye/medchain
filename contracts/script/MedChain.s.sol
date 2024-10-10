// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Script, console} from "forge-std/Script.sol";
import {MedChain} from "../src/MedChain.sol";

contract MedChainScript is Script {
    MedChain public _contract;

    function setUp() public {}

    function run() public {
        vm.startBroadcast();

        _contract = new MedChain();

        vm.stopBroadcast();
    }
}

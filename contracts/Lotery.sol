// SPDX-License-Identifier: MIT
pragma solidity ^0.4.25;

contract Lotery {
    address public manager;
    address[] public players;

    constructor() public {
        manager = msg.sender;
    }

    function getManager() public view returns (address) {
        return manager;
    }

    function enter() public payable {
        require(msg.value > 0.01 ether);
        players.push(msg.sender);
    }

    function getPlayers() public view returns (address[]) {
        return players;
    }

    function random() private view returns (uint) {
        return uint(keccak256(abi.encode(block.difficulty, now, players)));
    }

    function pickWinner() public restricted {
        uint index = random() % players.length;
        players[index].transfer(address(this).balance);
        players = new address[](0);
    }

    modifier restricted() {
        require(msg.sender == manager);
        _;
    }
}

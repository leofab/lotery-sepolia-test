// SPDX-License-Identifier: MIT
pragma solidity ^0.4.17;

contract Lotery {
    address public manager;
    address[] public players;

    constructor() {
        manager = msg.sender;
    }

    function enter() public payable {
        require(msg.value > 0.1 ether);

        players.push(msg.sender);
    }

    function random() private view returns (uint) {
        return
            uint(
                keccak256(
                    abi.encode(block.difficulty, block.timestamp, players)
                )
            );
    }

    function pickWinner() public restricted {
        // uint index = random() % players.length;
        // payable(players[index]).transfer(address(this).balance);
        // address payable winner = payable(players[index]);
        // uint contractBalance = address(this).balance;

        // winner.transfer(contractBalance);
        // players = new address[](0);

        uint index = random() % players.length;
        address winner = players[index];
        uint contractBalance = address(this).balance;

        winner.transfer(contractBalance);
        players = new address[](0);
    }

    modifier restricted() {
        require(msg.sender == manager);
        _;
    }

    function getPlayers() public view returns (address[] memory) {
        return players;
    }
}

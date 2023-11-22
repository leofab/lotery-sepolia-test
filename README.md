# Lottery Smart Contract

This smart contract, written in Solidity, implements a simple lottery system on the Ethereum blockchain. It allows participants to enter the lottery by sending a specified amount of Ether and enables the contract manager to randomly pick a winner who receives the entire lottery pot.

## Contract Overview

The `Lotery.sol` contract provides the following functionalities:

- **Entering the Lottery**: Participants can enter the lottery by sending at least 0.1 Ether.
- **Picking a Winner**: The contract manager, who is initially set as the contract deployer, can initiate the selection of a winner. The winner is randomly chosen among the participants, and the entire lottery balance is transferred to them.
- **Manager Access**: Certain functionalities are restricted to the contract manager, including picking the winner.

## Contract Details

### Functions

- `enter()`: Allows participants to enter the lottery by sending a minimum amount of Ether.
- `pickWinner()`: Can be called only by the contract manager. Randomly selects a winner and transfers the entire lottery balance to them.
- `getPlayers()`: Retrieves the addresses of participants who entered the lottery.

## Usage

To interact with the lottery contract:

1. Deploy the `Lotery.sol` contract to an Ethereum network (e.g., Ropsten, Rinkeby, or a local testnet).
2. Use a Web3 provider or a DApp interface to:
   - Enter the lottery by sending the required Ether using the `enter()` function.
   - Use the `pickWinner()` function (accessible only to the contract manager) to select a winner.

## Getting Started

### Prerequisites

- Node.js
- Solidity Compiler (`solc`)
- Web3 library (if interacting with the contract programmatically)

### Installation

1. Clone this repository: `git clone https://github.com/your-username/lottery-smart-contract.git`
2. Install dependencies: `npm install`

### Running Tests

Run the provided test suite to verify contract functionality:

```bash
npm test

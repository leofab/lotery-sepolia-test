const HDWalletProvider = require('truffle-hdwallet-provider');
const { Web3 } = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
    'oak remain obtain task drip boy early wet segment sport fun source',
    'https://sepolia.infura.io/v3/c0e92b8c927e4421bf01f62fb85487d4'
);

const web3 = new Web3(provider, null, { transactionConfirmationBlocks: 1 });

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log('Attempting to deploy from account', accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data: bytecode })
        .send({ gas: '1000000', from: accounts[0] });

    console.log('Contract deployed to', result.options.address);
};
deploy();
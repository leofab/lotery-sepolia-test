const assert = require('assert');
const ganache = require('ganache');
const { Web3 } = require('web3');
const provider = ganache.provider();
const web3 = new Web3(provider);
const { interface, bytecode } = require('../compile');

let lotery;
let accounts;

beforeEach(async () => {
    accounts = await web3.eth.getAccounts();

    lotery = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data: bytecode })
        .send({ from: accounts[0], gas: 1000000 });
});

describe('Lotery Contract', () => {
    it('deploys a contract', () => {
        assert.ok(lotery.options.address);
    })
})
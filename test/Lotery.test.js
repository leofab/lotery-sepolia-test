const assert = require('assert');
const ganache = require('ganache');
const { Web3 } = require('web3');
const provider = ganache.provider();
const web3 = new Web3(provider, null, { transactionConfirmationBlocks: 1 });
const { interface, bytecode } = require('../compile');

let lotery;
let accounts;

beforeEach(async () => {
    accounts = await web3.eth.getAccounts();
    lotery = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data: bytecode })
        .send({ from: '0x' + accounts[0], gas: '1000000' });
});

describe('Lotery Contract', () => {
    it('allows one account to enter', async () => {
        await lotery.methods.enter().send({
            from: accounts[0],
            value: web3.utils.toWei('0.02', 'ether')
        }).then(() => {
            lotery.methods.getPlayers().call({
                from: accounts[0]
            }).then((players) => {
                assert.equal(accounts[0], players[0]);
                assert.equal(1, players.length);
                done();
            }).catch((error) => {
                done(error);
            });
        });
    })
})
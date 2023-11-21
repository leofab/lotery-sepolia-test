const path = require('path');
const fs = require('fs');
const solc = require('solc');

const loteryPath = path.resolve(__dirname, 'contracts', 'Lotery.sol');
const source = fs.readFileSync(loteryPath, 'utf8');

console.log(solc.compile(source, 1));
// module.exports = solc.compile(source, 1).contracts[':Lotery'];

// try {
//     const compiledContract = solc.compile(source, 1);
//     module.exports = compiledContract.contracts[':Lotery'];
// } catch (err) {
//     console.error('Error compiling contract:', err);
// }

// const compiledContract = solc.compile(source, 1);
// const contractInterface = compiledContract.contracts[':Lotery'];

// // Check the interface content
// console.log('Contract Interface:', contractInterface);

// if (!contractInterface || !contractInterface.interface) {
//     throw new Error('Contract interface not found or invalid.');
// }

// module.exports = contractInterface;
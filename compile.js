const path = require('path');
const fs = require('fs');
const solc = require('solc');

const loteryPath = path.resolve(__dirname, 'contracts', 'Lotery.sol');
const source = fs.readFileSync(loteryPath, 'utf8');

// console.log(solc.compile(source, 1));
module.exports = solc.compile(source, 1).contracts[':Lotery'];
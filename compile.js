// const path = require('path'),
//       fs = require('fs'),
//       solc = require('solc');

// const lotteryPath = path.resolve(__dirname,'contracts','Lottery.sol');  
// const source = fs.readFileSync(lotteryPath,'utf8');

// module.exports  = solc.compile(source,1).contracts[':Lottery'];

const path = require('path');
const fs = require('fs');
const solc = require('solc');

const nameOfFile = 'Lottery.sol';
const contractName = ':Lottery';

const lotteryPath = path.resolve(__dirname, 'contracts', nameOfFile);
const source = fs.readFileSync(lotteryPath, 'utf8');

// module.exports = solc.compile(source, 1); //1 is number of different contracts we are attempting to compile

module.exports = solc.compile(source, 1).contracts[contractName];
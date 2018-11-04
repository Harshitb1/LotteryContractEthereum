const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface ,bytecode } = require('./compile');

const provider = new HDWalletProvider(
    'drip nasty agent student morning sell cigar evoke square chalk insane laundry',
    'https://rinkeby.infura.io/v3/d7803cf20fc44f34885cf74a24f4b20c'
);

const web3 = new Web3(provider);

const deploy = async () => {
     const accounts = await web3.eth.getAccounts();
     console.log('account-'+ accounts[0]);
     const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({data: '0x' + bytecode })
        .send({ gas: '1000000' , from: accounts[0]});

    console.log('deployed at ' + result.options.address);

};
deploy();
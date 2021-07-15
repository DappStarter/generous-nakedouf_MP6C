require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess clock off tooth warrior ridge remember slow hidden clinic bridge twelve'; 
let testAccounts = [
"0x7f801b6dc491b6a0c3833bc6c9027a51f7a6a796de55bb5776e33e29194cf966",
"0x58bacdabea666b1843d15c02141cc70a9c3f43eda7b62dfd4ce38c15b272cf48",
"0xec48795e4a53b2eecec3e04268603753f4dcf9d01463b8bead5412e8adfaf33a",
"0xa8bd2e937a93a4ff2c1b2f2cc5acc36cfaddde3c392e1b831ca3c93eeb6147e4",
"0x0e8570344ce5e1be093766a37681807475851b8bdac0086c97b5cf4d62a7ff57",
"0x210dd477b7ece9a183b2bb728adef95ba0e0dfdebf90e97b1a0a9f2e3628da9c",
"0xc8006baf600a779d629185d01eba47e3e7b5c7d0516b28bd88f4a3408a4cf4b1",
"0xbf9d6acdb5bc7ed95fb71c838d49fb5ef348bed5d0306033aec7baee763be9dd",
"0xdd7eec5b064f3ae6ce973cb7cb8e899d0aea950e18d6bd5a9433a9cc024687b5",
"0x8afd3c74c6543a046de641761f4ede7f60610e8a8989833009e715f6806d866a"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


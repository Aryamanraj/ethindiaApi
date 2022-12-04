const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile')



const provider = new HDWalletProvider(
    'vote art pony convince labor valid cargo share battle sauce device common',
    'https://polygon-mumbai.infura.io/v3/feab18df1beb4b638a02af1017b87417'
);
const web3 = new Web3(provider);
var ethereumAddr = '0xAdF088f57B075d83E469A363B79Bc035C31a2121';




// const deploy = async () => {
//     const accounts = await web3.eth.getAccounts();
//     console.log('Deploying from account', accounts[0]);
//     const enigmaDep = await new web3.eth.Contract(JSON.parse(interface))
//         .deploy({ data: bytecode })
//         .send({ gas: '1000000', from: accounts[0] });

//     console.log('Contract deployed to', enigmaDep.options.address, 'on ethereum');
//     provider.engine.stop();
//     ethereumAddr=enigmaDep.options.address;
//     //sendFunc();
// };
// deploy()



var xx='adsa',xy='adsa',xz='absd',ab='njds',ac='nas',ad='jsd'


const sendFunc = async(xx,xy,xz,ab,ac,ad) => {
    const accounts = await web3.eth.getAccounts();

    console.log('Attempting to upload with account ID:', accounts[0], 'on address: ', ethereumAddr);
    const enigmaUpload = await new web3.eth.Contract(JSON.parse(interface), ethereumAddr);
    const sender = await enigmaUpload.methods.addDoctor(xx,xy,xz,ab,ac,ad).send({ from: accounts[0] });
    sender;
    console.log('Uploaded on ethereum Address:', enigmaUpload.options.address);
    provider.engine.stop();
}
sendFunc(xx,xy,xz,ab,ac,ad);


// const readFunc = async() =>{
//     const accounts = await web3.eth.getAccounts();

//     console.log('Reading data from account ID:', accounts[0], '\ton address', ethereumAddr);
//     const enigmaView = await new web3.eth.Contract(JSON.parse(interface), ethereumAddr);
//     const reader = await enigmaView.methods.searchCID(nameOfTheMedia).call();
//     console.log('Your Character Identifier on IPFS is:', reader);
//     provider.engine.stop();
// }
// //readFunc();
// //pushing();

module.exports = sendFunc
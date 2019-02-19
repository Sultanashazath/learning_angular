var Web3=require('aion-web3');
var web3=new Web3(new Web3.providers.HttpProvider('http://52.15.173.92:8545'));
//https://api.nodesmith.io/v1/aion/testnet/jsonrpc?apiKey=c63b8c2a5d824408b6ebafac8b5d1daf'));
const fs = require('fs');
// const orderbook = fs.readFileSync('OrderBook.sol', {
//   encoding: 'utf8'
//  });
 address="0xa06c366fdb96568345fae1cf86872085661db84866afd928873c2ad7bc441ab1"

privatekey="0x466d57210b196325ce12b8d427a90c8bbc555f969f08fd660c2ad9d8023e6b57f3b1d27b2334f0f68e3c88c9d4bb91b2ebac7e0384d75d245e5d0baa9414730a"
DataStore='0xA037fD4CC3EB96565e8Ce3ddbFdeeBbF569a11c287bc01147D7ae8247C663ae4'

 var tx;


//  web3.eth.compileSolidity(orderbook).then(res=>{
//     compiled=res;
//     console.log("************")
//    console.log(compiled.OrderBook.info.abiDefinition);
//     const contractInst = new web3.eth.Contract(compiled.OrderBook.info.abiDefinition);
//    // console.log(contractInst);
//     const deploy = contractInst.deploy( {data:compiled.OrderBook.code, arguments: [address,address,DataStore]} ).encodeABI();
   
//     const deployTx = { gas: 999999, gasPrice: 10000000000, data: deploy, from: address };
//   //  var arugments={gas:50000,from: address,to:contractAddress,data:encode};
//     web3.eth.accounts.signTransaction( deployTx, privatekey ).then( (res) => {
//         signedTx = res;
//        // console.log(signedTx);
//         web3.eth.sendSignedTransaction( signedTx.rawTransaction).on('transactionHash', txHash => { 
//               console.log("txHash", txHash); tx=txHash }
//             ).on('receipt',
//               receipt => { console.log("receipt", receipt) }
//             ).catch(err =>{
//                 console.log(err)
//                  console.log("error");
//                  console.log("txhash",tx);
//                  web3.eth.getTransactionReceipt(tx,(err,res)=>{
//                      console.log("RECEIPT",res);
//                  })
//             });
//     });
// })




web3.eth.getBlock
//  function sleep(ms){
//     return new Promise(resolve=>setTimeout(resolve,ms));
//     }
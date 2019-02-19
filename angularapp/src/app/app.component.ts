import { Component } from '@angular/core';


 import * as EthWallet from 'ethereumjs-wallet-browser';
 const password = "mypass";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'angularapp';

constructor(){
const w=EthWallet.generate()
  console.log(w.);
}
 calls(){
console.log("hello")
}
}

var Wallet = require('ethereumjs-wallet');  
var Key=Buffer.from('account_privatekey','hex');  
var wallet = Wallet.fromPrivateKey(Key);  
var json=wallet.toV3String(user_define_password); 



// var keyObject = keythereum.importFromFile(address, datadir);
// var privateKey = keythereum.recover(password, keyObject);
// console.log(privateKey.toString('hex'));


// generateWallet(exchange) {
//   if (exchange == 'eth') {
//     return EthWallet.generate();
//   } else if (exchange == 'neo') {
//     return this.neoWalletHelper.generateWallet();
//   } else if (exchange == 'wan') {
//     return EthWallet.generate();
//   } else if (exchange == 'aion') {
//     return this.aionWalletHelper.generateWallet();
//   }

// }
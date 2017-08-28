import React from 'react';
import { render } from 'react-dom';
import App from '../components/App';
import Web3 from 'web3';
let web3
if (typeof web3 !== 'undefined') {
  web3 = new Web3(web3.currentProvider);
} else {
  web3 = new Web3(new Web3.providers.HttpProvider("http://35.198.76.133:8545"));
}
let acc = web3.eth.accounts[0]
console.log('account: ' + acc)

render(
  <App/>,
  document.getElementById('app')
)

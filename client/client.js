import React from 'react'
import { render } from 'react-dom'
import App from '../components/App'
import Web3 from 'web3'
var contractInfo = require('../blockchain/build/contracts/EmploymentContract.json')
var contract = require("truffle-contract")
let Empl = contract(contractInfo)
if (typeof web3 !== 'undefined') {
	console.log('Metamask initialized');
	window.web3 = new Web3(web3.currentProvider);
} else {
	console.log('Metamask not initialized. Falling back to localhost:8545')
	window.web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"))
}

Empl.setProvider(web3.currentProvider)
window.emp = Empl.at("0xe9C86D228C21A78787c237C731A87c0637Ac0D1b")

render(
  <App/>,
  document.getElementById('app')
)

import React from 'react'
import { render } from 'react-dom'
import App from '../components/App'
import Web3 from 'web3'
var contractInfo = require('../blockchain/build/contracts/EmploymentContract.json')
var contract = require("truffle-contract")
let Empl = contract(contractInfo)
let web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"))
Empl.setProvider(web3.currentProvider)
let emp = Empl.at("0xda13933f1a2cda9bcdb315ff138694074f56ae5c")

render(
  <App emp={emp}/>,
  document.getElementById('app')
)

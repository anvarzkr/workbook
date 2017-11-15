import React from 'react'
import { render } from 'react-dom'
import App from '../components/App'
import Web3 from 'web3'
var contractInfo = require('../blockchain/build/contracts/EmploymentContract.json')
var contract = require("truffle-contract")
let Empl = contract(contractInfo)
if (typeof web3 !== 'undefined') {
	console.log('Metamask initialized123');
	window.web3 = new Web3(web3.currentProvider);
} else {
	console.log('Metamask not initialized. Falling back to localhost:8545')
	window.web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"))
}

Empl.setProvider(web3.currentProvider)
window.emp = Empl.at("0x32De2c8e7646a80C94c1C9a8DC9b987a59B0f760")

window.emplAddress = "0xdb57eE5294c235f68d43F536D119a365DDA261C2"
window.compAddress = "0x943c526586938ea31529C0471714e4e29bA96Ed8"

window.currentUser = []
window.authorized = false;
window.user_type = 0;// 0 - employee, 1 - company

window.emp.employeeList(window.web3.eth.accounts[0]).then(function(data){     
	  if (data[1] == ""){
	  	window.emp.companyList(window.web3.eth.accounts[0]).then(function(data){
	  		if (data[1] == ""){
	  			window.authorized = false;
	  			alert('not authorized');
	  		}
	  		else{
	  			window.currentUser = data;
	  			window.compAddress = currentUser[0];
	  			window.user_type = 1;
	  			window.authorized = true;
	  			console.log(window.currentUser);
	  		}
	  	});
	  }  
	  else{
	  	window.currentUser = data;
	  	window.emplAddress = currentUser[0];
	  	window.user_type = 0;
	  	window.authorized = true;
	  	console.log(window.currentUser);
	  }   
      
    });



console.log(window.web3.eth.accounts[0]);




render(
  <App/>,
  document.getElementById('app')
)

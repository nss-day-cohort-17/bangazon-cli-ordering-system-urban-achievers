'use strict'

const mainPrompt = require('./main-prompt.js')
// const currentUser = {}

const createCustomer = require('../create-customer/customer-cli.js');
const getActiveCustomer = require('../choose-active-customer/cli-choose-active.js');
const runPayment = require('../payment-options/payment-options-cli.js');
const runProductCli = require('../add-product/product-cli.js');


mainPrompt()
.then((selection) => {
// .catch((err) => {
// 	console.log('Woops! : ' + err)
// })
	console.log(selection);
	switch (selection) {
		case '1':
		console.log("Create customer");
		createCustomer();
		break;

		case '2':
		console.log("Choose Active Customer");
		getActiveCustomer();
		break;

		case '3':
		console.log("Create Payment Option")
		runPayment();
		break;

		case '4':
		console.log("Add Product");
		runProductCli();
		break;

		default: null;
	}
})
// mainPrompt()

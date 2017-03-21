'use strict';

// CREATE PAYMENT OPTIONS - 
// 2. pass it userid to as FK 
// 3. if not user, can't create option 
// 4. grab [type/#] 
// 5. INSERT [type/#] where customerid = id 
// 6. 'typeofcard' added for 'user
// 7. back to main menu
// 
const path = require('path')
const mainPrompt = require('../main/main-prompt.js')

const getPaymentObj = require('./payment-options-prompt.js');
const getPaymentArray = require('./payment-options-args.js');
const insertPaymentOption = require('./payment-options-insert.js');

getPaymentObj()
.then((paymentObj) => {
	return getPaymentArray(paymentObj)
	console.log(paymentObj, "i'm payment obj")
})
.then((paymentArray) => {
	insertPaymentOption(paymentArray)
	console.log("New Payment Option Created")
})
.catch((err) => {
	console.log('Woops! ' + err)
})
.then(() => {
	mainPrompt()
})

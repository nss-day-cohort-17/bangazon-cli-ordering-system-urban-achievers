'use strict'

// CREATE PAYMENT OPTIONS - 
// 1. Enter payment type(INSERT) to pmt table 
// 2. pass it userid to as FK 
// 3. if not user, can't create option 
// 4. grab [type/#] 
// 5. INSERT [type/#] where customerid = id 
// 6. 'typeofcard' added for 'user 
// 7. back to main menu

const getPaymentObj = require('./payment-options-prompt.js');
const getPaymentOption = require('./payment-options-args.js');


getPaymentObj()
// .then((paymentObj) => {
// 	return
// })

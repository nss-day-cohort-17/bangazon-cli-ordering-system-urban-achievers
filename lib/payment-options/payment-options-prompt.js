'use strict'

const prompt = require('prompt')

const newPaymentOption = {
	properties: {
		paymentType: {
			description: 'Choose Payment Type',
			required: true
		},
		accountNumber: {
			description: 'Enter Account Number',
			required: true
		}
	}
}

prompt.start();

const getPaymentObj = function() {
	return new Promise((resolve, reject) => {
		prompt.get(newPaymentOption, function(err, result) {
			if(err) reject(err)
				resolve(result)
	})

})
}
module.exports = getPaymentObj;

'use strict'

const getPaymentArray = (result) => {
	return new Promise((resolve, reject) => {
		let paymentArray = [result.paymentType,
		result.accountNumber]
		resolve(paymentArray)
	})
}

module.exports = getPaymentArray;

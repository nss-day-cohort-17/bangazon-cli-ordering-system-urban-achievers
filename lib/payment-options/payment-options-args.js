'use strict'

const getPaymentArray = (result) => {
	return new Promise((resolve, reject) => {
		resolve(result)
		let paymentArray = [result.paymentType,
		result.accountNumber]
		// console.log(paymentArray)
	})
}

module.exports = getPaymentArray;

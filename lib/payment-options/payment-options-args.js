'use strict'

const getPaymentArray = (result) => {
	return new Promise((resolve, reject) => {
		let paymentArray = [result.paymentType,
		result.paymentAccount]
		resolve(paymentArray)
		// console.log(paymentArr)
	})
}

module.exports = getPaymentArray;

'use strict'

const getPaymentOption = (result) => {
	return new Promise((resolve, reject) => {
		let paymentArr = [result.paymentType,
		result.paymentAccount]
		resolve(paymentArr)
		// console.log(paymentArr)
	})
}

module.exports = getPaymentOption;

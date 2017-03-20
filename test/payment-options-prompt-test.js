'use strict'

const {assert: {isFunction, isObject}} = require('chai');
const getPaymentObj = require('../lib/payment-options/payment-options-prompt.js');

describe('getPaymentObj', () => {
	it('should be a function', () => {
		let result = {}
		isFunction(getPaymentObj)
		})
	it('should return an object', () => {
		let paymentObj = {'paymentType': 'Visa'}
		getPaymentObj()
		.then((result) => {
			isObject(result)
		})
	})
	})

'use strict'

const {assert: { isArray, isFunction }} = require('chai');
const getPaymentArray = require('../lib/payment-options/payment-options-args.js');

describe('getPaymentArray', () => {
	it('should be a function', () => {
		isFunction(getPaymentArray)
	})
	it('should return an array', () => {
		getPaymentArray()
		.then((data) => {
		isArray(data);
		})
	})
})

'use strict'

const {assert: { isArray }} = require('chai');
const getPaymentArray = require('../lib/payment-options/payment-options-args.js');

describe('getPaymentArray', () => {
	it('should return an array', () => {
		return getPaymentArray()
		.then((data) => {
		isArray(data);
		})
	})
})

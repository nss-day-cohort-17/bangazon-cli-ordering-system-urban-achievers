'use strict'

const {assert: {isFunction, isArray}} = require('chai');
const insertPaymentOption = require('../lib/payment-options/payment-options-insert.js');

describe('insertPaymentOption', () => {
	it('should be a function', () => {
		isFunction(insertPaymentOption)
	})
})

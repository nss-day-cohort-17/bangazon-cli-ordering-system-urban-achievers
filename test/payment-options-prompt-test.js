'use strict'

const {assert: {isFunction}} = require('chai');
const getPaymentObj = require('../lib/payment-options/payment-options-prompt.js');

// console.log(isFunction)

// describe('payment-options-prompt', () => {
describe('getPaymentObj', () => {
	it('should be a function', () => {
		let result = {}
		isFunction(getPaymentObj)
		})
	it('should return an object', () => {
		let paymentObj = {}
		getPaymentObj
	})
	})
// describe('mainPrompt', () => {
//   it('should be a function', () => {
//     isFunction(mainPrompt)
//   });
// })

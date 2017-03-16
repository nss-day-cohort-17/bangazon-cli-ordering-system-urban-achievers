'use strict'

const {assert: {isFunction}} = require('chai')
const insertCustomer = require('../lib/create-customer/insert-customer.js')

describe('insertCustomer', () => {
  it('should be a function', () => {
    isFunction(insertCustomer)
  })

})

'use strict'

const {assert: {isFunction, isArray, isObject, typeOf}} = require('chai')
const getCustomer = require('../lib/choose-active-person/active-getCustomer.js')

describe('choose-active-customer',()=>{
  describe('get customer from db',()=> {
    it('should be a function',()=>{
      isFunction(getCustomer)
    })
    it('should return a promise',()=> {
     typeof(getCustomer, 'promise',"hey")
    })
  })
})

'use strict'

const {assert: {isFunction, isArray, isObject, typeOf}} = require('chai')
const listCustomer = require('../lib/choose-active-customer/active-listCustomer.js')

describe('choose-active-customer',()=>{
  describe('get customer from db',()=> {
    it('should be a function',()=>{
      isFunction(listCustomer)
    })
    it('should return a promise',()=> {
     typeof(listCustomer, 'promise',"hey")
    })
    it('should be a string', ()=>{
      typeof(listCustomer, 'string')
    })
  })
})

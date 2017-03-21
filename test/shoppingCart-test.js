'use strict'

const {assert: {isFunction, isArray, isObject, typeOf}} = require('chai')
const shoppingCart = require('../lib/passing/shoppingCart.js')

describe('choose-active-customer',()=>{
  describe('get customer from db',()=> {
    it('should be a function',()=>{
      isFunction(shoppingCart)
    })
    it('should return a promise',()=> {
     isArray(shoppingCart)
    })

  })
})

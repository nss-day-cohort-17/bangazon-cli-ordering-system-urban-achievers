'use strict'

const {assert: {isNumber, isFunction, approximately}} = require('chai')
const mainPrompt = require('../lib/main/main-prompt.js')

describe('mainPrompt', () => {
  it('should be a function', () => {
    isFunction(mainPrompt)
  });

  it('should return a number', () => {
    isNumber(mainPrompt())
  })

  it('should return a number', () => {
    approximately(mainPrompt(), 4, 3, 'number is between 1 and 7')
  })

})

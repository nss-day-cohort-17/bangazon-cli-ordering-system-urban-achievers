'use strict'

const {assert: { isObject }} = require('chai')
const setActiveUser = require('../lib/passing/active-user.js')

describe('setActiveUser', () => {
  it('should return an object', () => {
    isObject(setActiveUser())
  });

})

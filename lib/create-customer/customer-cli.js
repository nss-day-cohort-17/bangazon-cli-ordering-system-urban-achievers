'use strict'

const getCustomerObject = require('./create-customer-prompt.js')
const customerArray = require('./customer-args.js')
const insertCustomer = require('./insert-customer.js')
// const mainPrompt = require('../main/cli.js')


getCustomerObject()
  .then((customerObj) => {
    return customerArray(customerObj)
  })

  .then((customerArr) => {
    insertCustomer(customerArr)
    console.log('New Customer Created')
    // mainPrompt()
  })

  .catch( (err) => {
    console.log( "oops!" + err)
  })

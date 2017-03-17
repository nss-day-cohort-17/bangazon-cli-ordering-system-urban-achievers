'use strict'

const prompt = require('prompt')

const newCustomer = {
  properties: {

    customerName: {
      description: 'Enter New Customer Name',
      required: true
    },
    streetAddress: {
      description: 'Address',
      required: true
    },
    city: {
      description: 'City',
      required: true
    },
    state: {
      description: 'State',
      required: true
    },
    postalCode: {
      description: 'Postal Code',
      required: true
    },
    phoneNumber: {
      description: 'Phone Number (numbers only)',
      required: true
    }
  }
}

prompt.start()

const getCustomerObj = function() {
  return new Promise((rej, res) => {
    prompt.get(newCustomer, function(err, result) {
      if (err) rej(err)
      console.log(result)
      res(result)
    })
  })
}

module.exports = getCustomerObj

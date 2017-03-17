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

module.exports = prompt.get(newCustomer, function(err, result) {
  if (err) throw err
  console.log(result)
  return result
})

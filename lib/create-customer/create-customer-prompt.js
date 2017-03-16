'use strict'

const prompt = require('prompt')

const newCustomer = {
  properties: {

    customerName: {
      message: 'Enter New Customer Name',
      required: true
    },
    streetAddress: {
      message: 'Address',
      required: true
    },
    city: {
      message: 'City',
      required: true
    },
    State: {
      message: 'State',
      required: true
    },
    'Postal Code': {
      message: 'Postal Code',
      required: true
    },
    'phoneNumber': {
      message: 'Phone Number (numbers only)',
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

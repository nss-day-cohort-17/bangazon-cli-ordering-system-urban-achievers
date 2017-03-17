'use strict'

const grabCustomer = (result) => {
  return new Promise((res, rej) => {
    let customerArr = [result.customerName,
            result.streetAddress,
            result.city,
            result.state,
            result.postalCode,
            result.phoneNumber]
    res(customerArr)
  })
}

module.exports = grabCustomer

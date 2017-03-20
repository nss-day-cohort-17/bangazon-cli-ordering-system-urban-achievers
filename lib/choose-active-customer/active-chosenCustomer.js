const sqlite3 = require('sqlite3').verbose();
const chosenCustomerDB = new sqlite3.Database('../../bangazon-mt.sqlite')
const setCurrentCustomer = require('../passing/active-user.js')
const mainPrompt = require('../main/main-prompt.js')

const chooseThisCustomer = (id) => {
  return new Promise((res, rej) => {
    // id = parseInt(id)
// console.log(`SELECT * FROM customers WHERE customer_id = ${id+1}`)
    chosenCustomerDB.all(`SELECT * FROM customers WHERE customer_id = ${id+1}`, (err, result) => {
      if (err) rej(err)
        // let currentCustomer = console.log("you chose",result)
        res(result)
        setCurrentCustomer(result)
         mainPrompt()
    })
  })
}


module.exports = chooseThisCustomer

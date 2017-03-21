const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const chosenCustomerDB = new sqlite3.Database(path.join(__dirname, '..', '..','bangazon-mt.sqlite'))
// const chosenCustomerDB = new sqlite3.Database('../../bangazon-mt.sqlite')
// const setCurrentCustomer = require('../passing/active-user.js')
// const mainPrompt = require('../main/main-prompt.js')

const chooseThisCustomer = (id) => {
  return new Promise((res, rej) => {
    // id = parseInt(id)
// console.log(`SELECT * FROM customers WHERE customer_id = ${id+1}`)
    chosenCustomerDB.all(`SELECT * FROM customers WHERE customer_id = ${id+1}`, (err, result) => {
      if (err) rej(err)
        // let currentCustomer = console.log("you chose",result)
        res(result)
        // setCurrentCustomer(result)
        // setTimeout(mainPrompt,1500)
    })
  })
}


module.exports = chooseThisCustomer

'use strict'




// get all customers
const dbGetCust = require('./active-getCustomer.js')
// const mainPrompt = require('../main/main-prompt.js')
// display in prompt
const displayCustomers = require('./active-listCustomer.js')
const chosenCustomer = require('./active-chosenCustomer.js')
const mainPrompt = require('../main/main-prompt.js')
const setCurrentCustomer = require('../passing/active-user.js')
// get Select * from customer where name = name
// return object of * to global application
const getActiveCustomer = () => {

dbGetCust()
.then((customers)=>{
  return displayCustomers(customers)

}).then((result)=>{
  console.log("result",result)
  console.log("you chose #", result)

  return chosenCustomer(result)

}).then((result) =>{
  setTimeout(mainPrompt,1500)
  return setCurrentCustomer(result)

}
).catch((err)=>{
  console.log("to err is human" + err)
})
}
module.exports = getActiveCustomer;

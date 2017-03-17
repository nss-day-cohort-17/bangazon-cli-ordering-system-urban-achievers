'use strict'

const prompt = require('prompt')

const mainMenu = {
  properties: {

    selection: {
      description: `
            *********************************************************
            **  Welcome to Bangazon! Command Line Ordering System  **
            *********************************************************
            1. Create a customer account
            2. Choose active customer
            3. Create a payment option
            4. Add product to shopping cart
            5. Complete an order
            6. See product popularity
            7. Leave Bangazon!`,
      required: true
    }
  }
}

prompt.start()

const mainPrompt = function() {
  return new Promise((res, rej) => {
    prompt.get(mainMenu, function(err, result) {
      if (err) rej(err)
      console.log(result.selection)
      res(result.selection)
    })
  })
}

module.exports = mainPrompt

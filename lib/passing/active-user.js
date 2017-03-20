const setActiveUser = (selectedUser) => {

const {name, customer_id,address, city, state, postal_code, phone} = selectedUser[0]
 console.log("you just set acive user to",name, customer_id,address, city, state, postal_code, phone)
 return{ name, customer_id,address, city, state, postal_code, phone}
}

module.exports = setActiveUser

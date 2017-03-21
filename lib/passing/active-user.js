const setActiveUser = (selectedUser) => {

const {name, customer_id,address, city, state, postal_code, phone} = selectedUser[0]
console.log('Active Customer is', name)
 return{ name, customer_id,address, city, state, postal_code, phone }
}

module.exports = setActiveUser

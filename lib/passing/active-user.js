const setActiveUser = (selectedUser) => {

const {name, customer_id,address, city, state, postal_code, phone} = selectedUser[0]
 console.log("you just set acive user to",name, customer_id,address, city, state, postal_code, phone)
 return{ name, customer_id,address, city, state, postal_code, phone}
}


// let test1 = [ { customer_id: 2,
//     name: 'Walter Sobchak',
//     address: 'Mark it 0 Lane',
//     city: 'Los Angeles',
//     state: 'CA',
//     postal_code: 44657,
//     phone: 4537786655 } ]
// setActiveUser(test1)


module.exports = setActiveUser

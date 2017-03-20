//receive all names as customers

let list;
const prompt = require('prompt')
// let customers = [{ name: 'Walter Sobchak', id: 2 }]

const listCustomer = (customers) => {
  //extracting name and id  for prompt display
  return new Promise((res, rej) => {
    // if (err) rej(err)
    // console.log('before', customers)
    customers.forEach(({ name, id }) => {
      // console.log("name", name ,"id", id)
      list = `\n${id - 1}. ${name}`

    })
    console.log(list) //<--keep this console
      prompt.get("selection",(err,result)=>{
      if (err) rej(err)

     //result is users selection, which should be a number)
     // console.log("activelist",result.selection)
    res(parseInt(result.selection))

  })
})
}


module.exports = listCustomer

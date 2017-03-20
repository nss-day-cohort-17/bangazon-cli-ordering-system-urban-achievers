let currentCart = []
const addtoCart = (product)=> {
  if(!product){
    console.log("no products", product)
   return  currentCart.product = {}
  }
 currentCart.push(product)
  // console.log("yes to products", currentCart)
  return currentCart
}
// let test = "potatoes"
module.exports= addtoCart
// addtoCart(test)

let currentCart = []
const addtoCart = (product)=> {
  if(!product){
    // console.log("no products", product)
   return  currentCart.product = {}
  }
 currentCart.push(product)
  // console.log("yes to products", currentCart)
  return currentCart
}

module.exports= addtoCart

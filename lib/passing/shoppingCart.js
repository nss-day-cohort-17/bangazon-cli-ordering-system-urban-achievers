let currentCart = []
const addtoCart = (product)=> {
  if(!product){
    // console.log("no products", product)
   return  currentCart.product = {}
  }
 currentCart.push(product)
  console.log("product added to cart:", currentCart)
  return currentCart
}

module.exports= addtoCart

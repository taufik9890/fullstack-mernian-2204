let Cart = require('../model/cartModel')
async function cartController(req, res){
    const {productId, userId, quantity} = req.body
    console.log(req.query.type);
    let existingCart = await Cart.findOne({productId:productId, userId:userId})
    // http://localhost:8000/api/v1/product/cart?type=plus
    
    if(existingCart){
        if(req.query.type == "plus"){
            await Cart.findByIdAndUpdate({_id:  existingCart._id}, {quantity: existingCart.quantity+1})
        }
        else{
            if(existingCart.quantity > 1){
                
                await Cart.findByIdAndUpdate({_id:  existingCart._id}, {quantity: existingCart.quantity-1})
            }
            else{
                await Cart.findByIdAndDelete({_id:  existingCart._id})

            }

        }
        res.send("Cart Updated")
    }
    else{
        let cart = new Cart({
            productId: productId,
            userId: userId,
            quantity: quantity? quantity : 1
        }).save()
        res.send("cart added")
    }
}
module.exports = cartController
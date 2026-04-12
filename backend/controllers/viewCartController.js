const Cart = require("../model/cartModel")

async function viewCartController(req, res){
    const userId = req.user.id 
    let data = await Cart.find({userId}).populate("productId")
    res.send(data)
}
module.exports = viewCartController
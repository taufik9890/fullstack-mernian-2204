const Cart = require("../model/cartModel")

async function viewCartController(req, res){
    let data = await Cart.find({}).populate("productId")
    res.send(data)
}
module.exports = viewCartController
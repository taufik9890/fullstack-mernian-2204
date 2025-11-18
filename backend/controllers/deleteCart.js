const Cart = require("../model/cartModel")

let deleteCart = async (req,res)=>{
    const{id} = req.params
    await Cart.findByIdAndDelete({_id:id})
    res.send({message:"Cart Deleted"})
}
module.exports = deleteCart
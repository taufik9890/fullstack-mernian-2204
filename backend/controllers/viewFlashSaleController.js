const FlashSale = require('../model/flashSaleModel')

let viewFlashSaleController = async (req, res)=>{
    
    let data = await FlashSale.find().populate("idList")
    res.send(data)
    
}

module.exports = viewFlashSaleController
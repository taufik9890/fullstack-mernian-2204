const Product = require('../model/productModel')

let viewProductController = async (req, res)=>{

    // Category
    let data = await Product.find()

 
    res.send(data)
}

module.exports = viewProductController
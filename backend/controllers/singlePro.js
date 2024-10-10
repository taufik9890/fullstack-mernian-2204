const SinglePro = require('../model/productModel')

let SingleProController = async (req, res)=>{
    const {slug} = req.params
    let data = await SinglePro.find({slug: slug})

    res.send(data)
}
module.exports = SingleProController
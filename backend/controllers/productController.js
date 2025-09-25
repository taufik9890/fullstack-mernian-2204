const Product = require('../model/productModel')

let productController = async (req, res)=>{

     
        const {name,description, slug, regularprice, discountprice} = req.body
        // console.log(req.file);
        console.log(`/uploads/${req.file.filename}`);
 
    
            let product = new Product({
                name: name,
                description: description,
                image: `/uploads/${req.file.filename}`,
                regularprice: regularprice,
                discountprice: discountprice,
                slug: slug
            })
    
            await   product.save()
            res.send({success: "Product Created"})
        
}
module.exports = productController
const Product = require('../model/productModel')

let productController = async (req, res)=>{

     
        const {name,description, slug, regularprice, discountprice,categoryId, proType} = req.body


        // console.log('files', req.files);

        // console.log(`/uploads/${req.files[0].filename}`);
        let photoarr = []
        req.files.map(item=>{
            // console.log('files', `/uploads/${item.filename}`);
            photoarr.push(`/uploads/${item.filename}`);
            
        })
        


        // console.log(req.file);
        // console.log(`/uploads/${req.file.filename}`);
 
    
            let product = new Product({
                name: name,
                description: description,
                image: photoarr,
                regularprice: regularprice,
                discountprice: discountprice,
                slug: slug,
                categoryId: categoryId,
                proType: proType
            })
    
            await   product.save()
            res.send({success: "Product Created"})
        
}
module.exports = productController
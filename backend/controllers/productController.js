const Product = require('../model/productModel')

let productController = async (req, res)=>{

    try{
        
     
        const {name,description, slug, regularprice, discountprice,categoryId, proType} = req.body


        // console.log('files', req.files);

        // console.log(`/uploads/${req.files[0].filename}`);
        let photoarr = []
        req.files.map(item=>{
            // console.log('files', `/uploads/${item.filename}`);
            // photoarr.push(`/uploads/${item.filename}`);
            photoarr.push(item.path)
            
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

            
    }catch (error) {
        console.log(error.message)
        res.status(500).json({ error: "Something went wrong" })  
    }
        
}
module.exports = productController
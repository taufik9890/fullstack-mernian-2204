const Category = require('../model/categoryModel')

let addCategoryController = async (req, res)=>{
     
    try{ 
        const {name} = req.body
        console.log(name.toLowerCase());
        // console.log(`/uploads/${req.file.filename}`);
        // res.send('hello')
        console.log(req.file.path);
    
        let existingCategory = await Category.find({name: name.toLowerCase()})
    
        if(existingCategory.length >0){
            res.send({error:"Category already exists"})
            console.log("category already exists");
        }
        else{ 
            let cat = new Category({
                name: name.toLowerCase(),
                // image: `/uploads/${req.file.filename}`
                image: req.file.path
            })
    
            await   cat.save()
            res.send({success: "Category Created"})
        }
    }
    catch(error){
console.log(error.message);
res.status(500).json({ error: "Something went wrong" })
    }
   

}
module.exports = addCategoryController
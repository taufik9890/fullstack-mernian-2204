const Category = require('../model/categoryModel')

let addCategoryController = async (req, res)=>{
    
    try{
        const {name} = req.body
        console.log(name.toLowerCase());
        // res.send('hello')
    
        let existingCategory = await Category.find({name: name.toLowerCase()})
    
        if(existingCategory.length >0){
            res.send({error:"Category already exists"})
            console.log("category already exists");
        }
        else{ 
            let cat = new Category({
                name: name.toLowerCase()
            })
    
            await   cat.save()
            res.send({success: "Category Created"})
        }
    }
    catch(error){
console.log(error.message);
    }
  

}
module.exports = addCategoryController
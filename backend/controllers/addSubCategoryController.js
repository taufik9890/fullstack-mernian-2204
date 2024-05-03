const SubCategory = require('../model/subCategoryModel')

let addSubCategoryController = async (req, res)=>{
    
    try{
        const {name} = req.body
        console.log(name.toLowerCase());
        // res.send('hello')
    
        let existingSubCategory = await SubCategory.find({name: name.toLowerCase()})
    
        if(existingSubCategory.length >0){
            res.send({error:"Sub Category already exists"})
            console.log("category already exists");
        }
        else{ 
            let cat = new SubCategory({
                name: name.toLowerCase()
            })
    
            await   cat.save()
            res.send({success: "Sub Category Created"})
        }
    }
    catch(error){
console.log(error.message);
    }
  

}
module.exports = addSubCategoryController
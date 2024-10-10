const SubCategory = require('../model/subCategoryModel')

let addSubCategoryController = async (req, res)=>{
    
    try{
        const {name, categoryId} = req.body

        console.log(name.toLowerCase().trim(), 'nam');
        // console.log(categoryId);
        // res.send('hello')
    
        let existingSubCategory = await SubCategory.find({name: name.toLowerCase().trim()})
    
        if(existingSubCategory.length >0){
            res.send({error:"Sub Category already exists"})
            console.log("sub category already exists");
        }
        else{ 
            let category = new SubCategory({
                name: name.toLowerCase(),
                categoryId: categoryId
            })
    
            await   category.save()
            res.send({success: "Sub Category Created"})
        }
    }
    catch(error){
console.log(error.message);
    }
  

}
module.exports = addSubCategoryController
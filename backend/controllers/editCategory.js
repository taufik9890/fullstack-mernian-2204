const Category = require('../model/categoryModel')

let editCategory = async (req, res) => {
    const {
        name, oldName
    } = req.body
    console.log(name);
     console.log(oldName);
     
    // res.send('hello')

     let existingCategory = await Category.find({
        name: name
    })

    if (existingCategory.length > 0) {
        res.send({
            error: "Category already exists"
        })
        console.log("category already exists");
    } else {
        let cat = await Category.findOneAndUpdate({

            name: oldName
        }, {
            name: name.toLowerCase()
        }, {
            new: true
        })
        console.log(cat);
        

        // await   cat.save()
        res.send({
            success: "Category updated"
        })
    }


}
module.exports = editCategory
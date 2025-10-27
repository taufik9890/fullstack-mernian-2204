const Review = require("../model/reviewModel")



const viewReviewController = async(req, res)=>{
    const {id} = req.params
    let posts = await Review.find({productId: id})
    console.log(posts);
    res.send({posts:posts})
    
}
module.exports = viewReviewController
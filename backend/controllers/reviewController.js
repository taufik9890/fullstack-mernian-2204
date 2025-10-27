const Review = require("../model/reviewModel")

const reviewController =  async(req, res)=>{
    let {name, email, comment,rating, productId } = req.body
    console.log(name, email, comment, rating, productId);
    
    let review = new Review({
        name: name,
        email: email,
        comment: comment,
        productId: productId,
        rating: rating
    })
    
    await review.save()
    // res.send("Review set successful")

    res.json({ message: "Review set successful" });
}
module.exports = reviewController
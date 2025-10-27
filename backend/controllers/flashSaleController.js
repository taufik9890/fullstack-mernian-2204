const FlashSale = require("../model/flashSaleModel")

const flashSaleController = async(req, res)=>{
    const {ftime, idList} = req.body
    console.log(ftime);
    // const startDate = new Date("10/15/2025")
    // const endDate = new Date(date)
     
    // const differenceInTime = endDate.getTime() - startDate.getTime()
    // const differenceInDays = differenceInTime / (1000 * 3600 * 24)
    // let final = differenceInDays * 86400

    let existingFlashSale = await FlashSale.find()
    if(existingFlashSale.length > 0){
        console.log(existingFlashSale[0]._id);
        await FlashSale.findByIdAndUpdate({_id:existingFlashSale[0]._id}, {time: ftime})
    }
    else{
        let time = new FlashSale({
            time: ftime,
            idList: idList
        }).save() 
    }
}

module.exports = flashSaleController
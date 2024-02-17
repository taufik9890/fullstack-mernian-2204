const secureApi =(req, res, next)=>{
    console.log('hoise', req.headers);
    if(req.headers.authorization == "3sw20aYo'?Nq"){
        next()
    }
    else{
        res.send({error:'invalid api'})
    }
}
module.exports = secureApi
// ekhane next() er kaaj hocche permission pawar pore jaite deya ke bole 




// mernianeccomerce
// mongodb+srv://mernian:Z4LL7psaFM27NGh6@cluster0.kmznmbg.mongodb.net/mernianeccomerce?retryWrites=true&w=majority

// mernian
// Z4LL7psaFM27NGh6


var jwt = require('jsonwebtoken');
const verifyToken = (req, res, next) => {
    const token = req.headers.token
    console.log(token);

    if(!token){
        res.send('Token required')
    }
    else{
        // var decoded = jwt.verify(token, 'shhhhh'); 

        jwt.verify(token, 'shhhhh', function(err, decoded) {
            // err
            console.log(decoded);

            if(decoded){
                next()
            }
            else{
                res.send('Valid Token Required')
            }
            // decoded undefined
          });

    }



    // console.log(decoded)
}

module.exports = verifyToken
const mongoose = require('mongoose');

const mongoConfig = ()=>{

    mongoose.connect('mongodb+srv://mernian:Z4LL7psaFM27NGh6@cluster0.kmznmbg.mongodb.net/mernianeccomerce?retryWrites=true&w=majority')
      .then(() => console.log('Database Connected!'));
}


  module.exports = mongoConfig


  

// mernianeccomerce
// mongodb+srv://mernian:Z4LL7psaFM27NGh6@cluster0.kmznmbg.mongodb.net/mernianeccomerce?retryWrites=true&w=majority

// mernian
// Z4LL7psaFM27NGh6
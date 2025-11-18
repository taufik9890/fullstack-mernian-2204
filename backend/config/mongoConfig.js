const mongoose = require('mongoose');

const mongoConfig = async ()=>{
     try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected Successfully");
  } catch (error) {
    console.error("MongoDB Connection Failed:", error.message);
    process.exit(1);
  }
}

module.exports = mongoConfig

// mernianeccomerce
// mongodb+srv://mernian:Z4LL7psaFM27NGh6@cluster0.kmznmbg.mongodb.net/mernianeccomerce?retryWrites=true&w=majority

// mernian
// Z4LL7psaFM27NGh6



// app password 
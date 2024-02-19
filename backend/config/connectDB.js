let mongoose = require("mongoose");

let connectDB = async () => {
  try {
    await mongoose.connect(
        process.env.MONGODB_URL
    );
    console.log("connect with mongoDB is success :)");
  } catch (error) {
    console.log(`connect with mongoDB is failed :( ${error} `);
  }
};

module.exports = { connectDB };

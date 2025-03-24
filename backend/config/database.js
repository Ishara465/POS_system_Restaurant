const mongoose = require("mongoose");
const config = require("./config.js");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(config.databaseURI);
    console.log(
      `✅ 💕 MongoDB Connected: ${conn.connection.host} and ${conn.connection.name}`
    );
  } catch (error) {
    console.log(`Database connection field ❌ 🤦‍♂️: ${error.message}`);
    process.exit();
  }
};

module.exports = connectDB;

const mongoose = require("mongoose");
const { DATABASE_URL } = require("./serverConfig");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1)
  }
};

module.exports = connectDB;

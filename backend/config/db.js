// Databse config file(connection file)
import mongoose from "mongoose";

const connectDB = async () => {
  //we are using async bcoz when we use .connect .find then that wil return a promise
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true, //use only these two
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;

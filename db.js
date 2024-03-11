import mongoose from "mongoose";

const connectDB = async (url) => {
  //mongodb://127.0.0.1:27017/mensajes
  mongoose.set("strictQuery", true);
  try {
    await mongoose.connect(url);
    console.log("Connected DB");
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;

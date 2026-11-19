import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config();
export const ConnectToDatabase = async () => {
  try {
    const mongoDb = process.env.MONGODB_URI;
    if (!mongoDb) {
      throw new Error("mongodb_url is not defined");
    }
    await mongoose.connect(mongoDb);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
};

import express from "express"
import dotenv from "dotenv"
import { ConnectToDatabase } from "./infrastructure/database/mongodb"

dotenv.config();
const app = express()
const PORT = process.env.PORT

const startServer = async () => {
  await ConnectToDatabase();
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

startServer()
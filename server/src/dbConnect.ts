import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const pass: string = process.env.ATLAS_PASS as string;

const uri: string = `mongodb+srv://daro6551:${pass}@dr-social-media-app.hm6wqbm.mongodb.net/ankiologerna?retryWrites=true&w=majority&ssl=true`;

const connectToDB = async (): Promise<void> => {
  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB using Mongoose!");
  } catch (err) {
    console.error("Error connecting to MongoDB using Mongoose", err);
  }
};

export default connectToDB;

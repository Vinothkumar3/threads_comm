import mongoose from "mongoose";

const MONGODB_URL = process.env.MONGODB_URL;

if (!MONGODB_URL) {
  throw new Error(
    "Please define the MONGODB_URL environment variable inside .env.local"
  );
}

let cachedConnection: typeof mongoose | null = null;

async function connectToDB() {
  if (cachedConnection) {
    console.log("Using cached MongoDB connection");
    return cachedConnection;
  }

  try {
    console.log("Creating new MongoDB connection");
    const db = await mongoose.connect(MONGODB_URL, {
      dbName: "threads",
      bufferCommands: false,
    });
    cachedConnection = db;
    return db;
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
    throw error;
  }
}

export default connectToDB;

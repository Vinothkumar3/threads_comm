import mongoose from "mongoose";

const MONGODB_URL = process.env.MONGODB_URL;

// DIAGNOSTIC LOG: Check if the env variable is loaded.
console.log("Vercel is attempting to connect with MONGODB_URL starting with:", MONGODB_URL?.substring(0, 25));

if (!MONGODB_URL) {
  throw new Error(
    "Please define the MONGODB_URL environment variable inside .env.local"
  );
}

let cached = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = { conn: null, promise: null };
}

async function connectToDB() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
      dbName: "threads",
    };

    cached.promise = mongoose.connect(MONGODB_URL!, opts).then((mongoose) => {
      return mongoose;
    });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

export default connectToDB;

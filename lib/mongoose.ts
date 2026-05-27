import mongoose from "mongoose";

// Vercel Mongoose connection logic: v2 - Check for this log after deployment.

const MONGODB_URL = process.env.MONGODB_URL;

if (!MONGODB_URL) {
  throw new Error(
    "Please define the MONGODB_URL environment variable inside .env.local"
  );
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
let cached = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = { conn: null, promise: null };
}

async function connectToDB() {
  if (cached.conn) {
    // If a cached connection exists, return it.
    return cached.conn;
  }

  if (!cached.promise) {
    // If no connection promise is cached, create a new one.
    const opts = {
      bufferCommands: false,
      dbName: "threads",
    };

    cached.promise = mongoose.connect(MONGODB_URL!, opts).then((mongoose) => {
      return mongoose;
    });
  }

  try {
    // Await the connection promise. If it fails, the promise will be nullified
    // allowing a retry on the next request.
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.conn;
}

export default connectToDB;

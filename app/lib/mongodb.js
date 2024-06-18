// lib/dbConnect.js

import mongoose from "mongoose";

const connectDB = async () => {
  if (mongoose.connection.readyState >= 1) {
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Conectado ao banco de dados.");
  } catch (error) {
    console.error("Erro ao tentar conectar ao banco de dados: ", error);
  }
};

export default connectDB;

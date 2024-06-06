import mongoose from "mongoose";

const connectDB = async () => {
  try {
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(process.env.MONGODB_URI);
      console.log("Conectado ao banco de dados.");
    }
  } catch (error) {
    console.log("Erro ao tentar conectar ao banco de dados: ", error);
  }
};

export default connectDB;

import connectDB from "@/app/lib/mongodb";
import Contact from "@/app/models/contact";

export const fetchMessages = async () => {
  try {
    connectDB();
    const messages = await Contact.find();
    const messageCount = await Contact.countDocuments();
    return { messages, messageCount };
  } catch (error) {
    console.log(error);
    throw new Error("Falha ao tentar encontrar as mensagens.");
  }
};

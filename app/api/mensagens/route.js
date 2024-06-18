"use server";
import connectDB from "@/app/lib/mongodb";
import Contact from "@/app/models/contact";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

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

export const fetchSingleMessage = async (id) => {
  try {
    connectDB();
    const singleMessage = await Contact.findById(id);
    return singleMessage;
  } catch (error) {
    console.log(error);
    throw new Error("Falaha ao buscar a mensagem selecionada.");
  }
};

export const updateMessage = async (formData) => {
  const { id, contacted } = Object.fromEntries(formData);

  try {
    connectDB();
    const updatedFields = {
      contacted,
    };

    await Contact.findByIdAndUpdate(id, updatedFields);
  } catch (err) {
    console.log(err);
    throw new Error("Falha ao atualizar a mensagem.");
  }

  revalidatePath("/dashboard/mensagens");
};

export const deleteMessage = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectDB();
    await Contact.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
    throw new Error("Falha ao deletar a mensagem.");
  }

  redirect("/dashboard/mensagens");
};

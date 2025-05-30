"use server";

import { revalidatePath } from "next/cache";
import Contact from "@/app/models/contact";
import { redirect } from "next/navigation";
import connectDB from "@/app/lib/mongodb";

export const fetchMessages = async () => {
  await connectDB();

  try {
    const messages = await Contact.find();
    const messageCount = await Contact.countDocuments();
    return { messages, messageCount };
  } catch (error) {
    console.log(error);
    throw new Error("Falha ao tentar encontrar as mensagens.");
  }
};

export const fetchSingleMessage = async (id) => {
  await connectDB();

  try {
    const singleMessage = await Contact.findById(id);
    return singleMessage;
  } catch (error) {
    console.log(error);
    throw new Error("Falaha ao buscar a mensagem selecionada.");
  }
};

export const updateMessage = async (formData) => {
  const { id, contacted } = Object.fromEntries(formData);

  await connectDB();

  try {
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

  await connectDB();

  try {
    await Contact.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
    throw new Error("Falha ao deletar a mensagem.");
  }

  revalidatePath("/dashboard/mensagens");
  redirect("/dashboard/mensagens");
};

import connectDB from "@/app/lib/mongodb";
import Contact from "@/app/models/contact";

export default async function handler(req, res) {
  await connectDB();

  if (req.method === "GET") {
    try {
      const messages = await Contact.find();
      res.status(200).json(messages);
    } catch (error) {
      res.status(500).json({ error: "Erro ao buscar as mensagens." });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Método ${req.method} não permitido`);
  }
}

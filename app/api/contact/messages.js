import connectDB from "@/app/lib/mongodb";
import Contact from "@/app/models/contact";

export default async function handler(req, res) {
  await connectDB(); // Conectar ao banco de dados

  if (req.method === "GET") {
    try {
      const messages = await Contact.find().sort({ date: -1 }); // Buscar todas as mensagens, ordenadas por data
      res.status(200).json(messages); // Enviar as mensagens como resposta
    } catch (error) {
      res.status(500).json({ error: "Erro ao buscar mensagens de contato" });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Método ${req.method} não permitido`);
  }
}

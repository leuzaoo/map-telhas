import { fetchSingleMessage } from "@/app/api/mensagens/route";
import formatDate from "@/app/lib/formatDate";
import { BookOpen, Clock, MessageCircleReply } from "lucide-react";

// Função para obter a mensagem por ID
export default async function SingleMessagePage({ params }) {
  const { id } = params;
  const message = await fetchSingleMessage(id);
  console.log(message);

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-6">
      <div className="text-lg flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <label>Contatante:</label>
          <p className="bg-white px-6 py-3 rounded-xl shadow-md w-full md:w-auto">
            <span className="font-semibold text-xl">{message.fullname}</span>
          </p>
        </div>
        <div>
          <label>Email:</label>
          <p className="bg-white px-6 py-3 rounded-xl shadow-md w-full md:w-auto">
            <span className="font-semibold text-xl">{message.email}</span>
          </p>
        </div>
      </div>

      <div className="text-lg">
        <label className="block mb-2">Mensagem:</label>
        <p className="bg-white p-5 rounded-xl w-full shadow-md">
          {message.message}
        </p>

        <div className="mt-3 flex items-center justify-between">
          <p className="text-lg flex items-center gap-2">
            <Clock className="text-gray-500" /> {formatDate(message.date)}
          </p>
          <p className="flex items-center gap-2">
            <BookOpen className="text-gray-500" />
            Status:{" "}
            <span
              className={`font-semibold text-xl ${
                message.isRead ? "text-green-600" : "text-red-600"
              }`}
            >
              {message.isRead ? "Lido" : "Não Lido"}
            </span>
          </p>
          <p className="flex items-center gap-2">
            <MessageCircleReply className="text-gray-500" />
            Respondido:{" "}
            <span
              className={`font-semibold text-xl ${
                message.contacted ? "text-green-600" : "text-red-600"
              }`}
            >
              {message.contacted ? "Sim" : "Não"}
            </span>
          </p>
        </div>
        <form action="">
          <select name="isRead" id="isRead">
            <option value={true} selected={message.isRead}>
              Sim
            </option>
            <option value={false} selected={!message.isRead}>
              Não
            </option>
          </select>
        </form>
      </div>
    </div>
  );
}

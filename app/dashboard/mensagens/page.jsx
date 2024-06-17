import { fetchMessages } from "@/app/api/mensagens/route";
import formatDate from "@/app/lib/formatDate";
import Link from "next/link";

export default async function AdminMessagesPage() {
  const { messages, messageCount } = await fetchMessages();

  return (
    <div>
      <div className="grid grid-cols-3 gap-5">
        <div className="bg-blue-100 border border-blue-300 rounded-md shadow-lg p-4 mb-4">
          <h2 className="text-lg font-semibold">Total de Mensagens</h2>
          <p className="text-2xl font-bold">{messageCount}</p>
        </div>
        <div className="bg-blue-100 border border-blue-300 rounded-md shadow-lg p-4 mb-4">
          <h2 className="text-lg font-semibold">Mensagens não lidas</h2>
          <p className="text-2xl font-bold">{messageCount}</p>
        </div>
        <div className="bg-blue-100 border border-blue-300 rounded-md shadow-lg p-4 mb-4">
          <h2 className="text-lg font-semibold">Mensagens não respondidas</h2>
          <p className="text-2xl font-bold">{messageCount}</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {messages.map((message) => (
          <>
            <Link key={message.id} href={`/dashboard/mensagens/${message.id}`}>
              <div className="bg-white border border-gray-300 rounded-md shadow-md p-4 hover:bg-gray-100 transition-all duration-300">
                <h2 className="text-xl font-semibold mb-2">
                  {message.fullname}
                </h2>
                <ul className="text-gray-700 space-y-1">
                  <li>
                    <strong>Mensagem:</strong> {message.message}
                  </li>
                  <li>
                    <strong>Email:</strong> {message.email}
                  </li>
                  <li>
                    <strong>Data:</strong> {formatDate(message.date)}
                  </li>
                  <li>
                    <strong>Status:</strong>{" "}
                    {message.isRead ? "Lido" : "Não Lido"}
                  </li>
                  <li>
                    <strong>Respondido:</strong>{" "}
                    {message.contacted ? "Sim" : "Não"}
                  </li>
                </ul>
              </div>
            </Link>
          </>
        ))}
      </div>
    </div>
  );
}

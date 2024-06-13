import { fetchMessages } from "@/app/api/mensagens/route";
import formatDate from "@/app/lib/formatDate";
import Link from "next/link";

export default async function AdminMessagesPage() {
  const { messages, messageCount } = await fetchMessages();

  return (
    <div>
      <div className="bg-blue-100 border border-blue-300 rounded-md shadow-lg p-4 mb-4">
        <h2 className="text-lg font-semibold">Total de Mensagens</h2>
        <p className="text-2xl font-bold">{messageCount}</p>
      </div>
      <div className="grid grid-cols-1 gap-4">
        {messages.map((message) => (
          <>
            <Link key={message.id} href={`/dashboard/mensagens/${message.id}`}>
              <div className="bg-white border border-gray-300 rounded-md shadow-md p-4">
                <h2 className="text-xl font-semibold">{message.fullname}</h2>
                <p>Email: {message.email}</p>
                <p>Mensagem: {message.message}</p>
                <p>Data: {formatDate(message.date)}.</p>
              </div>
            </Link>
          </>
        ))}
      </div>
    </div>
  );
}

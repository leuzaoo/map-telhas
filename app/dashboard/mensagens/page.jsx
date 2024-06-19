import { fetchMessages } from "@/app/api/mensagens/route";
import formatDate from "@/app/lib/formatDate";
import { Check, X } from "lucide-react";
import Head from "next/head";
import Link from "next/link";

export const metadata = {
  title: "Painel de Mensagens",
  description: "Gerencie os conteúdos e configurações da MAP Telhas Metálicas.",
};

export default async function AdminMessagesPage() {
  let messages = [];
  let messageCount = 0;

  try {
    const data = await fetchMessages();
    messages = data.messages;
    messageCount = data.messageCount;
  } catch (error) {
    console.error("Failed to fetch messages:", error);
  }

  return (
    <div>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-blue-100 border border-blue-300 rounded-md shadow-lg p-4 mb-4">
          <h2 className="text-lg font-semibold">Total de Mensagens</h2>
          <p className="text-2xl font-bold">{messageCount}</p>
        </div>
        <div className="bg-blue-100 border border-blue-300 rounded-md shadow-lg p-4 mb-4">
          <h2 className="text-lg font-semibold">Mensagens não respondidas</h2>
          <p className="text-2xl font-bold">Em manutenção</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {messages.map((message) => (
          <Link key={message._id} href={`/dashboard/mensagens/${message._id}`}>
            <div className="bg-white border border-gray-300 rounded-md shadow-md p-4 hover:bg-gray-100 transition-all duration-300">
              <h2 className="text-xl font-semibold mb-2">{message.fullname}</h2>
              <ul className="text-gray-700 space-y-1">
                <li>
                  <strong>Mensagem:</strong> {message.message}
                </li>
                <li>
                  <strong>Email:</strong> {message.email}
                </li>
                <li>
                  <strong>Data:</strong> {formatDate(message.createdAt)}
                </li>
                <li className="flex items-center gap-1">
                  <strong>Respondido: </strong>{" "}
                  {message.contacted ? (
                    <Check color="green" />
                  ) : (
                    <X color="red" />
                  )}
                </li>
              </ul>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export const revalidate = 10;

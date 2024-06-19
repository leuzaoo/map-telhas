"use client";
import { useEffect, useState } from "react";
import { fetchMessages } from "@/app/api/mensagens/route";
import formatDate from "@/app/lib/formatDate";
import { Check, LoaderCircle, X } from "lucide-react";
import Link from "next/link";

export default function AdminMessagesPage() {
  const [loading, setLoading] = useState(true);
  const [messages, setMessages] = useState([]);
  const [messageCount, setMessageCount] = useState(0);

  useEffect(() => {
    const loadDataWithDelay = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1100));

        const data = await fetchMessages();
        setMessages(data.messages);
        setMessageCount(data.messageCount);
      } catch (error) {
        console.error("Failed to fetch messages:", error);
      } finally {
        setLoading(false);
      }
    };

    loadDataWithDelay();
  }, []);

  if (loading) {
    return (
      <div>
        <div className="flex items-center justify-center h-screen">
          <p className="text-lg font-medium flex items-center gap-2">
            <LoaderCircle className="animate-spin" /> Carregando...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div>
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

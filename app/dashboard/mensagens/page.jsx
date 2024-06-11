"use client"

import { useEffect, useState } from "react";
import Head from "next/head";

export default function AdminMessagesPage() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await fetch("/api/contact/messages");
        if (!response.ok) {
          throw new Error("Erro ao buscar mensagssssens");
        }
        const data = await response.json();
        setMessages(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchMessages();
  }, []);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <Head>
        <title>Painel de Administração - Mensagens</title>
      </Head>
      <div className="pt-44 pb-5">
        <h1 className="text-title uppercase font-bold text-primaryRed">
          Mensagens de Contato
        </h1>
        {messages.length > 0 ? (
          <ul className="mt-5">
            {messages.map((message) => (
              <li key={message._id} className="mb-4">
                <strong>{message.fullname}</strong> - {message.email}
                <p>{message.message}</p>
                <small>{new Date(message.date).toLocaleString()}</small>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-5">Nenhuma mensagem encontrada</p>
        )}
      </div>
    </>
  );
}

"use client";
import Head from "next/head";
import { useEffect, useState } from "react";
import React from "react";

export default function MessagesPage() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await fetch("/api/mensagens");
        if (!response.ok) {
          throw new Error("Erro ao buscar mensagens");
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
      <div>
        <h1>Painel de Administração - Mensagens de Contato</h1>
        {messages.length > 0 ? (
          <ul>
            {messages.map((message) => (
              <li key={message._id}>
                <strong>{message.fullname}</strong> - {message.email}
                <p>{message.message}</p>
                <small>{new Date(message.date).toLocaleString()}</small>
              </li>
            ))}
          </ul>
        ) : (
          <p>Nenhuma mensagem encontrada</p>
        )}
      </div>
    </>
  );
}

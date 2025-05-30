import { ArrowLeft, Clock, MessageCircleReply, Trash2Icon } from "lucide-react";
import {
  deleteMessage,
  fetchSingleMessage,
  updateMessage,
} from "@/app/api/mensagens/route";
import formatDate from "@/app/lib/formatDate";
import Link from "next/link";
import Head from "next/head";

export const metadata = {
  title: "Painel de Mensagens",
  description: "Gerencie os conteúdos e configurações da MAP Telhas Metálicas.",
};

export default async function SingleMessagePage({ params }) {
  const { id } = params;
  const message = await fetchSingleMessage(id);

  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <div className="max-w-7xl mx-auto p-6 space-y-6">
        <div className="w-full flex justify-between">
          <Link
            href="/dashboard/mensagens"
            className="flex items-center gap-2 text-neutral-600 underline underline-offset-2 hover:text-blue-500"
          >
            <ArrowLeft size="20" /> Voltar
          </Link>
          <form action={deleteMessage}>
            <input type="hidden" name="id" value={message.id} />
            <button className="bg-red-600 text-white max-w-max px-4 py-2 text-xl rounded-md">
              <Trash2Icon />
            </button>
          </form>
        </div>
        <form
          action={updateMessage}
          className="w-full bg-neutral-100 px-7 py-4 rounded-xl shadow-md"
        >
          <input type="hidden" name="id" value={message.id} />
          <div className="text-lg flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <label>Contatante:</label>
              <p className="bg-white px-6 py-3 rounded-xl shadow-md w-full md:w-auto">
                <span className="font-semibold text-xl">
                  {message.fullname}
                </span>
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
              <div className="flex items-center gap-2">
                <label>Foi respondida?</label>
                <select
                  name="contacted"
                  id="contacted"
                  className="px-3 py-1 shadow-md rounded-md"
                >
                  <option value={true} selected={message.contacted}>
                    Sim
                  </option>
                  <option value={false} selected={!message.contacted}>
                    Não
                  </option>
                </select>
              </div>
              <p className="flex items-center gap-2">
                <MessageCircleReply className="text-gray-500" />
                <span
                  className={`font-semibold text-xl ${
                    message.contacted ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {message.contacted ? "Respondido" : "Não respondido"}
                </span>
              </p>
            </div>
          </div>
          <div className="w-full flex items-end mt-10">
            <button
              className="bg-blue-600 text-white max-w-max px-4 py-2 text-xl rounded-md"
              type="submit"
            >
              Atualizar
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

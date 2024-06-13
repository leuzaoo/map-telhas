import { fetchSingleMessage } from "@/app/api/mensagens/route";
import formatDate from "@/app/lib/formatDate";
import { Clock } from "lucide-react";

export default async function SingleMessagePage({ params }) {
  const { id } = params;
  const message = await fetchSingleMessage(id);
  console.log(message);

  return (
    <>
      <div className="text-lg flex items-center justify-center gap-40 w-full">
        <h3 className="bg-white px-6 py-3 rounded-xl shadow-md">
          Contatante:{" "}
          <span className="font-semibold text-xl">{message.fullname}</span>
        </h3>
        <h3 className="bg-white px-6 py-3 rounded-xl shadow-md">
          Email: <span className="font-semibold text-xl">{message.email}</span>
        </h3>
      </div>
      <div className="text-lg mt-10">
        <label>Mensagem:</label>
        <p className="bg-white p-5 rounded-xl mt-1 w-full shadow-md">
          {message.message}
        </p>
        <p className="mt-3 text-lg flex items-center gap-2">
          <Clock /> {formatDate(message.date)}.
        </p>
      </div>
    </>
  );
}

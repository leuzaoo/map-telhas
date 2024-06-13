import { fetchSingleMessage } from "@/app/api/mensagens/route";

export default async function SingleMessagePage({ params }) {
  const { id } = params;
  const message = await fetchSingleMessage(id);

  return (
    <>
      <div className="text-xl flex items-center justify-center gap-40 w-full">
        <h3 className="bg-white px-6 py-3 rounded-xl">
          Contatante:{" "}
          <span className="font-semibold text-2xl">{message.fullname}</span>
        </h3>
        <h3 className="bg-white px-6 py-3 rounded-xl">
          Email: <span className="font-semibold text-2xl">{message.email}</span>
        </h3>
      </div>
      <div className="text-xl mt-10">
        <label>Mensagem:</label>
        <p className="bg-white p-3 rounded-xl text-3xl mt-1 w-full">
          {message.message}
        </p>
      </div>
    </>
  );
}

import { fetchMessages } from "../api/mensagens/route";

export default async function DashboardPage() {
  const { messages, messageCount } = await fetchMessages();

  return (
    <>
      <div className="bg-blue-100 border border-blue-300 rounded-md shadow-lg p-4 mb-4">
        <h2 className="text-lg font-semibold">Total de Mensagens</h2>
        <p className="text-2xl font-bold">{messageCount}</p>
      </div>
      <div className="text-2xl font-bold grid mx-auto h-screen w-full place-items-center">
        Em manutenção.
      </div>
    </>
  );
}

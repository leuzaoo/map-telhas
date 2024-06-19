import Head from "next/head";
import { fetchMessages } from "../api/mensagens/route";

export const metadata = {
  title: "Painel de Mensagens",
  description: "Gerencie os conteúdos e configurações da MAP Telhas Metálicas.",
};

export default async function DashboardPage() {
  const { messages, messageCount } = await fetchMessages();

  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <div className="text-2xl font-bold grid mx-auto h-screen w-full place-items-center">
        Em manutenção.
      </div>
    </>
  );
}

import AdminLayout from "../ui/adminPage/AdminLayout";
import Head from "next/head";

export const metadata = {
  title: "Painel de Administrador",
  description: "Gerencie os conteúdos e configurações da MAP Telhas Metálicas.",
};

export default function AdminPage() {
  return (
    <div>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <AdminLayout />
    </div>
  );
}

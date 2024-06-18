import AdminLayout from "../ui/adminPage/AdminLayout";
import Head from "next/head";

export default function AdminPage() {
  return (
    <div>
      <Head>
        <title>Painel de Administração - MAP Telhas Metálicas</title>
        <meta
          name="description"
          content="Gerencie os conteúdos e configurações da MAP Telhas Metálicas."
        />
      </Head>
      <AdminLayout />
    </div>
  );
}

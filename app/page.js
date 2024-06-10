import Homepage from "./ui/pages/homepage";
import Head from "next/head";

const metadata = {
  title: "Telhas Metálicas | Telhas Termoacústicas | Telha Sanduíche.",
  description:
    "Somos uma empresa especializada na fabricação de telhas metálicas e pintura eletrostática desde 1996. Localizada em Campo Limpo Paulista.",
};

export default function Home() {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta
          name="description"
          content="Trabalhamos com diversos tipos de telhas. Além das metálicas simples, temos a telha sanduíche termoacústica, sanduíche tipo forro, semi sanduíche. Galvanizadas, galvalume o coloridas."
          key="desc"
        />
      </Head>
      <main>
        <Homepage />
      </main>
    </>
  );
}

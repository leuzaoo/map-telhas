import Head from "next/head";
import Image from "next/image";
import Navbar from "./ui/navbar";
import Center from "./ui/center";

export default function Home() {
  return (
    <div>
      <Head>
        <title>MAP Telhas | Telhas Metálicas | Pintura Eletrostática.</title>
        <meta
          name="description"
          content="Somos uma empresa especializada na fabricação de telhas metálicas e pintura eletrostática desde 1996. Localizada em Campo Limpo Paulista."
          key="desc"
        />
      </Head>
      <main>
        <header>
          <Navbar />
        </header>
      </main>
    </div>
  );
}

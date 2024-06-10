import Homepage from "./ui/pages/homepage";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Telhas Metálicas | Telhas Termoacústicas | Telha Sanduíche.
        </title>
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

import Homepage from "./ui/pages/homepage";
import Navbar from "./ui/navbar";
import Head from "next/head";
import Footer from "./ui/footer";

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
      <header>
        <Navbar />
      </header>
      <main>
        <Homepage />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

import { Mulish } from "next/font/google";
import Navbar from "./ui/navbar";
import Footer from "./ui/footer";
import Head from "next/head";
import "./globals.css";

const mulish = Mulish({
  subsets: ["latin"],
  weight: ["200", "400", "500", "600", "700", "900"],
});

export const metadata = {
  title: "MAP Telhas Metálicas e Pintura Eletrostática.",
  description:
    "Somos uma empresa especializada na fabricação de telhas metálicas e pintura eletrostática desde 1996. Localizada em Campo Limpo Paulista.",
};

export default function RootLayout({ children }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <html lang="pt">
        <body id="Telhas Metálicas" className={`${mulish.className} Test`}>
          <h1 className="hidden">
            Map Telhas Metálicas e Pintura Eletrostática
          </h1>
          <header>
            <Navbar />
          </header>
          <main>{children}</main>
          <footer>
            <Footer />
          </footer>
        </body>
      </html>
    </>
  );
}

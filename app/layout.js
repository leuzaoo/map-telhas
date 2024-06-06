import { Poppins } from "next/font/google";
import { metadata } from "./lib/metadata";
import Navbar from "./ui/navbar";
import Footer from "./ui/footer";
import Head from "next/head";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "400", "500", "600", "700", "900"],
});

export default function RootLayout({ children }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <html lang="pt">
        <body id="Telhas Metálicas" className={`${poppins.className}`}>
          <h1 className="hidden">
            Map Telhas Metálicas e Pintura Eletrostática
          </h1>
          <header>
            <Navbar />
          </header>
          <main className="pt-[100px]">{children}</main>
          <footer>
            <Footer />
          </footer>
        </body>
      </html>
    </>
  );
}

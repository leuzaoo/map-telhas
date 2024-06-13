"use client";
import { usePathname } from "next/navigation";
import { Poppins } from "next/font/google";
import Navbar from "./ui/navbar";
import Footer from "./ui/footer";
import Head from "next/head";

import "./globals.css";
import { metadata } from "./lib/metadata";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "400", "500", "600", "700", "900"],
});

export default function RootLayout({ children }) {
  const router = usePathname();
  const adminRoute = router.includes("/admin");
  const dashboardRoute = router.includes("/dashboard");
  
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
          <header>{adminRoute || dashboardRoute ? "" : <Navbar />}</header>
          <main>{children}</main>
          <footer>{adminRoute || dashboardRoute ? "" : <Footer />}</footer>
        </body>
      </html>
    </>
  );
}

import { Poppins } from "next/font/google";
import Script from "next/script";

import "./globals.css";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "400", "500", "600", "700", "900"],
});

export const metadata = {
  title: "MAP Telhas Metálicas | Telhas Termoacústicas | Telha Sanduíche",
  description:
    "Somos uma empresa especializada na fabricação de telhas metálicas e pintura eletrostática desde 1996. Localizada em Campo Limpo Paulista.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body className={poppins.className}>
        {/* Google Ads: gtag.js */}
        <Script
          strategy="afterInteractive"
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-11433525406"
        />
        <Script id="gtag-config" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-11433525406');
          `}
        </Script>

        <main>{children}</main>
      </body>
    </html>
  );
}

import "./globals.css";
import { Poppins } from "next/font/google";
import Script from "next/script";

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
    <html lang="pt-BR">
      <head>
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NG5K59HZ');`,
          }}
        />
        {/* End Google Tag Manager */}

        {/* Google Ads (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-11433525406"
          strategy="afterInteractive"
          async
        />
        <Script id="gtag-config" strategy="afterInteractive">
          {`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'AW-11433525406');
          `}
        </Script>
      </head>

      <body className={poppins.className}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NG5K59HZ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <main>{children}</main>
      </body>
    </html>
  );
}

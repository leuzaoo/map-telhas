import { Poppins } from "next/font/google";
import Script from "next/script";
import Image from "next/image";
import Head from "next/head";
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
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>

      <Script id="gtm" strategy="afterInteractive">
        {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MZ977R2Z');
          `}
      </Script>
      <html lang="pt">
        <body id="Telhas Metálicas" className={`${poppins.className}`}>
          <Script
            id="fb-pixel"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1155733015746543');
            fbq('track', 'PageView');
          `,
            }}
          />
          <noscript>
            <Image
              height={1}
              width={1}
              style={{ display: "none" }}
              src="https://www.facebook.com/tr?id=1155733015746543&ev=PageView&noscript=1"
              alt="Facebook Pixel"
            />
          </noscript>
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-MZ977R2Z"
              height="0"
              width="0"
              style={{ display: "none" }}
            ></iframe>
          </noscript>
          <h1 className="hidden">
            Map Telhas Metálicas e Pintura Eletrostática
          </h1>
          <main>{children}</main>
        </body>
      </html>
    </>
  );
}

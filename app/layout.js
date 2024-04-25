import { Mulish } from "next/font/google";
import "./globals.css";

const mulish = Mulish({
  subsets: ["latin"],
  weight: ["200", "400", "700", "900"],
});

export const metadata = {
  title: "MAP Telhas | Telhas Metálicas | Pintura Eletrostática.",
  description:
    "Somos uma empresa especializada na fabricação de telhas metálicas e pintura eletrostática desde 1996. Localizada em Campo Limpo Paulista.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={mulish.className}>{children}</body>
    </html>
  );
}

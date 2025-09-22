import localFont from "next/font/local";
import { Manrope } from "next/font/google";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../../public/styles/global.scss";

import AOSProvider from "@/components/AOSProvider";
const manrope = Manrope({
  variable: "--font-manrope",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

const gotham = localFont({
  src: [
    {
      path: "../../public/fonts/Gotham-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/Gotham-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Gotham-Book.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/Gotham-BookItalic.woff2",
      weight: "300",
      style: "italic",
    },
    {
      path: "../../public/fonts/Gotham-BoldItalic.woff2",
      weight: "700",
      style: "italic",
    }
  ],
  variable: "--font-gotham",
});

const myriadPro = localFont({
  src: [
    {
      path: "../../public/fonts/MyriadPro-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-myriad",
});

export const metadata = {
  title: "wund+™",
  description: "Solusi Tepat untuk pemulihan lebih cepat",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${gotham.variable} ${myriadPro.variable}`}>
        <AOSProvider>
          {children}
        </AOSProvider>
      </body>
    </html>
  );
}

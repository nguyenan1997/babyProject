
import React from "react";
import { API } from "@/services/API";
import { Header } from "@/Component/Header/Header";
import { Footer } from "@/Component/Footer/Footer";
import { Cherry_Bomb_One, Comfortaa, Montserrat, Encode_Sans_Semi_Condensed, Jost } from 'next/font/google';
import localFont from "next/font/local";
import type { Metadata } from "next";
import Head from "next/head";
import '../styles/globals.css';
import '../styles/MainHomePage/main.css';
import '../styles/Footer/footer.css';
import '../styles/Responsive/responsive-layout.css';
import '../styles/Responsive/responsive.css';
import ComponentInforUser from "@/common/ComponentCommonLayOut/ComponentInforUser";
import ComponentSideBar from "@/common/ComponentCommonLayOut/ComponentSideBar";
import { CartProvider } from "@/hooks/Context/CartContext";

// Cấu hình font Cherry Bomb One
const cherryBomb = Cherry_Bomb_One({
  weight: '400',         // Chỉ định weight là 400
  subsets: ['latin'],    // Chọn bộ ký tự latin
  preload: true,         // Tải trước font
});

const comfortaa = Comfortaa({
  weight: '400',         // Chỉ định weight là 400
  subsets: ['latin'],    // Chọn bộ ký tự latin
  preload: true,         // Tải trước font
});

const montserrat = Montserrat({
  subsets: ['latin'],    // Chọn bộ ký tự latin
  preload: true,         // Tải trước font
});

const EncodeSansSemiCondensed = Encode_Sans_Semi_Condensed({
  weight: '600',         // Chỉ định weight là 400
  subsets: ['latin'],    // Chọn bộ ký tự latin
  preload: true,         // Tải trước font
});

const jost = Jost({
  weight: '600',         // Chỉ định weight là Jost
  subsets: ['latin'],    // Chọn bộ ký tự latin
  preload: true,         // Tải trước font
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Home Page",
  description: "Generated by create next app",
};


export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <CartProvider>
        <body className={`${geistSans.variable} ${geistMono.variable}`}>
          <Header data={API} />
          {children}
          <Footer />
          <ComponentInforUser />
          <ComponentSideBar />
        </body>
      </CartProvider>
    </html>
  );
}
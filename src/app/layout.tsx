import type { Metadata } from "next";

import "@/app/common/index.css";
import "@fontsource/poppins";
import "@fontsource/playfair-display";
import "@fontsource/jetbrains-mono";
import { Header } from "./(website)/components/Header";
import { Footer } from "./(website)/components/Footer";

export const metadata: Metadata = {
  title: "FireCMS E-commerce",
  description: "This is a demo for using FireCMS as an e-commerce backend",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

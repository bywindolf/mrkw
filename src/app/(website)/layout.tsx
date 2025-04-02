import React from "react";

import type { Metadata } from "next";

import NextTopLoader from "nextjs-toploader";
import { Providers } from "./Providers";
import { Header } from "@/app/(website)/components/Header";
import { Footer } from "@/app/(website)/components/Footer";
import Main from "./components/Main";

export const metadata: Metadata = {
  title: "FireCMS e-commerce and blog demo",
  description: "This is a demo for using FireCMS as an e-commerce backend",
  generator: "FireCMS",
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
        <Providers>{children}</Providers>
        <Footer />
      </body>
    </html>
  );
}

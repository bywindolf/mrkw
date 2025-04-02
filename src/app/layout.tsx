import type { Metadata } from "next";

import "@/app/common/index.css";
import "@fontsource/poppins";
import "@fontsource/playfair-display";
import "@fontsource/jetbrains-mono";
import { Header } from "./(website)/components/Header";
import { Footer } from "./(website)/components/Footer";

export const metadata: Metadata = {
  title: "MRKW – Now it's personal",
  description: "A portfolio site of Kristoffer Windolf",
  generator: "...",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

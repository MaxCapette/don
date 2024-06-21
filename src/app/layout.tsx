import type { Metadata } from "next";
import { Suspense } from "react";
import { Inter } from "next/font/google";

import "./globals.css";
import Loading from "./loading";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Useless Facts",
  description: "Discover some useless facts about the world around you.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
    
          <Header />
          <Suspense fallback={<Loading />}>
          {children}
          </Suspense>
          <Footer />
       
      </body>
    </html>
  );
}

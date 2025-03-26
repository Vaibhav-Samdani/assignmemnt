import type { Metadata } from "next";
import { DM_Sans, Geist, Inter } from "next/font/google";
import "./globals.css";
import { SidebarProvider } from "@/components/ui/sidebar";
import Head from "next/head";



const inter = Inter({  subsets: ["latin"] });

const geist = Geist({ subsets: ["latin"] });

const dmsans = DM_Sans({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ViViD.Ai",
  description: "Transforming your ideas into reality",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scrollbar-hide">
      <Head>
      <link rel="icon" href="../public/logo-sub.png" />
    </Head>
      <body
        className={`${dmsans.className} antialiased w-full h-full flex bg-[#171717] scrollbar-hide`}
      >
        <SidebarProvider>
        {children}
        </SidebarProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { DM_Sans, Geist, Inter } from "next/font/google";
import "./globals.css";
import { SidebarProvider } from "@/components/ui/sidebar";



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
    <html lang="en">
      <body
        className={`${geist.className} antialiased w-full h-full flex`}
      >
        <SidebarProvider>
        {children}
        </SidebarProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/sections/footer";
import { Toaster } from "sonner";

const font = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Audio Alchemy",
  description: "Unleash your musical potential",
  icons: {
    icon: [
      {
        type: "image/svg+xml",
        url: "/music.svg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={font.className}>
        <div className="relative flex w-full items-center justify-center">
          <Navbar />
        </div>
        {children}
        <Toaster richColors position="top-center" />
        <Footer />
      </body>
    </html>
  );
}

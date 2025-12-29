import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CircuitBoard from "@/components/CircuitBoard";
import ResponsiveNavbar from "@/layout/header";
import Footer from "@/layout/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Portfolio",
  description: "portfolio with nextjs and backend",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
         <ResponsiveNavbar className="fixed  top-0 left-0 right-0 z-50" />
        <CircuitBoard />

    <main className="relative z-10 min-h-screen pt-[80px]">
  {children}
</main>
<Footer />
      </body>
    </html>
  );
}

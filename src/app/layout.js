import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CircuitBoard from "@/components/CircuitBoard";

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
            <CircuitBoard />

  <main className="relative z-10 min-h-screen">
    {children}
  </main>
         
      </body>
    </html>
  );
}

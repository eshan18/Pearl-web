import "./styles/globals.css";
import { ReactNode } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ChatbotWidget from "./components/ChatbotWidget";

export const metadata = {
  title: "PearlyGlow Innovations Pvt Ltd - Dental Instruments Ecommerce",
  description:
    "High quality dental instruments ecommerce frontend for PearlyGlow Innovations Pvt Ltd",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-brandBg text-brandText font-body min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8">
          {children}
        </main>
        <Footer />
        <ChatbotWidget />
      </body>
    </html>
  );
}

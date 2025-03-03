import type { Metadata } from "next";
import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import TopBar from "@/components/TopBar";
import { Poppins } from "@next/font/google";

const poppins = Poppins({
  subsets: ["latin"], // Include only the Latin subset for performance
  variable: "--font-poppins", // CSS variable for flexibility
  weight: ["400", "500", "600", "700"], // Common weights for professionalism
  display: "swap", // Improves FOUT (Flash of Unstyled Text)
});

export const metadata: Metadata = {
  title: "Gensys",
  description: "Development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} font-sans`}>
      <body>
        <TopBar />
        <Navbar />
        {children}
      </body>
    </html>
  );
}

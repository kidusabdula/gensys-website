import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import TopBar from "@/components/TopBar";


export const metadata = {
  title: "Gensys - Empowering Technology, Shaping the Future",
  description: "Gensys delivers cutting-edge software solutions for businesses, including websites, full-stack apps, DevOps, and systems development.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="font-sans">
      <body>
        <TopBar />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
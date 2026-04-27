import "./globals.css";
import { AppProvider } from "@/context/AppContext";
import { Playfair_Display, Montserrat } from "next/font/google";

// Elegant Serif for Headings
const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair",
});

// Clean Sans-Serif for Body text
const montserrat = Montserrat({ 
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata = {
  title: "Crystal Community Center",
  description: "The Perfect Venue for Your Cherished Moments in Gobindaganj.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="bn" className={`scroll-smooth ${playfair.variable} ${montserrat.variable}`}>
      <body className="bg-[#FDFBF7] text-[#2D2B2A] font-sans antialiased selection:bg-[#E8D5A5] selection:text-[#2D2B2A]">
        <AppProvider>
          {children}
        </AppProvider>
      </body>
    </html>
  );
}
import type { Metadata } from "next";
import { venueSchema } from "@/lib/venue";
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

export const metadata: Metadata = {
  metadataBase: new URL("https://www.crystalccbd.site/"),
  title: "Crystal Community Center | Wedding Venue in Gobindaganj, Gaibandha",
  description: "ক্রিস্টাল কমিউনিটি সেন্টার, গোবিন্দগঞ্জ, গাইবান্ধা। ৩৫০ আসনের এসি অডিটোরিয়াম, ছাদ, রান্নাঘর ও পার্কিং। Wedding, reception and seminar bookings in Bangladesh.",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website", url: "/", siteName: "Crystal Community Center",
    title: "Crystal Community Center — Gobindaganj, Gaibandha, Bangladesh",
    description: "৩৫০ আসনের এসি অডিটোরিয়ামে বিয়ে, গায়ে হলুদ, বউভাত ও সেমিনারের আয়োজন। Contact us for dates and booking details.",
    locale: "bn_BD", alternateLocale: ["en_BD"],
    images: [{ url: "/crystal-gobindaganj-wedding-hall-og.jpg", width: 1200, height: 630, alt: "Decorated wedding stage at Crystal Community Center, Gobindaganj" }],
  },
  twitter: { card: "summary_large_image", title: "Crystal Community Center | Gobindaganj, Gaibandha", description: "Wedding and event venue in Gobindaganj, Bangladesh. 350-seat AC auditorium, rooftop, kitchen and parking.", images: ["/crystal-gobindaganj-wedding-hall-og.jpg"] },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="bn" className={`scroll-smooth ${playfair.variable} ${montserrat.variable}`}>
      <body className="bg-[#FDFBF7] text-[#2D2B2A] font-sans antialiased selection:bg-[#E8D5A5] selection:text-[#2D2B2A]">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(venueSchema).replace(/</g, "\\u003c") }} />
        <AppProvider>
          {children}
        </AppProvider>
      </body>
    </html>
  );
}

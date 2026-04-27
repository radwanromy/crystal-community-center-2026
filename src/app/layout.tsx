import "./globals.css";
import { AppProvider } from "@/context/AppContext";

export const metadata = {
  title: "Crystal Community Center",
  description: "The Perfect Venue for Your Cherished Moments in Gobindaganj.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body style={{ backgroundColor: "var(--bg-base)", color: "var(--text-primary)" }}>
        <AppProvider>
          {children}
        </AppProvider>
      </body>
    </html>
  );
}
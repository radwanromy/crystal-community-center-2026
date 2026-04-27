"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useAppContext } from "@/context/AppContext";
import { Bars3Icon, XMarkIcon, SpeakerWaveIcon, SpeakerXMarkIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  const { lang, toggleLang, isTTSEnabled, toggleTTS } = useAppContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "#home",       label: lang === "en" ? "Home"       : "হোম" },
    { href: "#about",      label: lang === "en" ? "About"      : "পরিচয়" },
    { href: "#programs",   label: lang === "en" ? "Programs"   : "প্রোগ্রাম" },
    { href: "#facilities", label: lang === "en" ? "Facilities" : "সুবিধা" },
    { href: "#gallery",    label: lang === "en" ? "Gallery"    : "গ্যালারি" },
    { href: "#contact",    label: lang === "en" ? "Contact"    : "যোগাযোগ" },
  ];

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        backgroundColor: "var(--navbar-bg)",
        borderBottom: `0.5px solid ${scrolled ? "#e0d097" : "#E8E4D8"}`,
        boxShadow: scrolled ? "0 2px 16px rgba(0,0,0,0.10)" : "none",
        transition: "box-shadow 0.3s ease, border-color 0.3s ease",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", height: 64 }}>

          {/* Logo - NOW WITH TRANSLATION */}
          <a href="#home" style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none", flexShrink: 0 }}>
            <Image
              src="/logo.png"
              alt="Crystal Community Center"
              width={40}
              height={40}
              priority
              style={{ borderRadius: "50%", objectFit: "cover" }}
            />
            <div style={{ lineHeight: 1.25 }}>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 18, fontWeight: 600, color: "var(--navbar-text)", letterSpacing: "0.06em" }}>
                {lang === "en" ? "CRYSTAL" : "ক্রিস্টাল"}
              </div>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 16, fontWeight: 600, color: "var(--navbar-muted)", letterSpacing: "0.03em" }}>
                {lang === "en" ? "Community Center" : "কমিউনিটি সেন্টার"}
              </div>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex" style={{ gap: 28, alignItems: "center" }}>
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 13,
                  fontWeight: 500,
                  color: "var(--navbar-muted)",
                  textDecoration: "none",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  transition: "color 0.2s",
                }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--navbar-amber)")}
                onMouseLeave={e => (e.currentTarget.style.color = "var(--navbar-muted)")}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop controls */}
          <div className="hidden lg:flex" style={{ alignItems: "center", gap: 10 }}>
            <button
              onClick={toggleTTS}
              title={isTTSEnabled ? "Disable read-on-hover" : "Enable read-on-hover"}
              style={{
                display: "flex", alignItems: "center", justifyContent: "center",
                width: 36, height: 36, borderRadius: "50%",
                border: `1.5px solid ${isTTSEnabled ? "var(--navbar-amber)" : "#D4C9A0"}`,
                background: isTTSEnabled ? "rgba(160,114,8,0.08)" : "transparent",
                color: isTTSEnabled ? "var(--navbar-amber)" : "var(--navbar-muted)",
                cursor: "pointer", transition: "all 0.2s",
              }}
            >
              {isTTSEnabled
                ? <SpeakerWaveIcon style={{ width: 16, height: 16 }} />
                : <SpeakerXMarkIcon style={{ width: 16, height: 16 }} />
              }
            </button>

            <button
              onClick={toggleLang}
              style={{
                fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 600,
                color: "var(--navbar-amber)", border: "1.5px solid var(--navbar-amber)",
                background: "transparent", padding: "6px 16px", borderRadius: 6,
                cursor: "pointer", transition: "all 0.2s", letterSpacing: "0.02em",
              }}
              onMouseEnter={e => { e.currentTarget.style.background = "var(--navbar-amber)"; e.currentTarget.style.color = "#fff"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--navbar-amber)"; }}
            >
              {lang === "en" ? "বাংলা" : "EN"}
            </button>

            <a href="#contact" className="btn-primary" style={{ padding: "8px 20px", fontSize: 13, textDecoration: "none" }}>
              {lang === "en" ? "Book Now" : "বুকিং"}
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{ background: "none", border: "none", cursor: "pointer", padding: 4 }}
          >
            {isMenuOpen
              ? <XMarkIcon style={{ width: 24, height: 24, color: "var(--navbar-text)" }} />
              : <Bars3Icon style={{ width: 24, height: 24, color: "var(--navbar-text)" }} />
            }
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div style={{
          backgroundColor: "var(--navbar-bg)",
          borderTop: "0.5px solid #E8E4D8",
          position: "absolute", top: 64, left: 0, right: 0, zIndex: 40,
          boxShadow: "0 8px 24px rgba(0,0,0,0.10)",
        }}>
          <nav style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  width: "100%", textAlign: "center",
                  fontSize: 15, fontWeight: 500,
                  color: "var(--navbar-text)", textDecoration: "none",
                  padding: "14px 24px",
                  borderBottom: "0.5px solid #F0EDE4",
                  transition: "color 0.2s, background 0.2s",
                }}
                onMouseEnter={e => { e.currentTarget.style.background = "#F5F2E8"; e.currentTarget.style.color = "var(--navbar-amber)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--navbar-text)"; }}
              >
                {item.label}
              </a>
            ))}
            <div style={{ display: "flex", gap: 12, padding: "16px 24px", width: "100%", justifyContent: "center" }}>
              <button
                onClick={() => { toggleLang(); setIsMenuOpen(false); }}
                style={{
                  fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 600,
                  color: "var(--navbar-amber)", border: "1.5px solid var(--navbar-amber)",
                  background: "transparent", padding: "8px 24px", borderRadius: 6, cursor: "pointer",
                }}
              >
                {lang === "en" ? "বাংলা" : "EN"}
              </button>
              <a href="#contact" className="btn-primary" onClick={() => setIsMenuOpen(false)} style={{ fontSize: 14, textDecoration: "none" }}>
                {lang === "en" ? "Book Now" : "বুকিং"}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
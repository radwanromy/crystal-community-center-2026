"use client";

import Navbar from "@/components/Navbar";
import { useAppContext } from "@/context/AppContext";
import CustomerGallery from "@/components/CustomerGallery";
import VideoReels from "@/components/VideoReels";

/* ── Inline SVG icons (no emoji, no heroicons sizing issues) ── */
const IconPin = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 2 }}>
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/>
  </svg>
);
const IconPhone = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 2 }}>
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.1 2.18 2 2 0 012.11 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
  </svg>
);
const IconMail = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 2 }}>
    <path d="M4 4h16c1.1 0 2 .9 2 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
  </svg>
);
const IconClock = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 2 }}>
    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
  </svg>
);
const IconFacebook = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
  </svg>
);
const IconChevronDown = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9"/>
  </svg>
);
const IconStar = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style={{ color: "var(--gold-primary)" }}>
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
);

const programIcons: Record<string, React.ReactNode> = {
  wedding: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--gold-primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
    </svg>
  ),
  meeting: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--gold-primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/>
    </svg>
  ),
  conference: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--gold-primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
    </svg>
  ),
  celebration: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--gold-primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
    </svg>
  ),
};

export default function Home() {
  const { t, lang } = useAppContext();

  return (
    <main style={{ minHeight: "100vh", backgroundColor: "var(--bg-base)" }}>
      <Navbar />

      {/* ── HERO ── */}
      <section
        id="home"
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "80px 24px",
          overflow: "hidden",
        }}
      >
        {/* Background image with dark overlay */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "url('/Assets/images/312a4384-43bc-4700-b1a3-c8c7f728239f.jpg')",
          backgroundSize: "cover", backgroundPosition: "center",
          opacity: 0.12,
        }} />
        {/* Warm radial glow behind title */}
        <div style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(ellipse 70% 60% at 50% 40%, rgba(201,150,10,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />

        <div style={{ position: "relative", zIndex: 10, maxWidth: 860, margin: "0 auto" }}>
          {/* Pre-title badge - TRANSLATED */}
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 24 }}>
            <span className="badge-gold">
              {lang === "en" ? "Gobindaganj · Est. 2022" : "গোবিন্দগঞ্জ · প্রতিষ্ঠিত ২০২২"}
            </span>
          </div>

          <h1 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "clamp(2.8rem, 7vw, 5rem)",
            fontWeight: 700,
            color: "var(--text-primary)",
            lineHeight: 1.1,
            marginBottom: 24,
          }}>
            {t.hero.title}
          </h1>

          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "clamp(1.1rem, 2.5vw, 1.35rem)",
            fontWeight: 400,
            color: "var(--gold-primary)",
            marginBottom: 16,
            letterSpacing: "0.01em",
          }}>
            {t.hero.subtitle}
          </p>

          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "1rem",
            color: "var(--text-secondary)",
            maxWidth: 560,
            margin: "0 auto 40px",
            lineHeight: 1.75,
          }}>
            {t.hero.mission}
          </p>

          <div style={{ display: "flex", justifyContent: "center", gap: 16, flexWrap: "wrap" }}>
            <a href="#facilities" className="btn-primary">{t.hero.cta1}</a>
            <a href="#contact" className="btn-outline">{t.hero.cta2}</a>
          </div>

          {/* Scroll indicator */}
          <div style={{ marginTop: 64, display: "flex", justifyContent: "center", opacity: 0.5 }}>
            <span className="scroll-arrow" style={{ color: "var(--gold-primary)" }}>
              <IconChevronDown />
            </span>
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" style={{ backgroundColor: "var(--bg-elevated)", borderTop: "0.5px solid var(--border-subtle)" }}>
        <div className="section-pad section-inner" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 64, alignItems: "center" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <h4 style={{ color: "var(--gold-primary)", fontFamily: "'DM Sans', sans-serif", fontSize: 12, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 4 }}>
              {lang === "en" ? "Our Story" : "আমাদের গল্প"}
            </h4>
            <h2 className="section-heading">{t.about.title}</h2>
            
            {/* Enhanced About Text with all content */}
            <div style={{ color: "var(--text-secondary)", lineHeight: 1.8, fontSize: "1rem" }}>
              <p style={{ marginBottom: 16 }}>
                {lang === "en" 
                  ? "The dream of creating a good community center in our area was planned earlier in 2019. Since then, we were thinking about how to build it in a way so that people feel more comfortable."
                  : "আমাদের এলাকায় একটি ভালো কমিউনিটি সেন্টার তৈরির স্বপ্নটি ২০১৯ সালের শুরুতে পরিকল্পনা করা হয়েছিল। তখন থেকেই আমরা ভাবছিলাম কীভাবে এটি এমনভাবে নির্মাণ করা যায় যাতে মানুষ আরও স্বাচ্ছন্দ্য বোধ করে।"}
              </p>
              <p style={{ marginBottom: 16 }}>
                {lang === "en" 
                  ? "Founded in 2022 by Abu Fattab Shah Md Eleas, Crystal Community Center has successfully hosted over 100+ events. Our mission is to provide an elegant, hassle-free environment for all your special occasions."
                  : "আবু ফাত্তাব শাহ মোঃ ইলিয়াস কর্তৃক ২০২২ সালে প্রতিষ্ঠিত, ক্রিস্টাল কমিউনিটি সেন্টার সফলভাবে ১০০টিরও বেশি ইভেন্ট আয়োজন করেছে। আমাদের লক্ষ্য হলো আপনার সমস্ত বিশেষ অনুষ্ঠানের জন্য একটি মার্জিত এবং ঝামেলামুক্ত পরিবেশ প্রদান করা।"}
              </p>
              <p style={{ marginBottom: 16 }}>
                {lang === "en" 
                  ? "This community center was created to give people a space where they can organize their dream events more comfortably, with all the necessary amenities to host a successful event."
                  : "এই কমিউনিটি সেন্টারটি মানুষকে একটি স্থান দেওয়ার জন্য তৈরি করা হয়েছে যেখানে তারা তাদের স্বপ্নের অনুষ্ঠান আরও আরামদায়কভাবে আয়োজন করতে পারে, একটি সফল অনুষ্ঠান আয়োজনের জন্য প্রয়োজনীয় সমস্ত সুবিধা সহ।"}
              </p>
              <p style={{ marginBottom: 16 }}>
                {lang === "en" 
                  ? "We tried our best to offer as much service as possible to our customers, as their successful event is our main goal."
                  : "আমরা আমাদের গ্রাহকদের সম্ভাব্য সর্বোচ্চ সেবা দেওয়ার চেষ্টা করি, কারণ তাদের সফল অনুষ্ঠানই আমাদের মূল লক্ষ্য।"}
              </p>
              <p style={{ marginBottom: 16 }}>
                {lang === "en" 
                  ? "Previously, there was no such place in the area. We have recently added full hall air conditioning to make events more comfortable. The concerns of people's wishes and their benefits were highly prioritized when we built this community center. -- ASM RADWAN"
                  : "পূর্বে এই এলাকায় এমন কোনো স্থান ছিল না। আমরা সম্প্রতি পুরো হল এয়ার কন্ডিশনিং যোগ করেছি যাতে অনুষ্ঠান আরও আরামদায়ক হয়। এই কমিউনিটি সেন্টার নির্মাণের সময় মানুষের ইচ্ছা এবং তাদের সুবিধার বিষয়গুলোকে সর্বোচ্চ অগ্রাধিকার দেওয়া হয়েছে। -- এ এস এম রেদোয়ান"}
              </p>
            </div>

            <div style={{
              display: "flex", alignItems: "center", gap: 12,
              padding: "14px 16px",
              background: "rgba(201,150,10,0.06)",
              border: "0.5px solid var(--gold-border)",
              borderRadius: "var(--radius-md)",
            }}>
              <IconStar />
              <p style={{ color: "var(--gold-primary)", fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem", fontWeight: 500, margin: 0, lineHeight: 1.4 }}>
                {t.about.owner}
              </p>
            </div>
          </div>

          <div style={{
            background: "var(--bg-surface)",
            border: "0.5px solid var(--border-subtle)",
            borderRadius: "var(--radius-xl)",
            overflow: "hidden",
            aspectRatio: "4/3",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <img
              src="/Assets/images/Crystal Community Center.png"
              alt="Crystal Community Center"
              style={{ objectFit: "contain", width: "100%", height: "100%", padding: 32, opacity: 0.85 }}
            />
          </div>
        </div>
      </section>

      {/* ── PROGRAMS ── */}
      <section id="programs" style={{ backgroundColor: "var(--bg-base)", borderTop: "0.5px solid var(--border-subtle)" }}>
        <div className="section-pad section-inner">
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <h4 style={{ color: "var(--gold-primary)", fontFamily: "'DM Sans', sans-serif", fontSize: 12, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 12 }}>
              {lang === "en" ? "What We Offer" : "আমরা যা অফার করি"}
            </h4>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", fontWeight: 600, color: "var(--text-primary)", margin: "0 auto" }}>
              {t.programs.title}
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 }}>
            {(["wedding", "meeting", "conference", "celebration"] as const).map((prog) => (
              <div
                key={prog}
                className="card"
                style={{ display: "flex", flexDirection: "column", gap: 16 }}
              >
                <div style={{
                  width: 52, height: 52, borderRadius: "var(--radius-md)",
                  background: "rgba(74,58,10,0.4)", border: "0.5px solid var(--gold-subtle)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  {programIcons[prog]}
                </div>
                <div>
                  <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.1rem", fontWeight: 600, color: "var(--text-primary)", marginBottom: 6 }}>
                    {t.programs[prog]}
                  </h3>
                  <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: 1.65, margin: 0 }}>
                    {t.programs[`${prog}Desc`]}
                  </p>
                </div>
                <div style={{ marginTop: "auto", paddingTop: 12, borderTop: "0.5px solid var(--border-subtle)" }}>
                  <a href="#contact" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.85rem", fontWeight: 600, color: "var(--gold-primary)", textDecoration: "none", letterSpacing: "0.02em" }}>
                    {lang === "en" ? "Enquire now →" : "এখনই জানতে চান →"}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FACILITIES ── */}
      <section id="facilities" style={{ backgroundColor: "var(--bg-elevated)", borderTop: "0.5px solid var(--border-subtle)" }}>
        <div className="section-pad section-inner">
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <h4 style={{ color: "var(--gold-primary)", fontFamily: "'DM Sans', sans-serif", fontSize: 12, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 12 }}>
              {lang === "en" ? "With Crystal" : "ক্রিস্টালের সাথে"}
            </h4>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", fontWeight: 600, color: "var(--text-primary)", margin: "0 auto" }}>
              {t.facilities.title}
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 14 }}>
            {(["aircon", "auditorium", "rooftop", "prayer", "cafeteria", "cooking", "layout", "washrooms", "extras","airc"] as const).map((fac, i) => (
              <div
                key={fac}
                style={{
                  display: "flex", alignItems: "flex-start", gap: 14,
                  background: "var(--bg-surface)",
                  border: "0.5px solid var(--border-subtle)",
                  borderLeft: `3px solid ${i % 3 === 0 ? "var(--gold-primary)" : "var(--gold-subtle)"}`,
                  borderRadius: "0 var(--radius-md) var(--radius-md) 0",
                  padding: "14px 16px",
                  transition: "border-left-color 0.2s ease, background 0.2s ease",
                }}
                onMouseEnter={e => { e.currentTarget.style.borderLeftColor = "var(--gold-primary)"; e.currentTarget.style.background = "var(--bg-elevated)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderLeftColor = i % 3 === 0 ? "var(--gold-primary)" : "var(--gold-subtle)"; e.currentTarget.style.background = "var(--bg-surface)"; }}
              >
                <span style={{ color: "var(--gold-primary)", fontSize: 10, marginTop: 4, flexShrink: 0, fontWeight: 700 }}>✦</span>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem", lineHeight: 1.6, margin: 0 }}>
                  {t.facilities[fac]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY ── */}
      <section id="gallery" style={{ backgroundColor: "var(--bg-base)", borderTop: "0.5px solid var(--border-subtle)" }}>
        <div className="section-pad section-inner">
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <h4 style={{ color: "var(--gold-primary)", fontFamily: "'DM Sans', sans-serif", fontSize: 12, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 12 }}>
              {lang === "en" ? "Moments Captured" : "মুহূর্ত বন্দী"}
            </h4>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", fontWeight: 600, color: "var(--text-primary)", marginBottom: 12 }}>
              {t.gallery.title}
            </h2>
            <p style={{ color: "var(--text-secondary)", maxWidth: 480, margin: "0 auto", fontSize: "0.95rem" }}>
              {t.gallery.subtitle}
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 16 }}>
            {[
              "/Assets/images/abf7092c-7023-41cc-8884-176eca442bc7.jpg",
              "/Assets/images/FB_IMG_1666060235321.jpg",
              "/Assets/images/8929DA76-3E7C-4DE3-998B-C8760F29A90F.jpg",
              "/Assets/images/D05FAF1F-8E0F-4851-86D7-7FA3D7D12269.jpg",
              "/Assets/images/850B0975-B5B7-4858-8287-56C6E1FF9112.jpg",
              "/Assets/images/90c16596-fc2b-4c38-b770-5c8a242357b3.jpg",
              "/Assets/images/camera stage.jpg",
              "/Assets/images/Birth Party.jpg",
              "/Assets/images/cement_company.jpg",
              "/Assets/images/eid mahafil.jpg",
              "/Assets/images/holud setw.jpg",
              "/Assets/images/cake.jpg",
              "/Assets/images/Ful.jpg",
              "/Assets/images/tonni.jpg"
            ].map((src, i) => (
              <div
                key={i}
                className="gallery-item"
                style={{
                  overflow: "hidden",
                  borderRadius: "var(--radius-lg)",
                  border: "0.5px solid var(--border-subtle)",
                  transition: "border-color 0.3s ease",
                }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = "var(--gold-primary)")}
                onMouseLeave={e => (e.currentTarget.style.borderColor = "var(--border-subtle)")}
              >
                <img src={src} alt={`Event ${i + 1}`} style={{ width: "100%", height: 240, objectFit: "cover", display: "block" }} />
              </div>
            ))}
            <div style={{
              display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
              height: 240, borderRadius: "var(--radius-lg)",
              border: "1px dashed var(--border-subtle)", background: "var(--bg-surface)",
              color: "var(--text-muted)", fontSize: "0.875rem", gap: 8, textAlign: "center", padding: 24,
            }}>
              <span style={{ fontSize: 28, opacity: 0.4 }}>+</span>
              <span>{lang === "en" ? "More images coming soon" : "আরও ছবি আসছে শীঘ্রই"}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── VIDEO REELS ── */}
      <VideoReels />

      {/* ── CONTACT ── */}
      <section id="contact" style={{ backgroundColor: "var(--bg-elevated)", borderTop: "0.5px solid var(--border-subtle)" }}>
        <div className="section-pad section-inner" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 56 }}>
          {/* Info */}
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <div>
              <h4 style={{ color: "var(--gold-primary)", fontFamily: "'DM Sans', sans-serif", fontSize: 12, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 12 }}>
                {lang === "en" ? "Get in Touch" : "যোগাযোগ করুন"}
              </h4>
              <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", fontWeight: 600, color: "var(--text-primary)" }}>
                {t.contact.title}
              </h2>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {[
                { icon: <IconPin />, text: t.contact.address },
                { icon: <IconPhone />, text: t.contact.phone },
                { icon: <IconMail />, text: t.contact.email },
              ].map(({ icon, text }, i) => (
                <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start", color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: 1.6 }}>
                  <span style={{ color: "var(--gold-primary)", marginTop: 1 }}>{icon}</span>
                  <span>{text}</span>
                </div>
              ))}

              {/* Hours badge */}
              <div style={{ display: "inline-flex" }}>
                <span className="badge-success">
                  <IconClock />
                  {t.contact.hours}
                </span>
              </div>
            </div>

            {/* Facebook CTA */}
            <a
              href="https://www.facebook.com/profile.php?id=100085851484708"
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-flex", alignItems: "center", gap: 10,
                background: "rgba(24, 119, 242, 0.08)",
                border: "0.5px solid rgba(24, 119, 242, 0.25)",
                color: "#6BA3F5",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.875rem", fontWeight: 500,
                padding: "10px 18px", borderRadius: "var(--radius-md)",
                textDecoration: "none", width: "fit-content",
                transition: "background 0.2s ease",
              }}
              onMouseEnter={e => (e.currentTarget.style.background = "rgba(24,119,242,0.14)")}
              onMouseLeave={e => (e.currentTarget.style.background = "rgba(24,119,242,0.08)")}
            >
              <IconFacebook />
              {lang === "en" ? "Visit our Facebook page" : "আমাদের ফেসবুক পেজ দেখুন"}
            </a>
          </div>

          {/* Form + map */}
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <div style={{
              background: "var(--bg-surface)", border: "0.5px solid var(--border-subtle)",
              borderRadius: "var(--radius-xl)", padding: 75,
            }}>
              <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.05rem", fontWeight: 600, color: "var(--text-primary)", marginBottom: 20 }}>
                {lang === "en" ? "Send us a message" : "আমাদের একটি বার্তা পাঠান"}
              </h3>
              <form style={{ display: "flex", flexDirection: "column", gap: 12 }} onSubmit={(e) => e.preventDefault()}>
                <input className="input-field" type="text" placeholder={t.contact.formName} />
                <input className="input-field" type="email" placeholder={t.contact.formEmail} />
                <textarea
                  className="input-field"
                  placeholder={t.contact.formMessage}
                  rows={4}
                  style={{ resize: "vertical", fontFamily: "'DM Sans', sans-serif" }}
                />
                <button type="submit" className="btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                  {t.contact.formSubmit}
                </button>
              </form>
            </div>

            <div style={{
              width: "100%", 
              height: 220,
              borderRadius: "var(--radius-lg)", 
              overflow: "hidden",
              border: "0.5px solid var(--border-subtle)",
            }}>
              <iframe
                src="https://www.google.com/maps?q=Crystal+Community+Center,+Gobindaganj,+Bangladesh&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, display: "block" }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Crystal Community Center Location Map"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Customer Gallery */}
      <CustomerGallery />

      {/* ── FOOTER ── */}
      <footer style={{
        backgroundColor: "var(--bg-surface)",
        borderTop: `1px solid var(--gold-border)`,
      }}>
        <div
          className="section-inner"
          style={{
            padding: "40px 24px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 32,
            alignItems: "start",
          }}
        >
          {/* Brand */}
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1.2rem", fontWeight: 700, color: "var(--gold-primary)" }}>
              {lang === "en" ? "CRYSTAL" : "ক্রিস্টাল"}
            </div>
            <p style={{ color: "var(--text-muted)", fontSize: "0.825rem", lineHeight: 1.6, margin: 0 }}>
              {lang === "en" 
                ? "The perfect venue for your cherished moments in Gobindaganj."
                : "গোবিন্দগঞ্জে আপনার স্মরণীয় মুহূর্তগুলোর জন্য নিখুঁত স্থান।"}
            </p>
          </div>

          {/* Quick links */}
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: 4 }}>
              {lang === "en" ? "Navigate" : "নেভিগেট"}
            </div>
            {[
              { href: "#about", labelEn: "About", labelBn: "পরিচয়" },
              { href: "#programs", labelEn: "Programs", labelBn: "প্রোগ্রাম" },
              { href: "#facilities", labelEn: "Facilities", labelBn: "সুবিধা" },
              { href: "#gallery", labelEn: "Gallery", labelBn: "গ্যালারি" },
              { href: "#contact", labelEn: "Contact", labelBn: "যোগাযোগ" },
            ].map((item) => (
              <a 
                key={item.href} 
                href={item.href} 
                style={{ 
                  fontFamily: "'DM Sans', sans-serif", 
                  fontSize: "0.85rem", 
                  color: "var(--text-secondary)", 
                  textDecoration: "none", 
                  transition: "color 0.2s" 
                }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--gold-primary)")}
                onMouseLeave={e => (e.currentTarget.style.color = "var(--text-secondary)")}
              >
                {lang === "en" ? item.labelEn : item.labelBn}
              </a>
            ))}
          </div>

          {/* Contact */}
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: 4 }}>
              {lang === "en" ? "Contact" : "যোগাযোগ"}
            </div>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.85rem", lineHeight: 1.6, margin: 0 }}>
              {lang === "en" 
                ? "Opposite Side of PEKS Eye Hospital, Gobindaganj, Gobindaganj 5740, Gaibandha, Rangpur"
                : "পেক্স চক্ষু হাসপাতালের বিপরীত দিকে, গোবিন্দগঞ্জ, গোবিন্দগঞ্জ ৫৭৪০, গাইবান্ধা, রংপুর"}
            </p>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.85rem", margin: 0 }}>+880 1915-762486</p>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.85rem", margin: 0 }}>crystalcc2022@gmail.com</p>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: "0.5px solid var(--border-subtle)",
          padding: "16px 24px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 8,
        }}>
          <p style={{ color: "var(--text-muted)", fontSize: "0.8rem", margin: 0, textAlign: "center" }}>
            {lang === "en" 
              ? `© 2022 – ${new Date().getFullYear()} Crystal Community Center. Developed with Love for the Gobindaganj Community.`
              : `© ২০২২ – ${new Date().getFullYear()} ক্রিস্টাল কমিউনিটি সেন্টার। গোবিন্দগঞ্জ সম্প্রদায়ের জন্য ভালোবাসা দিয়ে তৈরি।`}
          </p>
        </div>
      </footer>
    </main>
  );
}
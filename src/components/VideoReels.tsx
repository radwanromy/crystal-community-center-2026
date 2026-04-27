"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { useAppContext } from "@/context/AppContext";

interface Video {
  id: string;
  src: string;
  thumbnail?: string;
  likes: number;
  views: number;
  title: string;
}

interface VideoReelsProps {
  videos?: Video[];
}

const defaultVideos: Video[] = [
  { id: "1", src: "/Assets/video/video03.mp4", 
    thumbnail: "/Assets/video/thum/v3.png", 
    likes: 1234, views: 12345, title: "Wedding Ceremony" },
  { id: "2", src: "/Assets/video/video01.mp4", thumbnail: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80&w=300", likes: 2345, views: 23456, title: "Corporate Event" },
  { id: "3", src: "/Assets/video/video02.mp4", thumbnail: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=300", likes: 3456, views: 34567, title: "Farewell party" },
  { id: "4", src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFunflies.mp4", thumbnail: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=300", likes: 3456, views: 34567, title: "Birthday Celebration" },
  { id: "5", src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4", thumbnail: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=300", likes: 4567, views: 45678, title: "Anniversary Party" },
  { id: "6", src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4", thumbnail: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&q=80&w=300", likes: 5678, views: 56789, title: "Conference" },
];

export default function VideoReels({ videos = defaultVideos }: VideoReelsProps) {
  const { lang } = useAppContext();
  const [activeIndex, setActiveIndex] = useState(0);
  const [playingStates, setPlayingStates] = useState<{ [key: string]: boolean }>({});
  const [likes, setLikes] = useState<{ [key: string]: number }>(() => {
    const initial: { [key: string]: number } = {};
    videos.forEach(v => { initial[v.id] = v.likes; });
    return initial;
  });
  const [isLiked, setIsLiked] = useState<{ [key: string]: boolean }>({});
  const [hoveredVideo, setHoveredVideo] = useState<string | null>(null);

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({});
  const isScrollingRef = useRef(false);

  const text = {
    title: lang === "en" ? "Video Reels" : "ভিডিও রিলস",
    subtitle: lang === "en" ? "Watch memorable moments from our events" : "আমাদের ইভেন্টের স্মরণীয় মুহূর্তগুলি দেখুন",
  };

  // Fixed Scroll Logic: Centers the clicked element perfectly
  const scrollToIndex = useCallback((index: number) => {
    if (index < 0 || index >= videos.length) return;

    const container = scrollContainerRef.current;
    const targetElement = container?.querySelector(`[data-id="${index}"]`);

    if (targetElement) {
      isScrollingRef.current = true;
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });

      setActiveIndex(index);

      setTimeout(() => {
        isScrollingRef.current = false;
      }, 500);
    }
  }, [videos.length]);

  // Audio & Playback Management
  useEffect(() => {
    Object.entries(videoRefs.current).forEach(([id, video]) => {
      if (!video) return;

      if (id === activeIndex.toString()) {
        video.muted = false; // Enable sound for the focused video
        video.play().catch(() => console.log("Autoplay blocked by browser"));
        setPlayingStates(prev => ({ ...prev, [id]: true }));
      } else {
        video.pause();
        video.muted = true; // Mute all background videos
        setPlayingStates(prev => ({ ...prev, [id]: false }));
      }
    });
  }, [activeIndex]);

  const handleVideoClick = (index: number) => {
    if (activeIndex !== index) {
      // If clicking a side video, move it to center (will trigger the useEffect above)
      scrollToIndex(index);
    } else {
      // If clicking the already centered video, toggle play/pause
      const video = videoRefs.current[index.toString()];
      if (video) {
        if (video.paused) {
          video.play();
          setPlayingStates(prev => ({ ...prev, [index]: true }));
        } else {
          video.pause();
          setPlayingStates(prev => ({ ...prev, [index]: false }));
        }
      }
    }
  };

  const toggleMute = (e: React.MouseEvent, index: number) => {
    e.stopPropagation();
    const video = videoRefs.current[index.toString()];
    if (video) {
      video.muted = !video.muted;
      // Force a re-render to update the icon
      setPlayingStates(prev => ({ ...prev }));
    }
  };

  const toggleLike = (e: React.MouseEvent, videoId: string) => {
    e.stopPropagation();
    setIsLiked(prev => ({ ...prev, [videoId]: !prev[videoId] }));
    setLikes(prev => ({ ...prev, [videoId]: prev[videoId] + (isLiked[videoId] ? -1 : 1) }));
  };

  return (
    <section style={{ padding: "60px 0", backgroundColor: "var(--bg-base)", borderTop: "0.5px solid var(--border-subtle)", overflow: "hidden" }}>
      <div style={{ maxWidth: "100%", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 40, padding: "0 24px" }}>
          <h4 style={{ color: "var(--gold-primary)", fontSize: 12, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 12 }}>{lang === "en" ? "Moments in Motion" : "কিশু মুহূর্ত"}</h4>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", color: "var(--text-primary)", marginBottom: 12 }}>{text.title}</h2>
          <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", maxWidth: 480, margin: "0 auto" }}>{text.subtitle}</p>
        </div>

        <div style={{ position: "relative" }}>
          {/* Navigation Arrows */}
          <button onClick={() => scrollToIndex(activeIndex - 1)} style={{ position: "absolute", left: 20, top: "50%", transform: "translateY(-50%)", zIndex: 20, width: 45, height: 45, borderRadius: "50%", backgroundColor: "rgba(0,0,0,0.6)", border: "1px solid var(--gold-primary)", color: "white", cursor: "pointer", display: activeIndex === 0 ? "none" : "flex", alignItems: "center", justifyContent: "center", backdropFilter: "blur(4px)" }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="15 18 9 12 15 6" /></svg>
          </button>

          <button onClick={() => scrollToIndex(activeIndex + 1)} style={{ position: "absolute", right: 20, top: "50%", transform: "translateY(-50%)", zIndex: 20, width: 45, height: 45, borderRadius: "50%", backgroundColor: "rgba(0,0,0,0.6)", border: "1px solid var(--gold-primary)", color: "white", cursor: "pointer", display: activeIndex === videos.length - 1 ? "none" : "flex", alignItems: "center", justifyContent: "center", backdropFilter: "blur(4px)" }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6" /></svg>
          </button>

          {/* Carousel */}
          <div
            ref={scrollContainerRef}
            style={{
              display: "flex",
              overflowX: "auto",
              scrollSnapType: "x mandatory",
              gap: 20,
              padding: "20px 20%",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              alignItems: "center"
            }}
            className="no-scrollbar"
          >
            {videos.map((video, index) => {
              const isActive = activeIndex === index;
              return (
                <div
                  key={video.id}
                  data-id={index}
                  onClick={() => handleVideoClick(index)}
                  style={{
                    flex: "0 0 75%",
                    maxWidth: 320,
                    scrollSnapAlign: "center",
                    transition: "all 0.6s cubic-bezier(0.23, 1, 0.32, 1)",
                    transform: isActive ? "scale(1.1)" : "scale(0.85)",
                    opacity: isActive ? 1 : 0.4,
                    zIndex: isActive ? 10 : 1,
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      aspectRatio: "9/16",
                      borderRadius: 24,
                      overflow: "hidden",
                      boxShadow: isActive ? "0 25px 50px -12px rgba(0, 0, 0, 0.7)" : "none",
                      backgroundColor: "#000",
                      cursor: "pointer"
                    }}
                    onMouseEnter={() => setHoveredVideo(video.id)}
                    onMouseLeave={() => setHoveredVideo(null)}
                  >
                    <video
                      ref={el => { videoRefs.current[index.toString()] = el; }}
                      src={video.src}
                      poster={video.thumbnail}
                      loop
                      playsInline
                      muted={!isActive}
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />

                    {/* Gradient Overlay */}
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 40%, rgba(0,0,0,0.3) 100%)", pointerEvents: "none" }} />

                    {/* Header Label */}
                    <div style={{ position: "absolute", top: 16, left: 16, right: 16, display: "flex", justifyContent: "space-between", pointerEvents: "none" }}>
                      <span style={{ backgroundColor: "rgba(0,0,0,0.6)", backdropFilter: "blur(8px)", padding: "5px 12px", borderRadius: 20, fontSize: 11, fontWeight: 600, color: "var(--gold-primary)", border: "0.5px solid rgba(255,255,255,0.1)" }}>
                        {video.title}
                      </span>
                    </div>

                    {/* Play Button UI */}
                    <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", opacity: (hoveredVideo === video.id || !playingStates[index]) && isActive ? 1 : 0, transition: "opacity 0.3s" }}>
                      <div style={{ width: 60, height: 60, borderRadius: "50%", backgroundColor: "rgba(0,0,0,0.4)", backdropFilter: "blur(4px)", border: "2px solid var(--gold-primary)", display: "flex", alignItems: "center", justifyContent: "center", color: "white" }}>
                        {playingStates[index] ?
                          <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M6 4h4v16H6zm8 0h4v16h-4z" /></svg> :
                          <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" style={{ marginLeft: 4 }}><path d="M8 5v14l11-7z" /></svg>
                        }
                      </div>
                    </div>

                    {/* Bottom Actions */}
                    <div style={{ position: "absolute", bottom: 16, left: 16, right: 16, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <button
                        onClick={(e) => toggleLike(e, video.id)}
                        style={{ background: "rgba(255,255,255,0.15)", backdropFilter: "blur(12px)", border: "none", color: isLiked[video.id] ? "#ff4b2b" : "white", padding: "6px 14px", borderRadius: 20, fontSize: 13, fontWeight: 600, cursor: "pointer", display: "flex", alignItems: "center", gap: 6, transition: "transform 0.2s" }}
                        onMouseEnter={e => e.currentTarget.style.transform = "scale(1.05)"}
                        onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
                      >
                        {isLiked[video.id] ? "❤️" : "🤍"} {(video.likes + (isLiked[video.id] ? 1 : 0)).toLocaleString()}
                      </button>

                      <button onClick={(e) => toggleMute(e, index)} style={{ background: "rgba(0,0,0,0.4)", border: "none", color: "white", width: 36, height: 36, borderRadius: "50%", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        {videoRefs.current[index]?.muted ? "🔇" : "🔊"}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Pagination Dots */}
        <div style={{ display: "flex", justifyContent: "center", gap: 10, marginTop: 30 }}>
          {videos.map((_, i) => (
            <div
              key={i}
              onClick={() => scrollToIndex(i)}
              style={{
                width: activeIndex === i ? 30 : 10,
                height: 6,
                borderRadius: 3,
                backgroundColor: activeIndex === i ? "var(--gold-primary)" : "rgba(255,255,255,0.2)",
                transition: "all 0.4s ease",
                cursor: "pointer"
              }}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -webkit-overflow-scrolling: touch; }
      `}</style>
    </section>
  );
}
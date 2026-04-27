"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import en from "../locales/en.json";
import bn from "../locales/bn.json";

type Language = "en" | "bn";

interface AppContextType {
  lang: Language;
  toggleLang: () => void;
  t: typeof en;
  isTTSEnabled: boolean;
  toggleTTS: () => void;
  speak: (text: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Language>("bn");
  const [isTTSEnabled, setIsTTSEnabled] = useState(false);
  const [t, setT] = useState(en);

  useEffect(() => {
    setT(lang === "en" ? en : bn);
    if (typeof window !== "undefined") window.speechSynthesis.cancel();
  }, [lang]);

  const toggleLang = () => setLang((prev) => (prev === "en" ? "bn" : "en"));
  const toggleTTS = () => {
    setIsTTSEnabled(!isTTSEnabled);
    if (typeof window !== "undefined") window.speechSynthesis.cancel();
  };

  const speak = (text: string) => {
    if (!isTTSEnabled || typeof window === "undefined" || !window.speechSynthesis) return;

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang === "en" ? "en-US" : "bn-BD";
    
    const voices = window.speechSynthesis.getVoices();
    const voice = voices.find((v) => v.lang.includes(lang === "en" ? "en" : "bn"));
    if (voice) utterance.voice = voice;

    window.speechSynthesis.speak(utterance);
  };

  return (
    <AppContext.Provider value={{ lang, toggleLang, t, isTTSEnabled, toggleTTS, speak }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error("useAppContext must be used within an AppProvider");
  return context;
};
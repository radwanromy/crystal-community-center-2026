"use client";

import React from "react";
import { useAppContext } from "@/context/AppContext";

interface HoverReaderProps {
  text: string;
  children: React.ReactNode;
  className?: string;
}

export default function HoverReader({ text, children, className = "" }: HoverReaderProps) {
  const { speak } = useAppContext();

  return (
    <span
      className={`contents ${className}`}
      onMouseEnter={() => speak(text)}
      onFocus={() => speak(text)}
      tabIndex={-1}
      aria-label={text}
    >
      {children}
    </span>
  );
}

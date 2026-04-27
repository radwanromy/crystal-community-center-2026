// components/CustomerGallery.tsx
"use client";

import React, { useState, useRef } from "react";
import { useAppContext } from "@/context/AppContext";

interface GalleryImage {
  id: string;
  preview: string;
  title: string;
  description: string;
  likes: number;
  isLiked: boolean;
  uploadDate: Date;
}

export default function CustomerGallery() {
  const { lang, t } = useAppContext();
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Get translated text based on language
  const galleryText = {
    title: lang === "en" ? "📸 Customer Gallery" : "📸 গ্রাহক গ্যালারি",
    subtitle: lang === "en" 
      ? "Share your memories from Crystal Community Center" 
      : "ক্রিস্টাল কমিউনিটি সেন্টার থেকে আপনার স্মৃতি শেয়ার করুন",
    dragDrop: lang === "en" ? "Drag & drop or click to upload" : "টেনে আনুন বা আপলোড করতে ক্লিক করুন",
    formats: lang === "en" ? "JPG, JPEG, PNG • Max 5MB" : "JPG, JPEG, PNG • সর্বোচ্চ ৫MB",
    moderation: lang === "en" 
      ? "🛡️ Images will be reviewed before publishing" 
      : "🛡️ প্রকাশের আগে ছবিগুলো পর্যালোচনা করা হবে",
    noPhotos: lang === "en" 
      ? "No photos yet. Be the first to share!" 
      : "কোনো ছবি নেই। প্রথম হন আপনার স্মৃতি শেয়ার করতে!",
    titlePlaceholder: lang === "en" ? "Title (optional)" : "শিরোনাম (ঐচ্ছিক)",
    descriptionPlaceholder: lang === "en" ? "Description (optional)" : "বিবরণ (ঐচ্ছিক)",
    remove: lang === "en" ? "Remove" : "সরান",
  };

  const validateFile = (file: File): boolean => {
    const validTypes = ["image/jpeg", "image/jpg", "image/png"];
    const maxSize = 5 * 1024 * 1024;
    if (!validTypes.includes(file.type)) {
      alert(lang === "en" ? "Please upload JPG, JPEG, or PNG files only." : "শুধুমাত্র JPG, JPEG বা PNG ফাইল আপলোড করুন।");
      return false;
    }
    if (file.size > maxSize) {
      alert(lang === "en" ? "File size must be less than 5MB." : "ফাইলের আকার ৫MB এর কম হতে হবে।");
      return false;
    }
    return true;
  };

  const processFiles = (files: FileList) => {
    const fileArray = Array.from(files);
    const newImages: GalleryImage[] = [];

    for (const file of fileArray) {
      if (!validateFile(file)) continue;
      
      const preview = URL.createObjectURL(file);
      newImages.push({
        id: Date.now() + Math.random().toString(36),
        preview,
        title: "",
        description: "",
        likes: 0,
        isLiked: false,
        uploadDate: new Date(),
      });
    }

    setImages((prev) => [...newImages, ...prev]);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files.length) {
      processFiles(e.dataTransfer.files);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length) {
      processFiles(e.target.files);
      e.target.value = "";
    }
  };

  const updateTitle = (id: string, title: string) => {
    setImages((prev) => prev.map((img) => img.id === id ? { ...img, title } : img));
  };

  const updateDescription = (id: string, description: string) => {
    setImages((prev) => prev.map((img) => img.id === id ? { ...img, description } : img));
  };

  const toggleLike = (id: string) => {
    setImages((prev) =>
      prev.map((img) =>
        img.id === id
          ? { ...img, likes: img.isLiked ? img.likes - 1 : img.likes + 1, isLiked: !img.isLiked }
          : img
      )
    );
  };

  const removeImage = (id: string) => {
    const img = images.find((i) => i.id === id);
    if (img?.preview) URL.revokeObjectURL(img.preview);
    setImages((prev) => prev.filter((img) => img.id !== id));
  };

  return (
    <section style={{ padding: "48px 16px", backgroundColor: "var(--bg-base)", borderTop: "0.5px solid var(--border-subtle)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <h2 style={{ fontSize: "1.75rem", fontWeight: "bold", color: "#eab308", marginBottom: 8 }}>
            {galleryText.title}
          </h2>
          <p style={{ color: "#9ca3af", fontSize: "0.875rem" }}>
            {galleryText.subtitle}
          </p>
        </div>

        {/* Upload Area */}
        <div
          onClick={() => fileInputRef.current?.click()}
          onDrop={handleDrop}
          onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
          onDragLeave={() => setIsDragging(false)}
          style={{
            border: `2px dashed ${isDragging ? "#eab308" : "#4b5563"}`,
            borderRadius: 12,
            padding: "24px",
            textAlign: "center",
            cursor: "pointer",
            backgroundColor: isDragging ? "rgba(234,179,8,0.05)" : "transparent",
            transition: "all 0.2s",
            marginBottom: 24,
          }}
        >
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileSelect}
            accept="image/jpeg,image/jpg,image/png"
            multiple
            style={{ display: "none" }}
          />
          <div style={{ fontSize: 32, marginBottom: 8 }}>📷</div>
          <p style={{ color: "#d1d5db", fontSize: "0.875rem", marginBottom: 4 }}>
            {galleryText.dragDrop}
          </p>
          <p style={{ color: "#6b7280", fontSize: "0.7rem" }}>
            {galleryText.formats}
          </p>
        </div>

        {/* Moderation Note */}
        <div style={{
          backgroundColor: "rgba(234,179,8,0.05)",
          border: "1px solid rgba(234,179,8,0.2)",
          borderRadius: 8,
          padding: "8px",
          textAlign: "center",
          marginBottom: 32,
        }}>
          <p style={{ color: "#eab308", fontSize: "0.7rem" }}>
            {galleryText.moderation}
          </p>
        </div>

        {/* Gallery Grid */}
        {images.length === 0 ? (
          <div style={{
            textAlign: "center",
            padding: "48px",
            backgroundColor: "rgba(0,0,0,0.3)",
            borderRadius: 12,
          }}>
            <p style={{ color: "#6b7280", fontSize: "0.875rem" }}>{galleryText.noPhotos}</p>
          </div>
        ) : (
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            gap: 16,
          }}>
            {images.map((image) => (
              <div
                key={image.id}
                style={{
                  backgroundColor: "#1f2937",
                  borderRadius: 8,
                  overflow: "hidden",
                  border: "1px solid #374151",
                }}
              >
                {/* Image */}
                <div style={{ aspectRatio: "1/1", overflow: "hidden", backgroundColor: "#111827" }}>
                  <img
                    src={image.preview}
                    alt={image.title || "Gallery"}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.3s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                  />
                </div>

                {/* Details */}
                <div style={{ padding: 10 }}>
                  <input
                    type="text"
                    value={image.title}
                    onChange={(e) => updateTitle(image.id, e.target.value)}
                    placeholder={galleryText.titlePlaceholder}
                    style={{
                      width: "100%",
                      backgroundColor: "#111827",
                      color: "white",
                      border: "1px solid #374151",
                      borderRadius: 4,
                      padding: "4px 8px",
                      fontSize: "0.75rem",
                      marginBottom: 8,
                    }}
                  />
                  <textarea
                    value={image.description}
                    onChange={(e) => updateDescription(image.id, e.target.value)}
                    placeholder={galleryText.descriptionPlaceholder}
                    rows={2}
                    style={{
                      width: "100%",
                      backgroundColor: "#111827",
                      color: "#9ca3af",
                      border: "1px solid #374151",
                      borderRadius: 4,
                      padding: "4px 8px",
                      fontSize: "0.7rem",
                      resize: "vertical",
                      marginBottom: 8,
                    }}
                  />
                  
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <button
                      onClick={() => toggleLike(image.id)}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 4,
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        color: image.isLiked ? "#ef4444" : "#9ca3af",
                        fontSize: "0.75rem",
                      }}
                    >
                      <span>{image.isLiked ? "❤️" : "🤍"}</span>
                      <span>{image.likes}</span>
                    </button>
                    
                    <button
                      onClick={() => removeImage(image.id)}
                      style={{
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        color: "#6b7280",
                        fontSize: "0.75rem",
                        display: "flex",
                        alignItems: "center",
                        gap: 4,
                      }}
                    >
                      ✕ <span style={{ fontSize: "0.65rem" }}>{galleryText.remove}</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
// app/translations/index.ts
export interface Translations {
  nav: {
    home: string;
    about: string;
    programs: string;
    facilities: string;
    gallery: string;
    contact: string;
    ttsOn: string;
    ttsOff: string;
  };
  hero: {
    title: string;
    subtitle: string;
    mission: string;
    cta1: string;
    cta2: string;
  };
  about: {
    title: string;
    history: string;
    owner: string;
  };
  programs: {
    title: string;
    wedding: string;
    weddingDesc: string;
    meeting: string;
    meetingDesc: string;
    conference: string;
    conferenceDesc: string;
    celebration: string;
    celebrationDesc: string;
  };
  facilities: {
    title: string;
    auditorium: string;
    rooftop: string;
    prayer: string;
    cafeteria: string;
    cooking: string;
    layout: string;
    washrooms: string;
    extras: string;
  };
  gallery: {
    title: string;
    subtitle: string;
  };
  contact: {
    title: string;
    address: string;
    phone: string;
    email: string;
    hours: string;
    formName: string;
    formEmail: string;
    formMessage: string;
    formSubmit: string;
  };
}

const en: Translations = {
  nav: {
    home: "Home",
    about: "About",
    programs: "Programs",
    facilities: "Facilities",
    gallery: "Gallery",
    contact: "Contact",
    ttsOn: "🔊 Turn Off Reading",
    ttsOff: "🔈 Read on Hover",
  },
  hero: {
    title: "Crystal Community Center",
    subtitle: "The Perfect Venue for Your Cherished Moments",
    mission: "Established in 2022, we provide premium facilities for weddings, meetings, and celebrations in the heart of Gobindaganj.",
    cta1: "View Facilities",
    cta2: "Book Now",
  },
  about: {
    title: "About Us",
    history: "Founded in 2022 by Abu Fattab Shah Md Eleas, Crystal Community Center has successfully hosted over 100+ events. Our mission is to provide an elegant, hassle-free environment for all your special occasions.",
    owner: "Abu Fattab Shah Md Eleas (Owner, Former Sub-Assistant Agriculture Officer)",
  },
  programs: {
    title: "Programs & Services",
    wedding: "Weddings",
    weddingDesc: "Complete wedding venue services with customizable decoration.",
    meeting: "Meetings",
    meetingDesc: "Professional setups for corporate meetings and seminars.",
    conference: "Conferences",
    conferenceDesc: "Large scale conference facilities with audio-visual support.",
    celebration: "Celebrations",
    celebrationDesc: "Birthdays, anniversaries, and special milestone events.",
  },
  facilities: {
    title: "Our Facilities",
    auditorium: "Main Auditorium (350 Seats)",
    rooftop: "Spacious Rooftop Area",
    prayer: "Masjid (In front of center)",
    cafeteria: "Crystal Cafe (Coffee & Juice Vending)",
    cooking: "Large Cooking Space (3 Burners + Washing area)",
    layout: "3rd Floor: Main Hall, Stages, Reception. 4th Floor: Rooftop, Cooking.",
    washrooms: "4 Washrooms (2 on 3rd floor, 2 on 4th floor)",
    extras: "Ample Storage, Large Utensils included. Decoration available.",
  },
  gallery: {
    title: "Photo Gallery",
    subtitle: "Glimpses of our successful events and beautiful setups.",
  },
  contact: {
    title: "Contact Us",
    address: "Gobindaganj- 5740, District: Gaibandha, Division: Rangpur, Bangladesh",
    phone: "+880 1915-762486 / +880 1797-944561",
    email: "crystalcc2022@gmail.com",
    hours: "Opening Hours: 24/7",
    formName: "Name",
    formEmail: "Email",
    formMessage: "Message",
    formSubmit: "Send Message",
  },
};

const bn: Translations = {
  nav: {
    home: "হোম",
    about: "আমাদের সম্পর্কে",
    programs: "প্রোগ্রাম",
    facilities: "সুবিধাসমূহ",
    gallery: "গ্যালারি",
    contact: "যোগাযোগ",
    ttsOn: "🔊 পড়া বন্ধ করুন",
    ttsOff: "🔈 হোভার করলে পড়বে",
  },
  hero: {
    title: "ক্রিস্টাল কমিউনিটি সেন্টার",
    subtitle: "আপনার স্মরণীয় মুহূর্তগুলোর জন্য নিখুঁত স্থান",
    mission: "২০২২ সালে প্রতিষ্ঠিত, আমরা গোবিন্দগঞ্জের কেন্দ্রস্থলে বিবাহ, মিটিং এবং উদযাপনের জন্য প্রিমিয়াম সুবিধা প্রদান করি।",
    cta1: "সুবিধাসমূহ দেখুন",
    cta2: "বুকিং করুন",
  },
  about: {
    title: "আমাদের সম্পর্কে",
    history: "আবু ফাত্তাব শাহ মোঃ ইলিয়াস কর্তৃক ২০২২ সালে প্রতিষ্ঠিত, ক্রিস্টাল কমিউনিটি সেন্টার সফলভাবে ১০০টিরও বেশি ইভেন্ট আয়োজন করেছে। আমাদের লক্ষ্য হলো আপনার সমস্ত বিশেষ অনুষ্ঠানের জন্য একটি মার্জিত এবং ঝামেলামুক্ত পরিবেশ প্রদান করা।",
    owner: "আবু ফাত্তাব শাহ মোঃ ইলিয়াস (মালিক, প্রাক্তন উপ-সহকারী কৃষি কর্মকর্তা)",
  },
  programs: {
    title: "প্রোগ্রাম ও সেবাসমূহ",
    wedding: "বিবাহ",
    weddingDesc: "কাস্টমাইজযোগ্য ডেকোরেশন সহ সম্পূর্ণ বিবাহের ভেন্যু পরিষেবা।",
    meeting: "মিটিং",
    meetingDesc: "কর্পোরেট মিটিং এবং সেমিনারের জন্য পেশাদার ব্যবস্থা।",
    conference: "সম্মেলন",
    conferenceDesc: "অডিও-ভিজুয়াল সাপোর্ট সহ বড় আকারের কনফারেন্স সুবিধা।",
    celebration: "উদযাপন",
    celebrationDesc: "জন্মদিন, বার্ষিকী এবং বিশেষ ইভেন্ট।",
  },
  facilities: {
    title: "আমাদের সুবিধাসমূহ",
    auditorium: "প্রধান অডিটোরিয়াম (৩৫০ আসন)",
    rooftop: "প্রশস্ত ছাদ (Rooftop)",
    prayer: "মসজিদ (সেন্টারের সামনে)",
    cafeteria: "ক্রিস্টাল ক্যাফে (কফি এবং জুস ভেন্ডিং)",
    cooking: "বিশাল রান্নার জায়গা (৩টি বার্নার + ধোয়ার জায়গা)",
    layout: "৩য় তলা: মেইন হল, স্টেজ, রিসেপশন। ৪র্থ তলা: ছাদ, রান্নার জায়গা।",
    washrooms: "৪টি ওয়াশরুম (৩য় তলায় ২টি, ৪র্থ তলায় ২টি)",
    extras: "পর্যাপ্ত স্টোরেজ, বড় রান্নার পাত্র অন্তর্ভুক্ত। ডেকোরেশন সুবিধা আছে।",
  },
  gallery: {
    title: "ফটো গ্যালারি",
    subtitle: "আমাদের সফল ইভেন্ট এবং সুন্দর আয়োজনের কিছু মুহূর্ত।",
  },
  contact: {
    title: "যোগাযোগ করুন",
    address: "গোবিন্দগঞ্জ- ৫৭৪০, জেলা: গাইবান্ধা, বিভাগ: রংপুর, বাংলাদেশ",
    phone: "+৮৮০ ১৯১৫-৭৬২৪৮৬ / +৮৮০ ১৭৯৭-৯৪৪৫৬১",
    email: "crystalcc2022@gmail.com",
    hours: "খোলার সময়: ২৪/৭",
    formName: "নাম",
    formEmail: "ইমেইল",
    formMessage: "বার্তা",
    formSubmit: "বার্তা পাঠান",
  },
};

export default { en, bn };
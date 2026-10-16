"use client";
import { useAppContext } from "@/context/AppContext";
import { venue } from "@/lib/venue";
const faqs = [
  ["Where is the venue?", "ভেন্যুটি কোথায়?", venue.addressEn, venue.addressBn],
  ["How many guests can the auditorium seat?", "অডিটোরিয়ামে কতজন বসতে পারেন?", "The third-floor main auditorium seats 350 guests. Discuss your event layout with us; this is not the building occupancy limit.", "তৃতীয় তলার প্রধান অডিটোরিয়ামে ৩৫০ জন অতিথির বসার ব্যবস্থা রয়েছে। আপনার অনুষ্ঠানের আসনবিন্যাস নিয়ে আমাদের সঙ্গে আলোচনা করুন। এটি পুরো ভবনের সর্বোচ্চ ধারণক্ষমতা নয়।"],
  ["Is the auditorium air-conditioned?", "অডিটোরিয়ামে কি এসি আছে?", "Yes, the main auditorium is air-conditioned.", "হ্যাঁ, প্রধান অডিটোরিয়াম শীতাতপনিয়ন্ত্রিত।"],
  ["Can we arrange weddings, Halud and Mehendi?", "বিয়ে, গায়ে হলুদ ও মেহেদির আয়োজন করা যাবে?", "Yes. Weddings, Gaye Holud, Mehendi, receptions, engagements and family celebrations can be arranged. Call to discuss your date and requirements.", "হ্যাঁ। বিয়ে, গায়ে হলুদ, মেহেদি, বউভাত, বাগদান ও পারিবারিক অনুষ্ঠানের আয়োজন করা যায়। তারিখ ও প্রয়োজনীয় ব্যবস্থা নিয়ে ফোনে আলোচনা করুন।"],
  ["Are parking and kitchen facilities available?", "পার্কিং ও রান্নাঘর আছে?", "Car parking and a three-burner commercial kitchen are available. Confirm arrangements for your event when booking.", "গাড়ি রাখার ব্যবস্থা ও তিন বার্নারের বাণিজ্যিক রান্নাঘর রয়েছে। বুকিংয়ের সময় আপনার অনুষ্ঠানের জন্য প্রয়োজনীয় ব্যবস্থা নিশ্চিত করুন।"],
  ["How can I book?", "কীভাবে বুকিং করব?", "Call +880 1915-762486 or +880 1797-944561, or email crystalcc2022@gmail.com. Share your date, event type and guest count to check availability and terms.", "+880 1915-762486 বা +880 1797-944561 নম্বরে ফোন করুন, অথবা crystalcc2022@gmail.com ঠিকানায় ইমেইল করুন। তারিখ, অনুষ্ঠানের ধরন ও অতিথির সংখ্যা জানিয়ে খালি তারিখ ও শর্তাবলি জেনে নিন।"],
];
export default function LocalDetails() {
  const { lang } = useAppContext(); const en = lang === "en";
  return <div className="section-pad section-inner">
    <section id="cafe" style={{ marginBottom: 40 }}><h2>{en ? "Crystal Cafe" : "ক্রিস্টাল ক্যাফে"}</h2><p>{en ? "Our on-site Crystal Cafe complements your visit to Crystal Community Center in Gobindaganj. Contact us about cafe availability for your event." : "গোবিন্দগঞ্জের ক্রিস্টাল কমিউনিটি সেন্টারে রয়েছে ক্রিস্টাল ক্যাফে। আপনার অনুষ্ঠানের সময় ক্যাফের সেবা সম্পর্কে জানতে আমাদের সঙ্গে যোগাযোগ করুন।"}</p></section>
    <section id="location" style={{ marginBottom: 40 }}><h2>{en ? "Location and directions" : "অবস্থান ও পথনির্দেশ"}</h2><p>{en ? venue.addressEn : venue.addressBn}</p><a className="btn-outline" href={venue.directions}>{en ? "Get directions" : "গুগল ম্যাপে পথ দেখুন"}</a></section>
    <section id="faq"><h2>{en ? "Frequently asked questions" : "সচরাচর জিজ্ঞাসা"}</h2>{faqs.map(([qEn,qBn,aEn,aBn])=><details key={qEn} style={{ padding: "16px 0", borderBottom: "1px solid var(--border-subtle)" }}><summary style={{ cursor: "pointer", fontWeight: 600 }}>{en ? qEn : qBn}</summary><p>{en ? aEn : aBn}</p></details>)}</section>
  </div>;
}

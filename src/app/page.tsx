"use client";

import Navbar from "@/components/Navbar";
import HoverReader from "@/components/HoverReader";
import { useAppContext } from "@/context/AppContext";

export default function Home() {
  const { t } = useAppContext();

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* HERO SECTION */}
      <section id="home" className="relative h-screen flex items-center justify-center text-center bg-gradient-to-b from-black via-gray-900 to-black px-4">
        {/* Abstract pattern placeholder - replace URL with actual hero image if desired */}
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80')] bg-cover bg-center" />
        
        <div className="relative z-10 max-w-4xl mx-auto space-y-6">
          <HoverReader text={t.hero.title}>
            <h1 className="text-5xl md:text-7xl font-extrabold text-yellow-500 font-serif drop-shadow-lg">
              {t.hero.title}
            </h1>
          </HoverReader>
          <HoverReader text={t.hero.subtitle}>
            <p className="text-xl md:text-3xl font-light text-gray-300">{t.hero.subtitle}</p>
          </HoverReader>
          <HoverReader text={t.hero.mission}>
            <p className="max-w-2xl mx-auto text-gray-400 mt-4">{t.hero.mission}</p>
          </HoverReader>
          <div className="mt-8 flex justify-center gap-4">
            <HoverReader text={t.hero.cta1}>
              <a href="#facilities" className="bg-yellow-600 text-black px-8 py-3 rounded font-bold hover:bg-yellow-500 transition">
                {t.hero.cta1}
              </a>
            </HoverReader>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-20 bg-black px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <HoverReader text={t.about.title}>
              <h2 className="text-4xl font-bold text-yellow-500 border-b-2 border-yellow-800 pb-2 inline-block">{t.about.title}</h2>
            </HoverReader>
            <HoverReader text={t.about.history}>
              <p className="text-gray-300 leading-relaxed text-lg">{t.about.history}</p>
            </HoverReader>
            <HoverReader text={t.about.owner}>
              <p className="text-yellow-600 font-semibold">{t.about.owner}</p>
            </HoverReader>
          </div>
          <div className="bg-gray-900 border border-yellow-700 h-80 rounded-lg flex items-center justify-center overflow-hidden relative shadow-[0_0_15px_rgba(202,138,4,0.3)]">
             <img src="/logo.jpg" alt="Crystal Community Center" className="object-contain h-full w-full opacity-80 p-4" />
          </div>
        </div>
      </section>

      {/* PROGRAMS SECTION */}
      <section id="programs" className="py-20 bg-gray-900 px-4">
        <div className="max-w-7xl mx-auto">
          <HoverReader text={t.programs.title}>
            <h2 className="text-4xl font-bold text-yellow-500 text-center mb-12">{t.programs.title}</h2>
          </HoverReader>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {['wedding', 'meeting', 'conference', 'celebration'].map((prog) => (
              <HoverReader key={prog} text={`${t.programs[prog as keyof typeof t.programs]} - ${t.programs[`${prog}Desc` as keyof typeof t.programs]}`}>
                <div className="bg-black border border-gray-800 p-6 rounded-xl hover:border-yellow-600 transition duration-300 h-full">
                  <h3 className="text-2xl font-semibold text-white mb-3">{t.programs[prog as keyof typeof t.programs]}</h3>
                  <p className="text-gray-400">{t.programs[`${prog}Desc` as keyof typeof t.programs]}</p>
                </div>
              </HoverReader>
            ))}
          </div>
        </div>
      </section>

      {/* FACILITIES SECTION */}
      <section id="facilities" className="py-20 bg-black px-4">
        <div className="max-w-7xl mx-auto">
          <HoverReader text={t.facilities.title}>
            <h2 className="text-4xl font-bold text-yellow-500 text-center mb-12">{t.facilities.title}</h2>
          </HoverReader>
          <div className="grid md:grid-cols-3 gap-8">
            {['auditorium', 'rooftop', 'prayer', 'cafeteria', 'cooking', 'layout', 'washrooms', 'extras'].map((fac) => (
              <HoverReader key={fac} text={t.facilities[fac as keyof typeof t.facilities]}>
                <div className="flex items-start space-x-3 bg-gray-900 p-4 rounded shadow-lg border-l-4 border-yellow-600 h-full">
                  <span className="text-yellow-500 text-xl">✦</span>
                  <p className="text-gray-200">{t.facilities[fac as keyof typeof t.facilities]}</p>
                </div>
              </HoverReader>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section id="gallery" className="py-20 bg-gray-900 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <HoverReader text={t.gallery.title}>
            <h2 className="text-4xl font-bold text-yellow-500 mb-4">{t.gallery.title}</h2>
          </HoverReader>
          <HoverReader text={t.gallery.subtitle}>
            <p className="text-gray-400 mb-12 max-w-2xl mx-auto">{t.gallery.subtitle}</p>
          </HoverReader>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Gallery Images using Unsplash placeholders relevant to events */}
            <div className="overflow-hidden rounded-lg border-2 border-yellow-800/50 hover:border-yellow-500 transition duration-300 group">
              <img src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80" alt="Event Setup 1" className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"/>
            </div>
            <div className="overflow-hidden rounded-lg border-2 border-yellow-800/50 hover:border-yellow-500 transition duration-300 group">
              <img src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80" alt="Event Setup 2" className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"/>
            </div>
            <div className="flex items-center justify-center bg-black h-64 rounded-lg border-2 border-dashed border-gray-700 text-gray-500">
              More Images Coming Soon
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION & MAP */}
      <section id="contact" className="py-20 bg-black px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Info Side */}
          <div className="space-y-6">
            <HoverReader text={t.contact.title}>
              <h2 className="text-4xl font-bold text-yellow-500">{t.contact.title}</h2>
            </HoverReader>
            <HoverReader text={t.contact.address}><p className="text-gray-300">📍 {t.contact.address}</p></HoverReader>
            <HoverReader text={t.contact.phone}><p className="text-gray-300">📞 {t.contact.phone}</p></HoverReader>
            <HoverReader text={t.contact.email}><p className="text-gray-300">✉️ {t.contact.email}</p></HoverReader>
            <HoverReader text={t.contact.hours}><p className="text-green-500 font-bold">⏰ {t.contact.hours}</p></HoverReader>
            
            <a href="https://www.facebook.com/profile.php?id=100085851484708" target="_blank" rel="noreferrer" className="inline-block mt-4 text-yellow-500 hover:text-white border border-yellow-500 px-6 py-2 rounded transition">
               Visit Our Facebook Page
            </a>
          </div>

          {/* Form and Map Side */}
          <div className="flex flex-col gap-8">
            <div className="bg-gray-900 p-8 rounded border border-gray-800 shadow-xl">
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <input type="text" placeholder={t.contact.formName} className="w-full bg-black text-white p-3 rounded border border-gray-700 focus:border-yellow-500 outline-none transition"/>
                <input type="email" placeholder={t.contact.formEmail} className="w-full bg-black text-white p-3 rounded border border-gray-700 focus:border-yellow-500 outline-none transition"/>
                <textarea placeholder={t.contact.formMessage} rows={4} className="w-full bg-black text-white p-3 rounded border border-gray-700 focus:border-yellow-500 outline-none transition"></textarea>
                <button className="w-full bg-yellow-600 text-black font-bold py-3 rounded hover:bg-yellow-500 transition">{t.contact.formSubmit}</button>
              </form>
            </div>

            {/* General Map Embed for Gobindaganj */}
            <div className="w-full h-64 bg-gray-800 rounded overflow-hidden border border-gray-700">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57540.35338101419!2d89.3563994!3d25.1384067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fcd42d54e58b1f%3A0xb35a96323cf100cb!2sGobindaganj%2C%20Bangladesh!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Location Map"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-center py-8 border-t border-yellow-800 text-gray-500 text-sm">
        <p className="mb-2">© 2022 - {new Date().getFullYear()} Crystal Community Center.</p>
        <p>Developed with ❤️ for the Gobindaganj Community.</p>
      </footer>
    </main>
  );
}
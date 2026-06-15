import React from "react";
// შემოგვაქვს Helmet მეტა ტეგებისთვის
import { Helmet } from "react-helmet-async";

// მედია ფაილების სწორი მისამართები public საქაღალდიდან
const imgBrown = "/Brown.jpeg";
const imgTetri = "/Tetri2.jpeg";
const imgMtsvane = "/Mtsvane.jpeg";
const imgSeri = "/Seri.png";
const imgLurji = "/Lurji.jpeg";
const imgMasala = "/Masala.jpeg";

const MATTRESSES = [
  {
    id: 1,
    name: "კრონენ-ორთო პრემიუმი",
    info: "7-ზონიანი ანატომიური ბადე მაქსიმალური ორთოპედიული მხარდაჭერისთვის.",
    tag: "პრემიუმ ხარისხი",
    img: imgBrown,
  },
  {
    id: 2,
    name: "კაიზერ-გელ მემორი",
    info: "მემორი ეფექტი და სპეციალური გამაგრილებელი გელი მშვიდი ძილისთვის.",
    tag: "ინოვაციური",
    img: imgTetri,
  },
  {
    id: 3,
    name: "ეკო-შლაფ ბიო",
    info: "100% ნატურალური ქოქოსის ბოჭკოები ეკოლოგიურად სუფთა გარემოსთვის.",
    tag: "ეკო მეგობრული",
    img: imgMtsvane,
  },
  {
    id: 4,
    name: "ლუქსუს-კომპაქტ გოლდი",
    info: "ორმაგი ამორტიზაციის ინტელექტუალური სისტემა გაძლიერებული გამძლეობით.",
    tag: "ტოპ არჩევანი",
    img: imgBrown,
  },
  {
    id: 5,
    name: "ნატურ-ლატექს დელუქსი",
    info: "100% ბუნებრივი და ელასტიური ლატექსი ხერხემლის ანატომიური დაცვისთვის.",
    tag: "ნატურალური",
    img: imgSeri,
  },
  {
    id: 6,
    name: "თერმო-ბალანს პრო",
    info: "აქტიური თერმო-რეგულაციის სისტემა, რომელიც ინარჩუნებს ოპტიმალურ ტემპერატურას.",
    tag: "თერმო კონტროლი",
    img: imgLurji,
  },
  {
    id: 7,
    name: "შლაფ-ორთო ჯუნიორი",
    info: "სპეციალურად ბავშვებისთვის შექმნილი სწორი, მყარი ორთოპედიული ბაზა.",
    tag: "ბავშვებისთვის",
    img: imgMasala,
  },
];

const STATS = [
  { val: "DIN EN", label: "ევროსტანდარტი" },
  { val: "100%", label: "ჰიპოალერგიული" },
  { val: "0 ₾", label: "უფასო მიწოდება" },
  { val: "2 წელი", label: "გარანტია" },
];

export default function Product() {
  const phoneNumber = "+995558686586";

  const productListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: MATTRESSES.map((mattress, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      item: {
        "@type": "Product",
        name: mattress.name,
        description: mattress.info,
        image: `${window.location.origin}/${mattress.img}`,
      },
    })),
  };

  return (
    <div className="bg-slate-50 min-h-screen font-sans text-slate-800 antialiased overflow-x-hidden scroll-smooth">
      {/* ─── SEO და მეტა ტეგები (Helmet) ─── */}
      <Helmet>
        <title>ორთოპედიული მატრასების კატალოგი | გერმანული ხარისხი</title>
        <meta
          name="description"
          content="იხილეთ გერმანული ორთოპედიული მატრასების სრული კატალოგი: კრონენ-ორთო, კაიზერ-გელ მემორი, ნატურალური ლატექსი და საბავშვო მოდელები ოფიციალური გარანტიით."
        />
        <meta
          name="keywords"
          content="matrasebis katalogi, ორთოპედიული მატრასი, ლატექსის მატრასი, მემორი მატრასები, გერმანული მატრასები"
        />
        <meta
          property="og:title"
          content="ორთოპედიული მატრასების კატალოგი | გერმანული ხარისხი"
        />
        <meta
          property="og:description"
          content="პრემიუმ, მემორი გელ და ბიო მოდელები საუკეთესო ხარისხითა და ოფიციალური გარანტიით."
        />
        <meta property="og:image" content={imgBrown} />

        <script type="application/ld+json">
          {JSON.stringify(productListSchema)}
        </script>
      </Helmet>

      {/* ─── HERO / HEADER ─── */}
      <section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-900 text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-emerald-500/8 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-teal-500/5 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
          <div className="space-y-4 sm:space-y-6 max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[11px] sm:text-xs font-bold tracking-widest uppercase">
              🇩🇪 SCHLAFKRAFT DEUTSCHE QUALITÄT · სრული კატალოგი
            </span>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              გერმანული მატრასების{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-300">
                პრემიუმ კოლექცია
              </span>
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed max-w-xl mx-auto font-medium">
              აღმოაჩინეთ უმაღლესი ინჟინერიით შექმნილი ორთოპედიული და ანატომიური
              მოდელები. შეარჩიეთ იდეალური ბალანსი თქვენი მშვიდი და ჯანსაღი
              ძილისთვის.
            </p>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-8 relative z-20">
        <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/60 shadow-xl grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-slate-100">
          {STATS.map((s, i) => (
            <div
              key={i}
              style={{ animationDelay: `${100 + i * 80}ms` }}
              className="animate-card flex flex-col items-center justify-center py-5 sm:py-7 px-3"
            >
              <p className="text-lg sm:text-2xl lg:text-3xl font-black text-slate-900 leading-none">
                {s.val}
              </p>
              <p className="text-[10px] sm:text-xs text-slate-500 font-medium mt-1.5 text-center leading-snug">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ─── PRODUCTS GRID ─── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="flex flex-col items-center text-center mb-10 sm:mb-16 space-y-2">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 text-emerald-700 text-[11px] font-bold tracking-widest uppercase">
            🛌 ექსკლუზიური მოდელები
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            შეარჩიეთ თქვენზე მორგებული სტრუქტურა
          </h2>
          <p className="text-sm text-slate-500 max-w-sm">
            თითოეული მატრასი დამზადებულია სერტიფიცირებული, ეკოლოგიური
            მასალებისგან
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {MATTRESSES.map((mattress, i) => (
            <div
              key={mattress.id}
              style={{ animationDelay: `${400 + i * 100}ms` }}
              className="animate-card group bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200/70 shadow-md hover:border-emerald-500/20 hover:shadow-emerald-500/5 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              {/* სურათის ბლოკი */}
              <div className="relative h-48 sm:h-56 overflow-hidden bg-slate-100">
                <img
                  src={mattress.img}
                  alt={mattress.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />

                {/* ტეგი */}
                <div className="absolute top-3 left-3 bg-slate-900/90 backdrop-blur-sm border border-emerald-500/20 px-2.5 py-1 rounded-md">
                  <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider">
                    {mattress.tag}
                  </span>
                </div>
              </div>

              {/* ინფორმაციის ბლოკი */}
              <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between space-y-5">
                <div className="space-y-2">
                  <h3 className="font-extrabold text-slate-900 group-hover:text-emerald-600 transition-colors duration-300 text-base sm:text-lg tracking-tight leading-snug">
                    {mattress.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-medium">
                    {mattress.info}
                  </p>
                </div>

                {/* მხოლოდ შეკვეთის ღილაკი (ფასების ბლოკი ამოღებულია) */}
                <div className="pt-2 border-t border-slate-100">
                  <a
                    href={`tel:${phoneNumber}`}
                    className="w-full py-3.5 bg-slate-950 hover:bg-gradient-to-r hover:from-emerald-500 hover:to-teal-600 hover:text-slate-950 text-white text-xs sm:text-sm font-bold rounded-xl text-center transition-all duration-300 flex items-center justify-center gap-2 active:scale-[0.97] shadow-sm"
                  >
                    <span>📞</span>
                    <span>დეტალები და შეკვეთა</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── CTA (ინდივიდუალური შეკვეთა) ─── */}
      <section className="bg-slate-950 text-white py-16 sm:py-24 px-4 text-center relative overflow-hidden">
        <div className="absolute -left-16 -top-16 w-40 h-40 sm:w-64 sm:h-64 bg-emerald-500/5 rounded-full blur-3xl" />
        <div className="absolute right-0 bottom-0 w-48 h-48 bg-teal-500/5 rounded-full blur-3xl" />

        <div className="relative max-w-2xl mx-auto space-y-4 sm:space-y-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[11px] font-bold tracking-widest uppercase">
            🛏️ ინდივიდუალური ზომები
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight leading-tight">
            გჭირდებათ არასტანდარტული ფორმა ან ზომა?
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-md mx-auto leading-relaxed">
            ჩვენი ქარხანა დაამზადებს ნებისმიერი არასტანდარტული კონფიგურაციის
            მატრასს სულ რაღაც{" "}
            <span className="text-emerald-400 font-bold">3 სამუშაო დღეში</span>.
          </p>
          <div className="pt-2">
            <a
              href={`tel:${phoneNumber}`}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 font-bold rounded-2xl shadow-lg shadow-emerald-500/20 transition-all duration-200 active:scale-[0.97] text-sm sm:text-base"
            >
              📞 უფასო საინჟინრო კონსულტაცია
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

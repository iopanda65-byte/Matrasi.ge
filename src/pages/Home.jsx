import React, { useState, useRef } from "react";

const img1 = "Black.png";
const img2 = "tetri.png";
const img3 = "shida.png";

const VIDEOS = [
  {
    src: "Matrasi.mp4",
    poster: img3,
    title: "მატრასის პრეზენტაცია",
    desc: "გერმანული წარმოება და ანატომიური სტრუქტურა",
  },
  {
    src: "Koja.mp4",
    poster: img1,
    title: "კოჟის კოლექცია",
    desc: "პრემიუმ კოჟის საფარი და შიდა ფენები",
  },
  {
    src: "Masajori.mp4",
    poster: img2,
    title: "მასაჟური სისტემა",
    desc: "ჩაშენებული მასაჟური მექანიზმის დემონსტრაცია",
  },
];

const FEATURED_PRODUCTS = [
  {
    id: 1,
    name: "Germanuli Matrasebi Premium Ortho",
    price: "750 ₾",
    oldPrice: "900 ₾",
    tag: "გერმანული სტანდარტი",
    img: img1,
  },
  {
    id: 2,
    name: "TraumWerk Memory Foam",
    price: "890 ₾",
    tag: "ახალი ტექნოლოგია",
    img: img2,
  },
  {
    id: 4,
    name: "BadenMatt Eco Comfort",
    price: "1,200 ₾",
    oldPrice: "1,450 ₾",
    tag: "ტოპ ფასდაკლება",
    img: img3,
  },
];

const STATS = [
  { val: "DIN EN", label: "ევროსტანდარტი" },
  { val: "100%", label: "ჰიპოალერგიული" },
  { val: "0 ₾", label: "უფასო მიწოდება" },
  { val: "2 წელი", label: "გარანტია" },
];

export default function Main() {
  const phoneNumber = "+995558686586";
  const [activeVideo, setActiveVideo] = useState(null);
  const videoRefs = useRef([]);

  const handleVideoClick = (i) => {
    if (activeVideo !== null && activeVideo !== i) {
      videoRefs.current[activeVideo]?.pause();
    }
    setActiveVideo(i);
  };

  return (
    <div className="bg-slate-50 min-h-screen font-sans text-slate-800 antialiased overflow-x-hidden">
      {/* ─── HERO ─── */}
      <section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-900 text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-emerald-500/8 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-teal-500/5 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* left */}
            <div className="space-y-5 sm:space-y-7 text-center lg:text-left">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[11px] sm:text-xs font-bold tracking-widest uppercase">
                🇩🇪 GERMANULI MATRASEBI · გერმანული ხარისხი
              </span>

              <h1 className="text-[2rem] leading-tight sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
                ინჟინერია იდეალური{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-300">
                  ძილის კულტურისთვის
                </span>
              </h1>

              <p className="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed max-w-md mx-auto lg:mx-0">
                უმაღლესი გერმანული სტანდარტებით შექმნილი ორთოპედიული მატრასები
                ანატომიური სიზუსტით და მაქსიმალური კომფორტით.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 pt-1 max-w-xs mx-auto sm:max-w-none lg:mx-0">
                <a
                  href={`tel:${phoneNumber}`}
                  className="flex-1 sm:flex-none px-7 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 active:from-emerald-400 active:to-teal-500 text-slate-950 font-bold rounded-2xl shadow-lg shadow-emerald-500/20 transition-all duration-200 active:scale-[0.97] text-center text-sm sm:text-base"
                >
                  კატალოგის ნახვა
                </a>
                <a
                  href={`tel:${phoneNumber}`}
                  className="flex-1 sm:flex-none px-7 py-4 bg-white/5 active:bg-white/10 text-white font-semibold rounded-2xl text-center border border-white/10 transition-all duration-200 text-sm sm:text-base"
                >
                  📞 უფასო კონსულტაცია
                </a>
              </div>
            </div>

            {/* right — hero image */}
            <div className="hidden lg:flex justify-center">
              <div className="w-full max-w-sm h-64 xl:h-72 rounded-3xl overflow-hidden shadow-2xl border border-white/10 relative group">
                <img
                  src={img2}
                  alt="Germanuli Matrasebi Premium"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent" />
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-slate-950/80 text-emerald-400 border border-emerald-500/20 px-4 py-1.5 rounded-lg text-xs font-black tracking-wider uppercase whitespace-nowrap backdrop-blur-sm">
                  Deutsche Quality 🇩🇪
                </div>
              </div>
            </div>
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

      {/* ─── VIDEOS ─── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-12">
        <div className="text-center mb-10 sm:mb-14 space-y-2">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 text-emerald-700 text-[11px] font-bold tracking-widest uppercase">
            🎬 ვიდეო მიმოხილვა
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            იხილეთ როგორ იქმნება კომფორტი
          </h2>
          <p className="text-sm text-slate-500 max-w-sm mx-auto">
            გერმანული წარმოების ხარისხი, ანატომიური სტრუქტურა და შიდა ფენები
          </p>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-3 snap-x snap-mandatory scrollbar-hide sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:overflow-visible sm:pb-0">
          {VIDEOS.map((video, i) => (
            <div
              key={i}
              style={{ animationDelay: `${400 + i * 120}ms` }}
              className="animate-card group flex-shrink-0 w-[78vw] sm:w-auto snap-start bg-slate-900 rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-700/50 shadow-lg hover:border-emerald-500/30 hover:shadow-emerald-500/10 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              <div className="relative aspect-video bg-slate-950 overflow-hidden">
                <video
                  ref={(el) => (videoRefs.current[i] = el)}
                  className="w-full h-full object-contain"
                  controls
                  preload="metadata"
                  poster={video.poster}
                  onClick={() => handleVideoClick(i)}
                  playsInline
                >
                  <source src={video.src} type="video/mp4" />
                </video>
                <div className="absolute top-2.5 left-2.5 bg-slate-900/80 backdrop-blur-md border border-slate-700/40 px-2 py-0.5 rounded-md z-10 pointer-events-none">
                  <span className="text-[9px] font-bold text-white uppercase tracking-widest">
                    #{i + 1}
                  </span>
                </div>
              </div>
              <div className="p-4 sm:p-5 space-y-1">
                <h3 className="font-bold text-slate-100 group-hover:text-emerald-400 transition-colors text-sm sm:text-base tracking-tight">
                  {video.title}
                </h3>
                <p className="text-xs text-slate-400">{video.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── PRODUCTS ─── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        <div className="flex items-end justify-between mb-8 sm:mb-12">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              გერმანული კოლექცია
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              პრემიუმ ორთოპედიული მოდელები ჯანსაღი ხერხემლისთვის
            </p>
          </div>
          <a
            href={`tel:${phoneNumber}`}
            className="text-xs sm:text-sm font-bold text-slate-900 hover:text-emerald-600 transition-colors flex items-center gap-1 shrink-0 ml-4"
          >
            ყველა <span>→</span>
          </a>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-3 snap-x snap-mandatory scrollbar-hide sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:overflow-visible sm:pb-0 sm:gap-6">
          {FEATURED_PRODUCTS.map((mattress, i) => (
            <div
              key={mattress.id}
              style={{ animationDelay: `${500 + i * 120}ms` }}
              className="animate-card group flex-shrink-0 w-[72vw] sm:w-auto snap-start bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-500/5 hover:border-emerald-500/20 flex flex-col"
            >
              <div className="relative h-44 sm:h-52 overflow-hidden bg-slate-100">
                <img
                  src={mattress.img}
                  alt={mattress.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                <div className="absolute top-2.5 left-2.5 bg-slate-900/90 backdrop-blur-sm border border-emerald-500/20 px-2 py-0.5 rounded-md">
                  <span className="text-[9px] font-bold text-emerald-400 uppercase tracking-wider">
                    {mattress.tag}
                  </span>
                </div>
              </div>

              <div className="p-4 sm:p-5 flex flex-col flex-1">
                <div className="flex-1 mb-4 text-center space-y-1">
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base tracking-tight leading-snug">
                    {mattress.name}
                  </h3>
                  <div className="flex items-center justify-center gap-2 pt-1">
                    {mattress.oldPrice && (
                      <span className="text-xs text-slate-400 line-through">
                        {mattress.oldPrice}
                      </span>
                    )}
                    <span className="text-lg sm:text-xl font-black text-slate-900">
                      {mattress.price}
                    </span>
                  </div>
                </div>
                <a
                  href={`tel:${phoneNumber}`}
                  className="w-full py-3 bg-slate-900 hover:bg-emerald-500 hover:text-slate-950 text-white text-xs sm:text-sm font-semibold rounded-xl text-center transition-all duration-300 flex items-center justify-center gap-2 active:scale-[0.97]"
                >
                  <span>📞</span>
                  <span>სწრაფი შეკვეთა</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="bg-slate-950 text-white py-16 sm:py-24 px-4 text-center relative overflow-hidden">
        <div className="absolute -left-16 -top-16 w-40 h-40 sm:w-64 sm:h-64 bg-emerald-500/5 rounded-full blur-3xl" />
        <div className="absolute right-0 bottom-0 w-48 h-48 bg-teal-500/5 rounded-full blur-3xl" />
        <div className="relative max-w-2xl mx-auto space-y-4 sm:space-y-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[11px] font-bold tracking-widest uppercase">
            🛏️ ინდივიდუალური შეკვეთა
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight leading-tight">
            გჭირდებათ ინდივიდუალური გერმანული სტანდარტი?
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-md mx-auto leading-relaxed">
            დავამზადებთ ნებისმიერი არასტანდარტული ზომისა და კონფიგურაციის
            მატრასს უმოკლეს დროში.
          </p>
          <div className="pt-2">
            <a
              href={`tel:${phoneNumber}`}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 font-bold rounded-2xl shadow-lg shadow-emerald-500/20 transition-all duration-200 active:scale-[0.97] text-sm sm:text-base"
            >
              📞 კონსულტაცია ინჟინერთან
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

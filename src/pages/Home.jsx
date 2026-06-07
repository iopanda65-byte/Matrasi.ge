import React from "react";

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
    name: "SchlafKraft Premium Ortho",
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

export default function Main() {
  const phoneNumber = "+995 558686586";

  return (
    <div className="bg-gradient-to-b from-slate-50 to-slate-100 min-h-screen font-sans text-slate-800 antialiased">

      {/* HERO SECTION */}
      <div className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-850 text-white py-16 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute top-0 right-0 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>

        <div className="relative max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold tracking-wider uppercase backdrop-blur-sm">
              🇩🇪 SCHLAFKRAFT • გერმანული ხარისხი
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              ინჟინერია იდეალური <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-300">
                ძილის კულტურისთვის
              </span>
            </h1>
            <p className="max-w-md mx-auto lg:mx-0 text-base sm:text-lg text-slate-300 leading-relaxed">
              უმაღლესი გერმანული სტანდარტებით შექმნილი ორთოპედიული მატრასები
              ანატომიური სიზუსტითა და მაქსიმალური კომფორტით.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 pt-2 max-w-sm sm:max-w-none mx-auto lg:mx-0">
              <button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 font-bold rounded-xl shadow-lg shadow-emerald-500/10 transition-all duration-300 active:scale-[0.98]">
                კატალოგის ნახვა
              </button>
              <a
                href={`tel:${phoneNumber}`}
                className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-xl text-center border border-white/10 backdrop-blur-sm transition-all duration-300"
              >
                📞 უფასო კონსულტაცია
              </a>
            </div>
          </div>

          <div className="hidden lg:flex justify-center relative">
            <div className="w-96 h-64 rounded-3xl overflow-hidden shadow-2xl border border-white/10 relative group">
              <img
                src={img2}
                alt="Premium German Mattress"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent"></div>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-slate-950/80 text-emerald-400 border border-emerald-500/20 px-4 py-1.5 rounded-lg text-xs font-black tracking-wider uppercase shadow-md whitespace-nowrap backdrop-blur-sm">
                Deutsche Quality 🇩🇪
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* სტატისტიკა */}
      <div className="max-w-7xl mx-auto -mt-6 px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/60 p-6 sm:p-8 shadow-[0_15px_50px_-20px_rgba(0,0,0,0.05)] grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { val: "DIN EN", label: "ევროსტანდარტი" },
            { val: "100%", label: "ეკო-ტექს ჰიპოალერგიული" },
            { val: "0 ₾", label: "უფასო მიწოდება" },
            { val: "2 წელი", label: "ქარხნული გარანტია" },
          ].map((s, i) => (
            <div key={i} className={i > 0 ? "border-l border-slate-100" : ""}>
              <p className="text-xl sm:text-3xl font-black text-slate-900">{s.val}</p>
              <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 🎬 ვიდეო სექცია — 3 ჩარჩო */}
      <div className="max-w-7xl mx-auto pt-24 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-12">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-700 text-xs font-bold tracking-widest uppercase">
            🎬 ვიდეო მიმოხილვა
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            იხილეთ როგორ იქმნება კომფორტი
          </h2>
          <p className="text-sm text-slate-500 max-w-md mx-auto font-medium">
            გერმანული წარმოების ხარისხი, ანატომიური სტრუქტურა და შიდა ფენები
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {VIDEOS.map((video, i) => (
            <div
              key={i}
              className="group bg-slate-900 rounded-3xl overflow-hidden border border-slate-700/50 shadow-xl shadow-slate-900/10 hover:border-emerald-500/30 hover:shadow-[0_20px_40px_-15px_rgba(16,185,129,0.15)] transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              {/* ვიდეო */}
              <div className="relative aspect-video bg-slate-950">
                <video
                  className="w-full h-full object-cover"
                  controls
                  preload="metadata"
                  poster={video.poster}
                >
                  <source src={video.src} type="video/mp4" />
                </video>
                {/* ნომერი */}
                <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md border border-slate-700/40 px-2.5 py-1 rounded-lg z-10 pointer-events-none">
                  <span className="text-[10px] font-bold text-white uppercase tracking-widest">
                    #{i + 1}
                  </span>
                </div>
              </div>

              {/* ტექსტი */}
              <div className="p-5 flex flex-col gap-1">
                <h3 className="font-bold text-slate-100 group-hover:text-emerald-400 transition-colors duration-300 text-base tracking-tight">
                  {video.title}
                </h3>
                <p className="text-xs text-slate-400 font-medium">{video.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* პროდუქტების სექცია */}
      <div className="max-w-7xl mx-auto py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-10 space-y-3 sm:space-y-0 text-center sm:text-left">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              გერმანული კოლექცია
            </h2>
            <p className="text-sm text-slate-500 font-medium mt-1">
              პრემიუმ ორთოპედიული მოდელები ჯანსაღი ხერხემლისთვის
            </p>
          </div>
          <button className="text-sm font-bold text-slate-900 hover:text-emerald-600 transition-colors flex items-center gap-1">
            ყველას ნახვა <span>→</span>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURED_PRODUCTS.map((mattress) => (
            <div
              key={mattress.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(16,185,129,0.05)] hover:border-emerald-500/20 flex flex-col group"
            >
              <div className="relative h-56 overflow-hidden bg-slate-50">
                <img
                  src={mattress.img}
                  alt={mattress.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                <div className="absolute top-3 left-3 bg-slate-900/90 backdrop-blur-sm border border-emerald-500/20 px-2.5 py-1 rounded-lg shadow-sm">
                  <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider">
                    {mattress.tag}
                  </span>
                </div>
              </div>

              <div className="p-5 flex flex-col flex-1">
                <div className="space-y-1 mb-5 text-center flex-1">
                  <h3 className="font-bold text-slate-900 text-lg tracking-tight">{mattress.name}</h3>
                  <div className="flex items-center justify-center gap-2 pt-1">
                    {mattress.oldPrice && (
                      <span className="text-sm text-slate-400 line-through font-medium">
                        {mattress.oldPrice}
                      </span>
                    )}
                    <span className="text-xl font-black text-slate-900">{mattress.price}</span>
                  </div>
                </div>
                <a
                  href={`tel:${phoneNumber}`}
                  className="w-full py-3.5 bg-slate-900 hover:bg-emerald-500 hover:text-slate-950 text-white text-sm font-semibold rounded-xl text-center transition-all duration-300 flex items-center justify-center gap-2 border border-transparent hover:border-emerald-500/20"
                >
                  <span>📞</span>
                  <span>სწრაფი შეკვეთა</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA SECTION */}
      <div className="bg-slate-950 text-white py-16 px-4 text-center relative overflow-hidden">
        <div className="absolute -left-20 -top-20 w-48 h-48 bg-emerald-500/5 rounded-full blur-3xl"></div>
        <div className="relative max-w-2xl mx-auto space-y-4 sm:space-y-6">
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            გჭირდებათ ინდივიდუალური გერმანული სტანდარტი?
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-md mx-auto font-medium">
            დავამზადებთ ნებისმიერი არასტანდარტული ზომისა და კონფიგურაციის
            მატრასს უმოკლეს დროში.
          </p>
          <div className="pt-2">
            <a
              href={`tel:${phoneNumber}`}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 font-bold rounded-xl shadow-md transition-all duration-300 active:scale-[0.97]"
            >
              კონსულტაცია ინჟინერთან
            </a>
          </div>
        </div>
      </div>

    </div>
  );
}

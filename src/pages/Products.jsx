import React from "react";

const img1 = "Black.png";
const img2 = "tetri.png";
const img3 = "shida.png";
const img4 = "Seri.png";
const img5 = "Shida2.png";
const img6 = "Shavi2.png";

const MATTRESSES = [
  {
    id: 1,
    name: "Kronen-Ortho Premium",
    price: "750 ₾",
    oldPrice: "900 ₾",
    info: "7-ზონიანი ანატომიური ბადე",
    img: img1,
  },
  {
    id: 2,
    name: "Kaiser-Gel Memory",
    price: "890 ₾",
    info: "გამაგრილებელი ეფექტით",
    img: img2,
  },
  {
    id: 3,
    name: "Eco-Schlaf Bio",
    price: "340 ₾",
    info: "100% ნატურალური ქოქოსი",
    img: img3,
  },
  {
    id: 4,
    name: "Luxus-Kompakt Gold",
    price: "1,200 ₾",
    oldPrice: "1,450 ₾",
    info: "ორმაგი ამორტიზაცია",
    img: img1,
  },
  {
    id: 5,
    name: "Natur-Latex Deluxe",
    price: "980 ₾",
    oldPrice: "1,150 ₾",
    info: "100% ბუნებრივი ლატექსი",
    img: img4,
  },
  {
    id: 6,
    name: "Thermo-Balance Pro",
    price: "620 ₾",
    info: "თერმო-რეგულაციის სისტემა",
    img: img5,
  },
  {
    id: 7,
    name: "Schlaf-Ortho Junior",
    price: "450 ₾",
    info: "ბავშვებისთვის, ორთოპედიული",
    img: img6,
  },
];

const STATS = [
  { val: "DIN EN", label: "გერმანული სტანდარტი" },
  { val: "100%", label: "ჰიპოალერგიული ეკო-მასალა" },
  { val: "0 ₾", label: "უფასო მიწოდება" },
  { val: "15 წელი", label: "ოფიციალური გარანტია" },
];

export default function Product() {
  const phoneNumber = "+995558686586";

  return (
    <div className="bg-gradient-to-b from-slate-50 via-slate-100 to-slate-200 min-h-screen font-sans antialiased text-slate-800 overflow-x-hidden">
      {/* ─── HEADER ─── */}
      <div className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-16 space-y-3 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
          <span className="relative inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 text-emerald-700 text-[11px] font-bold tracking-widest uppercase">
            🇩🇪 SCHLAFKRAFT DEUTSCHE QUALITÄT
          </span>
          <h1 className="relative text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            გერმანული მატრასების კატალოგი
          </h1>
          <p className="relative text-sm sm:text-base text-slate-500 max-w-md mx-auto font-medium">
            უმაღლესი ინჟინერია მშვიდი ძილისთვის. შეუკვეთეთ მარტივად ერთი ზარით.
          </p>
        </div>

        {/* ─── PRODUCTS GRID ─── */}
        {/* mobile: 2-col; lg: 4-col */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 lg:gap-8">
          {MATTRESSES.map((mattress) => (
            <div
              key={mattress.id}
              className="bg-slate-800/95 shadow-lg shadow-slate-900/10 rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-700/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(16,185,129,0.15)] hover:border-emerald-500/30 flex flex-col group p-3 sm:p-5 relative text-slate-100"
            >
              {/* IMAGE */}
              <div className="bg-slate-100 rounded-xl sm:rounded-2xl h-36 sm:h-52 flex items-center justify-center relative overflow-hidden mb-3 sm:mb-5 border border-slate-700/30 p-2 shrink-0">
                <div className="absolute top-2 left-2 bg-slate-900/80 backdrop-blur-md border border-slate-700/40 px-2 py-0.5 rounded-md z-10">
                  <span className="text-[9px] font-bold text-white uppercase tracking-widest">
                    #{mattress.id}
                  </span>
                </div>
                {mattress.oldPrice && (
                  <div className="absolute top-2 right-2 bg-emerald-500 text-slate-950 text-[9px] font-black px-2 py-0.5 rounded-md z-10 uppercase tracking-wider">
                    აქცია
                  </div>
                )}
                <img
                  src={mattress.img}
                  alt={mattress.name}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 ease-out select-none mix-blend-multiply"
                />
              </div>

              {/* INFO */}
              <div className="text-center flex-1 flex flex-col justify-between mb-2 sm:mb-3">
                <div className="space-y-0.5">
                  <h3 className="font-bold text-slate-100 group-hover:text-emerald-400 transition-colors duration-300 text-xs sm:text-base leading-snug tracking-tight">
                    {mattress.name}
                  </h3>
                  <p className="text-[10px] sm:text-xs text-slate-400 font-medium leading-snug">
                    {mattress.info}
                  </p>
                </div>
              </div>

              {/* PRICE */}
              <div className="flex items-center justify-center gap-1.5 mb-3 sm:mb-5 min-h-[32px] shrink-0">
                {mattress.oldPrice && (
                  <span className="text-xs text-slate-400/70 line-through font-medium">
                    {mattress.oldPrice}
                  </span>
                )}
                <span className="text-base sm:text-2xl font-black text-white tracking-tight">
                  {mattress.price}
                </span>
              </div>

              {/* BUTTON */}
              <a
                href={`tel:${phoneNumber}`}
                className="w-full mt-auto py-2.5 sm:py-3.5 bg-gradient-to-r from-emerald-500 to-teal-600 active:from-emerald-400 active:to-teal-500 text-slate-950 font-bold rounded-lg sm:rounded-xl text-center transition-all duration-200 flex items-center justify-center gap-1.5 active:scale-[0.97] shrink-0"
              >
                <svg
                  className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
                <span className="text-[11px] sm:text-sm tracking-wide font-bold">
                  შეკვეთა
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* ─── STATS ─── */}
      <div className="bg-slate-100 py-12 sm:py-16 border-t border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-300 text-center">
          {STATS.map((s, i) => (
            <div key={i} className="py-4 px-2">
              <p className="text-xl sm:text-4xl font-black text-slate-900 leading-none">
                {s.val}
              </p>
              <p className="text-[10px] sm:text-sm text-slate-600 font-semibold mt-1.5 leading-snug">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ─── CTA ─── */}
      <div className="bg-slate-900 text-white py-14 sm:py-20 px-4 text-center relative overflow-hidden">
        <div className="absolute -left-16 -top-16 w-40 h-40 bg-emerald-500/5 rounded-full blur-3xl" />
        <div className="relative max-w-2xl mx-auto space-y-4 sm:space-y-6">
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-slate-100 leading-tight">
            გჭირდებათ ინდივიდუალური ზომა?
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-md mx-auto leading-relaxed">
            ჩვენი ქარხანა დაამზადებს ნებისმიერი არასტანდარტული ფორმის მატრასს
            სულ რაღაც <span className="text-white font-bold">3</span> სამუშაო
            დღეში.
          </p>
          <a
            href={`tel:${phoneNumber}`}
            className="inline-flex items-center gap-2 px-7 sm:px-8 py-3.5 sm:py-4 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 font-bold rounded-xl shadow-md transition-all duration-200 active:scale-[0.97] text-sm sm:text-base"
          >
            📞 უფასო საინჟინრო კონსულტაცია
          </a>
        </div>
      </div>
    </div>
  );
}

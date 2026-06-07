import React from 'react';

// ფოტოების ცვლადები
const img1 = "Black.png";
const img2 = "tetri.png";
const img3 = "shida.png";
const img4 = "Seri.png";
const img5 = "Shida2.png";
const img6 = "Shavi2.png";

// სატესტო მონაცემები სურათებით
const MATTRESSES = [
  { id: 1, name: 'Kronen-Ortho Premium', price: '750 ₾', oldPrice: '900 ₾', info: '7-ზონიანი ანატომიური ბადე', img: img1 },
  { id: 2, name: 'Kaiser-Gel Memory', price: '890 ₾', info: 'გამაგრილებელი ეფექტით', img: img2 },
  { id: 3, name: 'Eco-Schlaf Bio', price: '340 ₾', info: '100% ნატურალური ქოქოსი', img: img3 },
  { id: 4, name: 'Luxus-Kompakt Gold', price: '1,200 ₾', oldPrice: '1,450 ₾', info: 'ორმაგი ამორტიზაცია', img: img1 },
  { id: 5, name: 'Natur-Latex Deluxe', price: '980 ₾', oldPrice: '1,150 ₾', info: '100% ბუნებრივი ლატექსი', img: img4 },
  { id: 6, name: 'Thermo-Balance Pro', price: '620 ₾', info: 'თერმო-რეგულაციის სისტემა', img: img5 },
  { id: 7, name: 'Schlaf-Ortho Junior', price: '450 ₾', info: 'ბავშვებისთვის, ორთოპედიული', img: img6 },
];

export default function Product() {
  const phoneNumber = '+995 558 686 586';

  return (
    <div className="bg-gradient-to-b from-slate-50 via-slate-100 to-slate-200 min-h-screen font-sans antialiased text-slate-800">
      
      {/* 1. ღია სექცია: კატალოგი და პროდუქტები */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        
        {/* სათაური ბლოკი */}
        <div className="text-center mb-16 space-y-4 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-72 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="relative inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-700 text-xs font-bold tracking-widest uppercase">
            🇩🇪 SCHLAFKRAFT DEUTSCHE QUALITÄT
          </div>
          <h1 className="relative text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
            გერმანული მატრასების კატალოგი
          </h1>
          <p className="relative text-base text-slate-500 max-w-md mx-auto font-medium">
            უმაღლესი ინჟინერია მშვიდი ძილისთვის. შეუკვეთეთ მარტივად ერთი ზარით.
          </p>
        </div>

        {/* პროდუქტების ბადე */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {MATTRESSES.map((mattress) => (
            <div 
              key={mattress.id} 
              className="bg-slate-800/95 shadow-lg shadow-slate-900/10 rounded-3xl overflow-hidden border border-slate-700/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(16,185,129,0.15)] hover:border-emerald-500/30 flex flex-col group p-5 relative text-slate-100"
            >
              
              {/* ფოტოს კონტეინერი */}
              <div className="bg-slate-100 rounded-2xl h-52 flex items-center justify-center relative overflow-hidden mb-5 border border-slate-700/30 p-2">
                
                {/* ID მარკერი */}
                <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md border border-slate-700/40 px-2.5 py-1 rounded-lg shadow-sm z-10">
                  <span className="text-[10px] font-bold text-white uppercase tracking-widest">
                    ID: #{mattress.id}
                  </span>
                </div>

                {/* ფასდაკლების ბეიჯი */}
                {mattress.oldPrice && (
                  <div className="absolute top-3 right-3 bg-emerald-500 text-slate-950 text-[10px] font-black px-2.5 py-1 rounded-lg tracking-wider uppercase shadow-md shadow-emerald-500/10 z-10">
                    აქცია
                  </div>
                )}

                {/* დინამიური სურათი */}
                <img 
                  src={mattress.img} 
                  alt={mattress.name}
                  className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-500 ease-out select-none mix-blend-multiply" 
                />
              </div>

              {/* პროდუქტის სახელი და მცირე ინფო */}
              <div className="text-center mb-2">
                <h3 className="font-bold text-slate-100 group-hover:text-emerald-400 transition-colors duration-300 tracking-tight text-lg min-h-[56px] flex items-center justify-center">
                  {mattress.name}
                </h3>
                <p className="text-xs text-slate-400 font-medium mt-1">
                  {mattress.info}
                </p>
              </div>

              {/* ფასი */}
              <div className="mb-6 flex flex-col items-center justify-center min-h-[56px]">
                {mattress.oldPrice ? (
                  <div className="flex items-center gap-2.5">
                    <span className="text-sm text-slate-400/70 line-through font-medium">
                      {mattress.oldPrice}
                    </span>
                    <span className="text-2xl font-black text-white tracking-tight">
                      {mattress.price}
                    </span>
                  </div>
                ) : (
                  <span className="text-2xl font-black text-white tracking-tight">
                    {mattress.price}
                  </span>
                )}
              </div>

              {/* ღილაკი */}
              <a
                href={`tel:${phoneNumber}`}
                className="w-full mt-auto py-3.5 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 font-bold rounded-xl text-center transition-all duration-300 flex items-center justify-center gap-2 shadow-md shadow-emerald-500/5 active:scale-[0.97]"
              >
                <svg 
                  className="w-4 h-4 transition-transform group-hover:rotate-12 duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2.5" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.622k4.72 4.72 0 01-1.12 2.147c-1.251 1.252-2.13 2.834-2.43 4.545l-.364 2.063A1.125 1.125 0 005.515 21l2.064-.364c1.71-.303 3.293-1.182 4.545-2.43 1.085-1.085 1.761-2.438 2.146-3.856l.002-.008a18.51 18.51 0 006.974-6.974l.008-.002c1.418-.385 2.771-1.06 3.856-2.146l2.063-2.063A1.125 1.125 0 0018 2.25h-2.063c-1.71 0-3.293.879-4.545 2.13a18.51 18.51 0 00-6.974 6.974A11.25 11.25 0 012.25 6.622z" />
                </svg>
                <span className="text-sm tracking-wide">სწრაფი შეკვეთა</span>
              </a>

            </div>
          ))}
        </div>
      </div>

      {/* 2. სექცია: სტატისტიკა */}
      <div className="bg-slate-100 py-16 border-t border-b border-slate-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { val: "DIN EN", label: "გერმანული სტანდარტი" },
            { val: "100%", label: "ჰიპოალერგიული ეკო-მასალა" },
            { val: "0 ₾", label: "უფასო მიწოდება ბინაზე" },
            { val: "15 წელი", label: "ოფიციალური გარანტია" },
          ].map((s, i) => (
            <div key={i} className={i > 0 ? "border-l border-slate-300" : ""}>
              <p className="text-2xl sm:text-4xl font-black text-slate-900">
                {s.val}
              </p>
              <p className="text-xs sm:text-sm text-slate-700 font-semibold mt-2">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 3. მუქი CTA სექცია */}
      <div className="bg-slate-900 text-white py-16 px-4 text-center relative overflow-hidden">
        <div className="relative max-w-2xl mx-auto space-y-6">
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-slate-100">
            გჭირდებათ ინდივიდუალური ზომა?
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-md mx-auto font-medium">
            ჩვენი ქარხანა დაამზადებს ნებისმიერი არასტანდარტული ფორმისა და სისქის მატრასს სულ რაღაც <span className="text-white font-bold">3</span> სამუშაო დღეში.
          </p>
          <div className="pt-2">
            <a
              href={`tel:${phoneNumber}`}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 font-bold rounded-xl shadow-md transition-all duration-300 active:scale-[0.97]"
            >
              უფასო საინჟინრო კონსულტაცია
            </a>
          </div>
        </div>
      </div>

    </div>
  );
}

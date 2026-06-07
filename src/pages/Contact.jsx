import React from "react";

export default function Contact() {
  return (
    <div className="bg-gradient-to-b from-slate-50 to-slate-100 min-h-screen py-8 sm:py-16 px-4 sm:px-6 lg:px-8 font-sans antialiased">
      <div className="max-w-6xl mx-auto">
        {/* სათაურის სექცია */}
        <div className="text-center mb-10 sm:mb-16 space-y-2.5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/5 text-slate-600 text-[11px] sm:text-xs font-semibold tracking-wide uppercase">
            ✉️ მზად ვართ დასახმარებლად
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            დაგვიკავშირდით
          </h1>
          <p className="text-sm sm:text-base text-slate-500 max-w-xl mx-auto font-medium px-2">
            გაქვთ კითხვები ჩვენს მატრასებთან დაკავშირებით? დაგვიტოვეთ
            შეტყობინება და ჩვენი გუნდი დაგეხმარებათ იდეალური ძილის ფორმულის
            პოვნაში.
          </p>
        </div>

        {/* მთავარი კონტენტი: ფორმა და კონტაქტები */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-start">
          {/* საკონტაქტო ფორმა */}
          <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-10 border border-slate-200/60 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.03)] lg:col-span-2 order-1">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6 tracking-tight">
              მოგვწერეთ შეტყობინება
            </h3>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="space-y-5 sm:space-y-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                    სახელი და გვარი
                  </label>
                  <input
                    type="text"
                    placeholder="გიორგი კაპანაძე"
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-900 focus:bg-white transition-all text-base sm:text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                    ელ-ფოსტა
                  </label>
                  <input
                    type="email"
                    placeholder="giorgi@example.com"
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-900 focus:bg-white transition-all text-base sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                  ტელეფონის ნომერი
                </label>
                <input
                  type="tel"
                  placeholder="555 XXXXXX"
                  className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-900 focus:bg-white transition-all text-base sm:text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                  რომელი მატრასი გაინტერესებთ?
                </label>
                <div className="relative">
                  <select className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-900 focus:bg-white transition-all text-base sm:text-sm appearance-none">
                    <option>ორთოპედიული მატრასი "Premium"</option>
                    <option>მემორი ეფექტის მქონე მატრასი "Cloud"</option>
                    <option>საბავშვო ეკოლოგიური მატრასი</option>
                    <option>სხვა / ზოგადი კითხვა</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                  შეტყობინება
                </label>
                <textarea
                  rows="4"
                  placeholder="მოგვწერეთ დეტალურად..."
                  className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-900 focus:bg-white transition-all text-base sm:text-sm resize-none"
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-4 sm:py-3.5 bg-slate-900 hover:bg-emerald-600 text-white text-base sm:text-sm font-semibold rounded-xl shadow-md transition-all duration-300 active:scale-[0.98]"
                >
                  შეტყობინების გაგზავნა
                </button>
              </div>
            </form>
          </div>

          {/* საკონტაქტო ინფორმაციის ბარათი */}
          <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white rounded-2xl sm:rounded-3xl p-6 sm:p-10 shadow-xl lg:col-span-1 flex flex-col justify-between relative overflow-hidden group order-2">
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl"></div>

            <div className="relative z-10">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 tracking-tight">
                საკონტაქტო ინფორმაცია
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-8">
                ესტუმრეთ ჩვენს შოურუმს ან დაგვიკავშირდით თქვენთვის მოსახერხებელი
                არხით.
              </p>

              <div className="space-y-6 sm:space-y-8">
                {/* მისამართი (ბმული განახლებულია ახალი მისამართით) */}
                <a
                  href="https://maps.app.goo.gl/fqMvKCkxZXhM3iZX7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-4 group/item cursor-pointer"
                >
                  <div className="bg-white/10 p-2.5 rounded-xl border border-white/5 shadow-sm mt-0.5">
                    <svg
                      className="w-5 h-5 text-emerald-400"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] sm:text-xs text-slate-400 font-medium uppercase tracking-wider">
                      მისამართი
                    </p>
                    <p className="font-medium text-slate-100 mt-0.5 text-sm sm:text-base group-hover/item:text-emerald-400 transition-colors">
                      კაეროს ქუჩა, თბილისი
                    </p>
                  </div>
                </a>

                {/* ტელეფონი */}
                <a
                  href="tel:+995558686586"
                  className="flex items-start space-x-4 group/item"
                >
                  <div className="bg-white/10 p-2.5 rounded-xl border border-white/5 shadow-sm mt-0.5">
                    <svg
                      className="w-5 h-5 text-emerald-400"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] sm:text-xs text-slate-400 font-medium uppercase tracking-wider">
                      ტელეფონი
                    </p>
                    <p className="font-medium text-slate-100 mt-0.5 text-sm sm:text-base group-hover/item:text-emerald-400 transition-colors">
                      558 686 586
                    </p>
                  </div>
                </a>

                {/* ელ-ფოსტა */}
                <a
                  href="mailto:info@mattress-shop.ge"
                  className="flex items-start space-x-4 group/item"
                >
                  <div className="bg-white/10 p-2.5 rounded-xl border border-white/5 shadow-sm mt-0.5">
                    <svg
                      className="w-5 h-5 text-emerald-400"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] sm:text-xs text-slate-400 font-medium uppercase tracking-wider">
                      ელ-ფოსტა
                    </p>
                    <p className="font-medium text-slate-100 mt-0.5 text-sm sm:text-base group-hover/item:text-emerald-400 transition-colors">
                      info@mattress-shop.ge
                    </p>
                  </div>
                </a>
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-slate-800 relative z-10">
              <p className="text-[10px] sm:text-xs text-slate-400 font-medium uppercase tracking-wider">
                სამუშაო საათები
              </p>
              <p className="font-medium text-emerald-400 mt-0.5 text-sm sm:text-base">
                ორშაბათი - კვირა: 10:00 - 23:00
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
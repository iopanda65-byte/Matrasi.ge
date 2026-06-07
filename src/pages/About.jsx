import React from 'react';

export default function About() {
  return (
    <div className="bg-gradient-to-b from-slate-50 to-slate-100 min-h-screen font-sans text-slate-800 antialiased">
      
      {/* 1. Hero სექცია (მთავარი წარდგენა) */}
      <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 sm:py-28 px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
        {/* რბილი დეკორატიული მანათობელი წრეები ფონზე */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]"></div>
        
        <div className="relative max-w-3xl mx-auto space-y-3 sm:space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-emerald-400 text-[11px] sm:text-xs font-semibold tracking-wider uppercase backdrop-blur-sm">
            ✨ ჩვენი ისტორია
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight sm:leading-none">
            ჯანსაღი ძილი იწყება აქ
          </h1>
          <p className="max-w-2xl mx-auto text-base sm:text-xl text-slate-300 leading-relaxed pt-2">
            ჩვენი მიზანია, თითოეულ თქვენგანს ვაჩუქოთ მშვიდი ღამე და ენერგიით სავსე დილა. ჩვენ არ ვყიდით უბრალოდ მატრასებს, ჩვენ ვქმნით კომფორტის ახალ სტანდარტს.
          </p>
        </div>
      </div>

      {/* 2. ჩვენი მისია და ხარისხი */}
      <div className="max-w-7xl mx-auto py-12 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-center">
          <div className="space-y-4 sm:space-y-6">
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              რატომ ჩვენი მატრასები?
            </h2>
            <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              <p>
                უკვე წლებია, რაც ჩვენი გუნდი სწავლობს ძილის ანატომიას. ჩვენი მატრასები მზადდება ეკოლოგიურად სუფთა, სერტიფიცირებული და ჰიპოალერგიული მასალებისგან, რომლებიც ზუსტად ერგება თქვენი სხეულის კონტურებს.
              </p>
              <p>
                ინოვაციური მემორი ეფექტის (Memory Foam) და დამოუკიდებელი ზამბარების სისტემის (Pocket Spring) კომბინაციით, ჩვენ მივაღწიეთ იდეალურ ბალანსს რბილობასა და ხერხემლის საიმედო საყრდენს შორის.
              </p>
            </div>
          </div>
          
          {/* ვიზუალი ბარათი */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/60 shadow-[0_15px_40px_-20px_rgba(0,0,0,0.05)] flex items-center justify-center text-center relative h-64 sm:h-80 overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-tr from-slate-50 to-emerald-50/30 opacity-50"></div>
            <div className="relative z-10 space-y-4">
              <span className="text-5xl sm:text-6xl block transform group-hover:scale-110 transition-transform duration-500 select-none">🛏️</span>
              <p className="text-slate-500 text-sm sm:text-base font-medium italic max-w-xs sm:max-w-sm mx-auto">
                "ხარისხი, რომელიც იგრძნობა პირველივე ღამიდან"
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 3. უპირატესობები (3-სვეტიანი ბლოკი) */}
      <div className="bg-white border-t border-b border-slate-200/50 py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-6 lg:gap-8">
            
            {/* პუნქტი 1 */}
            <div className="p-4 sm:p-6 text-center md:text-left space-y-3 sm:space-y-4 group">
              <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-700 border border-slate-100 shadow-sm mx-auto md:mx-0 group-hover:bg-emerald-50 group-hover:border-emerald-100 transition-colors duration-300">
                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707m12.86 5.304A7.5 7.5 0 1111.35 4.35 7.5 7.5 0 0117.5 11.65z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900">100% ეკო-მეგობრული</h3>
              <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
                ვიყენებთ მხოლოდ უსაფრთხო, სუნთქვად და ნატურალურ მასალებს, რომლებიც იცავს ბავშვებსა და უფროსებს ალერგიისგან.
              </p>
            </div>

            {/* პუნქტი 2 */}
            <div className="p-4 sm:p-6 text-center md:text-left space-y-3 sm:space-y-4 group">
              <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-700 border border-slate-100 shadow-sm mx-auto md:mx-0 group-hover:bg-emerald-50 group-hover:border-emerald-100 transition-colors duration-300">
                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900">10-წლიანი გარანტია</h3>
              <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
                ჩვენ იმდენად დარწმუნებულები ვართ ჩვენი პროდუქციის გამძლეობაში, რომ თითოეულ მატრასზე ხანგრძლივ გარანტიას გაძლევთ.
              </p>
            </div>

            {/* პუნქტი 3 */}
            <div className="p-4 sm:p-6 text-center md:text-left space-y-3 sm:space-y-4 group">
              <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-700 border border-slate-100 shadow-sm mx-auto md:mx-0 group-hover:bg-emerald-50 group-hover:border-emerald-100 transition-colors duration-300">
                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900">უფასო მიწოდება</h3>
              <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
                მივიტანთ და პირდაპირ საძინებელ ოთახში აგირბენთ მატრასს სრულიად უფასოდ, მთელი ქვეყნის მასშტაბით.
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* 4. მოწოდება ქმედებისკენ (CTA) */}
      <div className="max-w-4xl mx-auto py-14 sm:py-24 px-4 text-center space-y-6 sm:space-y-8">
        <div className="space-y-3">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            მზად ხართ იდეალური ძილისთვის?
          </h2>
          <p className="text-sm sm:text-base text-slate-500 max-w-md mx-auto font-medium px-2">
            დაათვალიერეთ ჩვენი კატალოგი ან მოგვწერეთ, რათა შეგირჩიოთ თქვენზე მორგებული სიხისტისა და ზომის მატრასი.
          </p>
        </div>
        
        {/* მობილურზე ღილაკები თავსდება ვერტიკალურად (full width), პლანშეტზე/კომპიუტერზე — გვერდიგვერდ */}
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 max-w-md sm:max-w-none mx-auto">
          <button className="w-full sm:w-auto px-8 py-4 sm:py-3.5 bg-slate-900 hover:bg-emerald-600 text-white text-base sm:text-sm font-semibold rounded-xl shadow-md transition-all duration-300 active:scale-[0.98]">
            კატალოგის ნახვა
          </button>
          <button className="w-full sm:w-auto px-8 py-4 sm:py-3.5 bg-white hover:bg-slate-50 text-slate-700 text-base sm:text-sm font-semibold rounded-xl border border-slate-200 shadow-sm transition-all duration-300 active:scale-[0.98]">
            კონსულტაცია
          </button>
        </div>
      </div>

    </div>
  );
}
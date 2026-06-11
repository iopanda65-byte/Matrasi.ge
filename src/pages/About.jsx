import React from "react";
// შემოგვაქვს Helmet მეტა ტეგების სამართავად
import { Helmet } from "react-helmet-async";

const FEATURES = [
  {
    icon: (
      <svg
        className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707m12.86 5.304A7.5 7.5 0 1111.35 4.35 7.5 7.5 0 0117.5 11.65z"
        />
      </svg>
    ),
    title: "100% ეკო-მეგობრული",
    desc: "ვიყენებთ მხოლოდ უსაფრთხო, სუნთწვად და ნატურალურ მასალებს, რომლებიც იცავს ბავშვებსა და უფროსებს ალერგიისგან.",
  },
  {
    icon: (
      <svg
        className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
    title: "10-წლიანი გარანტია",
    desc: "ჩვენ იმდენად დარწმუნებულები ვართ ჩვენი პროდუქციის გამძლეობაში, რომ თითოეულ მატრასზე ხანგრძლივ გარანტიას გაძლევთ.",
  },
  {
    icon: (
      <svg
        className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
        />
      </svg>
    ),
    title: "უფასო მიწოდება",
    desc: "მივიტანთ და პირდაპირ საძინებელ ოთახში აგირბენთ მატრასს სრულიად უფასოდ, მთელი ქვეყნის მასშტაბით.",
  },
];

export default function About() {
  const phoneNumber = "+995558686586";

  // Google Schema - სტრუქტურირებული მონაცემები About გვერდისთვის
  const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "ჩვენს შესახებ | გერმანული მატრასების მაღაზია",
    description:
      "შეიტყვეთ მეტი ჩვენი ისტორიის შესახებ. ჩვენ გთავაზობთ ეკოლოგიურად სუფთა გერმანულ მატრასებს, მემორი ეფექტით (Memory Foam) და პოკეტ ზამბარებით (Pocket Spring).",
    publisher: {
      "@type": "Organization",
      name: "გერმანული მატრასები",
      telephone: "+995558686586",
      logo: "https://შენი-დომენი.ge/logo.png", // შეცვალე შენი ლოგოს რეალური მისამართით
    },
  };

  return (
    <div className="bg-gradient-to-b from-slate-50 to-slate-100 min-h-screen font-sans text-slate-800 antialiased overflow-x-hidden">
      {/* ─── SEO მეტა ტეგები ─── */}
      <Helmet>
        <title>ჩვენს შესახებ | გერმანული მატრასების მაღაზია</title>
        <meta
          name="description"
          content="გაიცანით ჩვენი ბრენდი. ჩვენი მიზანია ჯანსაღი და მშვიდი ძილი. ეკოლოგიურად სუფთა მატრასები 10 წლიანი გარანტიითა და უფასო მიწოდებით მთელ საქართველოში."
        />
        <meta
          name="keywords"
          content="ჩვენს შესახებ, chvens shesaxeb, გერმანული მატრასები, ორთოპედიული მატრასები, ჯანსაღი ძილი, memory foam matrasi, pocket spring"
        />

        {/* Open Graph ტეგები სოც. ქსელებისთვის */}
        <meta
          property="og:title"
          content="ჩვენს შესახებ | გერმანული მატრასების მაღაზია"
        />
        <meta
          property="og:description"
          content="ხარისხი, რომელიც იგრძნობა პირველივე ღამიდან. გაიგეთ მეტი ჩვენს მასალებსა და ტექნოლოგიებზე."
        />
        <meta property="og:type" content="website" />

        {/* JSON-LD სქემის ინექცია ბოტებისთვის */}
        <script type="application/ld+json">
          {JSON.stringify(aboutPageSchema)}
        </script>
      </Helmet>

      {/* ─── HERO ─── */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-14 sm:py-28 px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-72 sm:w-96 sm:h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />

        <div className="relative max-w-3xl mx-auto space-y-3 sm:space-y-5">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 text-emerald-400 text-[11px] sm:text-xs font-bold tracking-widest uppercase backdrop-blur-sm">
            ✨ ჩვენი ისტორია
          </span>
          <h1 className="text-[2rem] leading-tight sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
            ჯანსაღი ძილი იწყება აქ
          </h1>
          <p className="max-w-xl mx-auto text-sm sm:text-xl text-slate-300 leading-relaxed pt-1">
            ჩვენი მიზანია, თითოეულ თქვენგანს ვაჩუქოთ მშვიდი ღამე და ენერგიით
            სავსე დილა. ჩვენ არ ვყიდით უბრალოდ მატრასებს — ვქმნით კომფორტის ახალ
            სტანდარტს.
          </p>
        </div>
      </section>

      {/* ─── MISSION ─── */}
      <section className="max-w-7xl mx-auto py-12 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16 items-center">
          <div
            style={{ animationDelay: "150ms" }}
            className="animate-card space-y-4 sm:space-y-6 order-2 lg:order-1"
          >
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              რატომ ჩვენი მატრასები?
            </h2>
            <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              <p>
                უკვე წლებია, რაც ჩვენი გუნდი სწავლობს ძილის ანატომიას. ჩვენი
                მატრასები მზადდება ეკოლოგიურად სუფთა, სერტიფიცირებული და
                ჰიპოალერგიული მასალებისგან, რომლებიც ზუსტად ერგება თქვენი
                სხეულის კონტურებს.
              </p>
              <p>
                ინოვაციური მემორი ეფექტის (Memory Foam) და დამოუკიდებელი
                ზამბარების სისტემის (Pocket Spring) კომბინაციით, მივაღწიეთ
                იდეალურ ბალანსს რბილობასა და ხერხემლის საიმედო საყრდენს შორის.
              </p>
            </div>
          </div>

          {/* ვიზუალი — მობილურზე პატარა, კომპიუტერზე დიდი */}
          <div
            style={{ animationDelay: "300ms" }}
            className="animate-card order-1 lg:order-2 bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-10 border border-slate-200/60 shadow-lg flex items-center justify-center text-center relative h-48 sm:h-80 overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-slate-50 to-emerald-50/30 opacity-50" />
            <div className="relative z-10 space-y-3">
              <span className="text-5xl sm:text-6xl block group-hover:scale-110 transition-transform duration-500 select-none">
                🛏️
              </span>
              <p className="text-slate-500 text-xs sm:text-base font-medium italic max-w-xs mx-auto">
                "ხარისხი, რომელიც იგრძნობა პირველივე ღამიდან"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FEATURES ─── */}
      <section className="bg-white border-t border-b border-slate-200/50 py-10 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-100">
            {FEATURES.map((f, i) => (
              <div
                key={i}
                style={{ animationDelay: `${450 + i * 100}ms` }}
                className="animate-card flex gap-4 md:flex-col md:gap-0 p-5 sm:p-8 group md:text-left"
              >
                {/* ხატულა */}
                <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-slate-50 rounded-xl sm:rounded-2xl flex items-center justify-center border border-slate-100 shadow-sm group-hover:bg-emerald-50 group-hover:border-emerald-100 transition-colors duration-300 md:mb-4">
                  {f.icon}
                </div>
                <div className="space-y-1 sm:space-y-2">
                  <h3 className="text-base sm:text-xl font-bold text-slate-900">
                    {f.title}
                  </h3>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section
        style={{ animationDelay: "850ms" }}
        className="animate-card max-w-4xl mx-auto py-14 sm:py-24 px-4 text-center space-y-5 sm:space-y-8"
      >
        <div className="space-y-2 sm:space-y-3">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            მზად ხართ იდეალური ძილისთვის?
          </h2>
          <p className="text-sm sm:text-base text-slate-500 max-w-md mx-auto leading-relaxed">
            დაათვალიერეთ ჩვენი კატალოგი ან მოგვწერეთ, რათა შეგირჩიოთ თქვენზე
            მორგებული სიხისტისა და ზომის მატრასი.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-3 max-w-xs mx-auto sm:max-w-none">
          <a
            href="/products"
            className="w-full sm:w-auto px-8 py-4 sm:py-3.5 bg-slate-900 hover:bg-emerald-600 text-white text-sm font-semibold rounded-xl shadow-md transition-all duration-200 active:scale-[0.97] text-center"
          >
            კატალოგის ნახვა
          </a>
          <a
            href={`tel:${phoneNumber}`}
            className="w-full sm:w-auto px-8 py-4 sm:py-3.5 bg-white hover:bg-slate-50 text-slate-700 text-sm font-semibold rounded-xl border border-slate-200 shadow-sm transition-all duration-200 active:scale-[0.97] text-center"
          >
            📞 კონსულტაცია
          </a>
        </div>
      </section>
    </div>
  );
}

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_p5htc7d";
const TEMPLATE_ID = "template_kh3udza";
const PUBLIC_KEY = "eYu17pNcJigA8JlG1";

const CONTACT_ITEMS = [
  {
    href: "https://maps.app.goo.gl/fqMvKCkxZXhM3iZX7",
    label: "მისამართი",
    value: "კაეროს ქუჩა, თბილისი",
    icon: (
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
    ),
  },
  {
    href: "tel:+995558686586",
    label: "ტელეფონი",
    value: "558 686 586",
    icon: (
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
    ),
  },
  {
    href: "mailto:info@mattress-shop.ge",
    label: "ელ-ფოსტა",
    value: "info@mattress-shop.ge",
    icon: (
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
    ),
  },
];

const INPUT_CLS =
  "w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-900 focus:bg-white transition-all text-base sm:text-sm";

export default function Contact() {
  const formRef = useRef();
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        formRef.current,
        PUBLIC_KEY
      );
      
      setStatus("success");
      formRef.current.reset();
    } catch (err) {
      console.error("EmailJS Error:", err);
      setStatus("error");
    }
  };

  return (
    <div className="bg-gradient-to-b from-slate-50 to-slate-100 min-h-screen py-10 sm:py-16 px-4 sm:px-6 lg:px-8 font-sans antialiased overflow-x-hidden">
      <div className="max-w-6xl mx-auto">
        {/* სათაურის სექცია */}
        <div className="text-center mb-10 sm:mb-14 space-y-2.5">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/5 text-slate-600 text-[11px] font-semibold tracking-widest uppercase">
            ✉️ მზად ვართ დასახმარებლად
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            დაგვიკავშირდით
          </h1>
          <p className="text-sm sm:text-base text-slate-500 max-w-xl mx-auto leading-relaxed">
            გაქვთ კითხვები ჩვენს მატრასებთან დაკავშირებით? დაგვიტოვეთ
            შეტყობინება და ჩვენი გუნდი დაგეხმარებათ.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-8 items-start">
          {/* საკონტაქტო ბარათი */}
          <div 
            style={{ animationDelay: "150ms" }}
            className="animate-card lg:col-span-1 order-1 lg:order-2 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-xl relative overflow-hidden"
          >
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10">
              <h3 className="text-lg sm:text-2xl font-bold mb-1.5 tracking-tight">
                **საკონტაქტო ინფო**
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6 sm:mb-8">
                ესტუმრეთ შოურუმს ან დაგვიკავშირდით მოსახერხებელი არხით.
              </p>
              <div className="grid grid-cols-1 gap-4 sm:gap-6">
                {CONTACT_ITEMS.map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      item.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="flex items-center gap-3 group/item"
                  >
                    <div className="shrink-0 bg-white/10 p-2.5 rounded-xl border border-white/5">
                      {item.icon}
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">
                        {item.label}
                      </p>
                      <p className="font-medium text-slate-100 text-sm sm:text-base group-hover/item:text-emerald-400 transition-colors truncate">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
              <div className="mt-6 sm:mt-8 pt-5 border-t border-slate-700/60">
                <p className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">
                  სამუშაო საათები
                </p>
                <p className="font-semibold text-emerald-400 mt-0.5 text-sm sm:text-base">
                  ორშ–კვირა: 10:00–23:00
                </p>
              </div>
            </div>
          </div>

          {/* ფორმა */}
          <div 
            style={{ animationDelay: "300ms" }}
            className="animate-card lg:col-span-2 order-2 lg:order-1 bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-10 border border-slate-200/60 shadow-lg"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-5 sm:mb-6 tracking-tight">
              მოგვწერეთ შეტყობინება
            </h3>

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="space-y-4 sm:space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <div>
                  <label className="block text-[10px] sm:text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                    სახელი და გვარი
                  </label>
                  <input
                    type="text"
                    name="from_name"
                    placeholder="გიორგი კაპანაძე"
                    className={INPUT_CLS}
                    required
                  />
                </div>
                <div>
                  <label className="block text-[10px] sm:text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                    ელ-ფოსტა
                  </label>
                  <input
                    type="email"
                    name="from_email"
                    placeholder="giorgi@example.com"
                    className={INPUT_CLS}
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] sm:text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                  ტელეფონის ნომერი
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="555 XXXXXX"
                  className={INPUT_CLS}
                />
              </div>

              <div>
                <label className="block text-[10px] sm:text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                  რომელი მატრასი გაინტერესებთ?
                </label>
                <div className="relative">
                  <select
                    name="mattress"
                    className={
                      INPUT_CLS + " appearance-none pr-10 text-slate-700"
                    }
                  >
                    <option>ორთოპედიული მატრასი "Premium"</option>
                    <option>მემორი ეფექტის მქონე მატრასი "Cloud"</option>
                    <option>საბავშვო ეკოლოგიური მატრასი</option>
                    <option>სხვა / ზოგადი კითხვა</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-slate-500">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-[10px] sm:text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                  შეტყობინება
                </label>
                <textarea
                  rows="4"
                  name="message"
                  placeholder="მოგვწერეთ დეტალურად..."
                  className={INPUT_CLS + " resize-none"}
                />
              </div>

              <div className="pt-1 space-y-2">
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full sm:w-auto px-8 py-4 sm:py-3.5 bg-slate-900 hover:bg-emerald-600 disabled:opacity-60 text-white text-sm font-semibold rounded-xl shadow-md transition-all duration-200 active:scale-[0.97]"
                >
                  {status === "loading"
                    ? "იგზავნება..."
                    : "შეტყობინების გაგზავნა →"}
                </button>
                {status === "success" && (
                  <p className="text-emerald-600 text-sm font-medium">
                    ✓ შეტყობინება წარმატებით გაიგზავნა!
                  </p>
                )}
                {status === "error" && (
                  <p className="text-red-500 text-sm font-medium">
                    შეცდომა, გთხოვთ სცადოთ თავიდან.
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
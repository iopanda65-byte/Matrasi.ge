import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  // დამხმარე ფუნქცია აქტიური გვერდის გასაფერადებლად
  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* ბრენდი / ლოგო */}
        <div className="flex items-center gap-2">
          <Link to="/" className="text-xl font-bold tracking-tight text-slate-800 hover:opacity-90 transition">
            <span className="text-blue-500">☁️</span> CozyMattress
          </Link>
        </div>

        {/* მთავარი მენიუ (დესკტოპისთვის) */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link 
            to="/" 
            className={`transition-colors duration-200 ${isActive("/") ? "text-blue-600 font-semibold" : "text-slate-600 hover:text-slate-900"}`}
          >
            მთავარი
          </Link>
          <Link 
            to="/products" 
            className={`transition-colors duration-200 ${isActive("/products") ? "text-blue-600 font-semibold" : "text-slate-600 hover:text-slate-900"}`}
          >
            პროდუქტები
          </Link>
          <Link 
            to="/about" 
            className={`transition-colors duration-200 ${isActive("/about") ? "text-blue-600 font-semibold" : "text-slate-600 hover:text-slate-900"}`}
          >
            ჩვენს შესახებ
          </Link>
          <Link 
            to="/contact" 
            className={`transition-colors duration-200 ${isActive("/contact") ? "text-blue-600 font-semibold" : "text-slate-600 hover:text-slate-900"}`}
          >
            კონტაქტი
          </Link>
        </nav>

        {/* ცარიელი ბლოკი მარჯვენა მხარეს, რომ დესკტოპზე მენიუ ლამაზად ცენტრში/მარჯვნივ განაწილდეს */}
        <div className="hidden md:block w-20"></div>

      </div>

      {/* მობილური მენიუ მცირე ეკრანებისთვის (მხოლოდ ნავიგაციის ლინკები) */}
      <div className="md:hidden border-t border-slate-100 bg-white px-4 py-2">
        <nav className="flex justify-around text-xs font-medium text-slate-600">
          <Link to="/" className={`flex flex-col items-center gap-1 ${isActive("/") ? "text-blue-600" : ""}`}>
            <span>🏠</span> მთავარი
          </Link>
          <Link to="/products" className={`flex flex-col items-center gap-1 ${isActive("/products") ? "text-blue-600" : ""}`}>
            <span>🛏️</span> პროდუქტები
          </Link>
          <Link to="/about" className={`flex flex-col items-center gap-1 ${isActive("/about") ? "text-blue-600" : ""}`}>
            <span>ℹ️</span> ჩვენზე
          </Link>
          <Link to="/contact" className={`flex flex-col items-center gap-1 ${isActive("/contact") ? "text-blue-600" : ""}`}>
            <span>📞</span> კონტაქტი
          </Link>
        </nav>
      </div>
    </header>
  );
}
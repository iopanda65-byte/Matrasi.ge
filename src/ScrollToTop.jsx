import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  // იღებს მიმდინარე URL-ის ლოკაციას
  const { pathname } = useLocation();

  useEffect(() => {
    // ყოველ ჯერზე, როცა ფეისმოკვლევი (pathname) შეიცვლება, სქროლი ავა 0-ზე
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // ეს კომპონენტი ვიზუალურად არაფერს არ არენდერებს
};

export default ScrollToTop;
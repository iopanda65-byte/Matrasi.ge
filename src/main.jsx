import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { HelmetProvider } from "react-helmet-async";
import ReactGA from "react-ga4"; // 1. შემოვიტანეთ ანალიტიკის ბიბლიოთეკა

// 2. გავაკეთეთ ინიციალიზაცია შენი Measurement ID-ით
ReactGA.initialize("G-T7R5RDYZ5L");

// 3. დავაფიქსირეთ საიტზე შემოსვლის (პირველი გვერდის) ნახვა
ReactGA.send({ hitType: "pageview", page: window.location.pathname });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>,
);

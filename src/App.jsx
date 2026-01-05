/* eslint-disable no-undef */
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReactPixel from "react-facebook-pixel";
e;

// Import Layout Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PixelTracker from "./components/PixelTracker";
import GoogleTranslateWidget from "./components/GoogleTranslateWidget";

// Import Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import PricingPage from "./pages/PricingPage";
import ContactPage from "./pages/Contact";
import TermsPage from "./pages/TermsPage";

function App() {
  useEffect(() => {
    // Ganti dengan Pixel ID Anda
    const pixelId = "1546910876619159";

    const options = {
      autoConfig: true, // Opsional, default: true
      debug: false, // Aktifkan true jika masih development
    };

    ReactPixel.init(pixelId, options);
    ReactPixel.pageView(); // Mentrack halaman pertama yang dibuka
  }, []);
  return (
    <Router>
      <div className="font-sans antialiased bg-black min-h-screen text-white">
        {/* Widget & Navbar akan SELALU MUNCUL di semua halaman */}
        {/* <GoogleTranslateWidget /> */}
        <Navbar />
        <PixelTracker />

        {/* Konten akan berubah-ubah sesuai URL */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/terms-of-service" element={<TermsPage />} />
        </Routes>

        {/* Footer akan SELALU MUNCUL di semua halaman */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;

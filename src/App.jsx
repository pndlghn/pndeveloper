import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import Layout Components
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import PixelTracker from "./components/ui/PixelTracker";
import GoogleTranslateWidget from "./components/layout/GoogleTranslateWidget";

// Import Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import PricingPage from "./pages/PricingPage";
import ContactPage from "./pages/Contact";
import TermsPage from "./pages/TermsPage";

function App() {
  return (
    <Router>
      <PixelTracker />
      <div className="font-sans antialiased bg-black min-h-screen text-white">
        {/* Widget & Navbar akan SELALU MUNCUL di semua halaman */}
        {/* <GoogleTranslateWidget /> */}
        <Navbar />

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

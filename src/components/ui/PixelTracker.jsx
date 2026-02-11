// src/components/PixelTracker.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactPixel from "react-facebook-pixel";

const PixelTracker = () => {
  const location = useLocation();

  useEffect(() => {
    ReactPixel.init("1546910876619159");
  }, []);

  useEffect(() => {
    // Fire event 'PageView' setiap kali lokasi (URL) berubah
    ReactPixel.pageView();
  }, [location]);

  return null; // Komponen ini tidak merender apa-apa
};

export default PixelTracker;

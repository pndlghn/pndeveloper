// src/components/PixelTracker.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactPixel from "react-facebook-pixel";

const PixelTracker = () => {
  const location = useLocation();

  useEffect(() => {
    // Inisialisasi Pixel hanya sekali (saat komponen di-mount)
    // Ganti 'YOUR_PIXEL_ID' dengan ID Pixel kamu
    // Atau gunakan process.env.REACT_APP_PIXEL_ID jika pakai .env
    ReactPixel.init("YOUR_PIXEL_ID");
  }, []);

  useEffect(() => {
    // Fire event 'PageView' setiap kali lokasi (URL) berubah
    ReactPixel.pageView();
  }, [location]);

  return null; // Komponen ini tidak merender apa-apa
};

export default PixelTracker;

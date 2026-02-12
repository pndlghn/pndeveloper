import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactPixel from "react-facebook-pixel";

const PixelTracker = () => {
  const location = useLocation();

  useEffect(() => {
    // 1. Inisialisasi hanya sekali saat pertama kali load
    ReactPixel.init("1546910876619159", {
      debug: true, // Aktifkan debug untuk melihat log di console browser
      autoConfig: true,
    });
  }, []); // Empty array memastikan init cuma jalan sekali

  useEffect(() => {
    // 2. Track PageView setiap kali URL berubah
    ReactPixel.pageView();
  }, [location]);

  return null;
};

export default PixelTracker;

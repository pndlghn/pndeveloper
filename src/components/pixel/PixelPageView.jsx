import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { initFacebookPixel, trackPageView } from "../../lib/fbPixel";

const PixelTracker = () => {
  const location = useLocation();

  useEffect(() => {
    // Inisialisasi Meta Pixel hanya sekali saat pertama kali load
    initFacebookPixel();
  }, []);

  useEffect(() => {
    // Track PageView setiap kali URL berubah
    trackPageView();
  }, [location]);

  return null;
};

export default PixelTracker;

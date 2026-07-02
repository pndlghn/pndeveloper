import ReactPixel from "react-facebook-pixel";

// Ganti sesuai Pixel ID Meta Ads Manager kamu
export const FB_PIXEL_ID = "1546910876619159";

let isInitialized = false;

/**
 * Inisialisasi Meta Pixel. Aman dipanggil berkali-kali (hanya jalan sekali).
 */
export const initFacebookPixel = () => {
  if (isInitialized) return;
  ReactPixel.init(FB_PIXEL_ID, null, {
    autoConfig: true,
    debug: false,
  });
  isInitialized = true;
};

/**
 * Track event PageView. Panggil setiap kali route/URL berubah.
 */
export const trackPageView = () => {
  if (!isInitialized) initFacebookPixel();
  ReactPixel.pageView();
};

/**
 * Track event Lead. Panggil di onClick tombol yang mengarah ke WhatsApp.
 * @param {string} contentName - Nama tombol/paket yang diklik (untuk pelaporan di Ads Manager)
 * @param {object} extra - Parameter tambahan opsional (value, currency, dll)
 */
export const trackLead = (contentName, extra = {}) => {
  if (!isInitialized) initFacebookPixel();
  ReactPixel.track("Lead", {
    content_name: contentName,
    content_category: "WhatsApp CTA",
    ...extra,
  });
};

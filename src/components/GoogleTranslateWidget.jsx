import React, { useEffect, useState } from "react";

const GoogleTranslateWidget = () => {
  const [currentLang, setCurrentLang] = useState("id");

  useEffect(() => {
    // 1. Inisialisasi
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "id",
          includedLanguages: "en,id",
          autoDisplay: false,
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        },
        "google_translate_element"
      );
    };

    // 2. Inject Script
    const addScript = document.createElement("script");
    addScript.setAttribute(
      "src",
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    );
    document.body.appendChild(addScript);

    // 3. Cek Cookie
    const getCookie = (name) => {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop().split(";").shift();
    };

    const cookieLang = getCookie("googtrans");
    if (cookieLang) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      if (cookieLang.includes("/en")) setCurrentLang("en");
      else setCurrentLang("id");
    }

    // --- TAMBAHAN BARU: OBSERVER ---
    // Fungsi ini memantau perubahan pada <body>.
    // Jika Google menambahkan style="top: 40px", kita hapus seketika.
    const observer = new MutationObserver(() => {
      const body = document.body;
      if (body.style.top) {
        body.style.top = "0px"; // Paksa kembali ke 0
      }
      if (body.style.position === "relative") {
        body.style.position = "static"; // Paksa static
      }
    });

    // Mulai memantau body
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["style"],
    });

    // Cleanup saat unmount
    return () => observer.disconnect();
    // -------------------------------
  }, []);

  const changeLanguage = (langCode) => {
    const cookieValue = `/id/${langCode}`;
    document.cookie = `googtrans=${cookieValue}; path=/; domain=${window.location.hostname}`;
    document.cookie = `googtrans=${cookieValue}; path=/;`;
    setCurrentLang(langCode);
    window.location.reload();
  };

  return (
    <>
      <div id="google_translate_element" className="hidden"></div>

      {/* FLOATING BUTTONS */}
      <div className="fixed top-1/2 left-0 z-9999 -translate-y-1/2 flex flex-col shadow-2xl rounded-r-xl overflow-hidden bg-white border border-gray-200">
        {/* Tombol INDONESIA */}
        <button
          onClick={() => changeLanguage("id")}
          className={`p-3 flex items-center justify-center transition-all duration-300 group relative
            ${
              currentLang === "id"
                ? "bg-blue-600"
                : "bg-white hover:bg-gray-100"
            }
          `}
        >
          <div className="w-6 h-4 border border-gray-200 flex flex-col">
            <div className="h-2 bg-red-600 w-full"></div>
            <div className="h-2 bg-white w-full"></div>
          </div>
          <span className="absolute left-full ml-2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Indonesia
          </span>
        </button>

        <div className="h-px w-full bg-gray-200"></div>

        {/* Tombol INGGRIS */}
        <button
          onClick={() => changeLanguage("en")}
          className={`p-3 flex items-center justify-center transition-all duration-300 group relative
            ${
              currentLang === "en"
                ? "bg-blue-600"
                : "bg-white hover:bg-gray-100"
            }
          `}
        >
          <div className="w-6 h-4 bg-blue-800 border border-gray-200 relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-0.5 bg-white rotate-45 transform"></div>
              <div className="w-full h-0.5 bg-white -rotate-45 transform absolute"></div>
              <div className="w-full h-1 bg-white absolute"></div>
              <div className="h-full w-1 bg-white absolute"></div>
              <div className="w-full h-0.5 bg-red-600 absolute"></div>
              <div className="h-full w-0.5 bg-red-600 absolute"></div>
            </div>
          </div>
          <span className="absolute left-full ml-2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            English
          </span>
        </button>
      </div>
    </>
  );
};

export default GoogleTranslateWidget;

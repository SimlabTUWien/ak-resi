import { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext({ language: "DE", setLanguage: () => {} });

// Hook for easy use
export const useLanguage = () => useContext(LanguageContext);

// Provider component
export const LanguageProvider = ({ children }) => {
  // const [language, setLanguage] = useState("DE"); // default language
  const [language, _setLanguage] = useState("DE"); // default language

  useEffect(() => {
    // Update the <html lang=""> attribute
    document.documentElement.lang = language.toLowerCase();
  }, [language]);

  // Intercept setLanguage to always force DE -- remove this if you want to allow language switching!
  const setLanguage = (lang) => {
    if (lang !== "DE") {
      console.warn(`Language switching disabled. Staying in DE (attempted: ${lang}).`);
    }
    _setLanguage("DE");
  };
  // ------------------------------------------------------------------------------------------------

  const value = { language, setLanguage };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

import React, { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext();

// Hook for easy use
export const useLanguage = () => useContext(LanguageContext);

// Provider component
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("DE"); // default language

  useEffect(() => {
    // Update the <html lang=""> attribute
    document.documentElement.lang = language.toLowerCase();
  }, [language]);

  const value = { language, setLanguage };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

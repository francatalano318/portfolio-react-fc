import { createContext, useState, useEffect } from "react";

export const LanguageContext = createContext();

const getBrowserLanguage = () => {
  return navigator.language.startsWith("es") ? "es" : "en";
};

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState("es");

  useEffect(() => {
    const savedLang = localStorage.getItem("lang");
    setLang(savedLang || getBrowserLanguage());
  }, []);

  const toggleLanguage = () => {
    setLang(prev => {
      const newLang = prev === "es" ? "en" : "es";
      localStorage.setItem("lang", newLang);
      return newLang;
    });
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};


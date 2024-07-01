
import React, { createContext, useState, useContext, useEffect } from 'react';
import i18n from 'i18next';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    const currentLanguage = localStorage.getItem('language');
    if (currentLanguage) {
      setLanguage(currentLanguage);
    }
  }, []);

  const changeLanguage = (lng) => {
    setLanguage(lng);
    localStorage.setItem('language', lng);
    i18n.changeLanguage(lng);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);

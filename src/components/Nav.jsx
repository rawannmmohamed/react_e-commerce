import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import { useTranslation } from "react-i18next";

const Nav = () => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLanguage = i18n.language === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(newLanguage);
  };
  return (
    <nav>
    <h2 className="logo">Brainwave.io</h2>
    <ul className="nav-links">
      <li><Link to="/">{t('ourShop')}</Link></li>
      <li><Link to="/about">{t('aboutUs')}</Link></li>
      <li><Link to="/news">{t('news')}</Link></li>
      <li><Link to="/contact">{t('contactUs')}</Link></li>
      <button onClick={toggleLanguage}>{t('language')}</button>
    </ul>
  </nav>
  );
};

export default Nav;

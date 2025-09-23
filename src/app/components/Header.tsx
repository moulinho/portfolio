import React from "react";
import { useTranslation } from 'react-i18next';

function Header() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="header sticky top-0 z-50 mb-14 w-[100vw] md:w-[30vw] mx-auto bg-orange-50 pb-5 pt-1">
      <ul className=" flex flex-wrap justify-center md:justify-evenly items-center sticky h-12 w-[90vw] md:w-[25vw] bg-black text-white mt-4 mx-auto rounded-md shadow-lg">
        <li className="px-4 py-2 text-sm md:text-base hover:text-gray-300 transition">
          <a href="#about">{t('nav.about')}</a>
        </li>
        <li className="px-4 py-2 text-sm md:text-base hover:text-gray-300 transition">
          <a href="#experiences">{t('nav.experiences')}</a>
        </li>
        <li className="px-4 py-2 text-sm md:text-base hover:text-gray-300 transition">
          <a href="#projects">{t('nav.projects')}</a>
        </li>
        <li className="px-2 py-2 text-sm md:text-base">
          <div className="flex gap-1">
            <button
              onClick={() => changeLanguage('fr')}
              className={`px-2 py-1 rounded text-xs ${
                i18n.language === 'fr' ? 'bg-orange-500' : 'hover:bg-gray-700'
              }`}
              title={t('language.french')}
            >
              FR
            </button>
            <button
              onClick={() => changeLanguage('en')}
              className={`px-2 py-1 rounded text-xs ${
                i18n.language === 'en' ? 'bg-orange-500' : 'hover:bg-gray-700'
              }`}
              title={t('language.english')}
            >
              EN
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Header;

import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

function Header() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  useEffect(() => {
    const userLang = navigator.language || navigator.languages[0];
    const langCode = userLang.split("-")[0];

    if (["fr", "en"].includes(langCode) && i18n.language !== langCode) {
      i18n.changeLanguage(langCode);
    } else {
      i18n.changeLanguage("en");
    }
  }, [i18n]);

  return (
    <header className="header sticky top-0 z-50 mb-14 w-full md:w-auto mx-auto bg-orange-50 pb-5 pt-1">
      <nav aria-label={t("nav.about")} className="flex flex-nowrap justify-center md:justify-evenly items-center sticky h-12 w-[95vw] md:w-[450px] lg:w-[500px] bg-black text-white mt-4 mx-auto rounded-md shadow-lg">
        <ul className="flex flex-nowrap justify-center md:justify-evenly items-center w-full">
        <li className="px-3 md:px-4 py-2 text-sm md:text-base hover:text-gray-300 transition whitespace-nowrap">
          <a href="#about">{t("nav.about")}</a>
        </li>
        <li className="px-3 md:px-4 py-2 text-sm md:text-base hover:text-gray-300 transition whitespace-nowrap">
          <a href="#experiences">{t("nav.experiences")}</a>
        </li>
        <li className="px-3 md:px-4 py-2 text-sm md:text-base hover:text-gray-300 transition whitespace-nowrap">
          <a href="#projects">{t("nav.projects")}</a>
        </li>
        <li className="px-2 py-2 text-sm md:text-base">
          <div className="flex gap-1" role="group" aria-label={t("language.switch")}>
            <button
              onClick={() => changeLanguage("fr")}
              className={`px-2 py-1 rounded text-xs ${
                i18n.language === "fr" ? "bg-orange-500" : "hover:bg-gray-700"
              }`}
              aria-label={t("language.french")}
              aria-pressed={i18n.language === "fr"}
            >
              FR
            </button>
            <button
              onClick={() => changeLanguage("en")}
              className={`px-2 py-1 rounded text-xs ${
                i18n.language === "en" ? "bg-orange-500" : "hover:bg-gray-700"
              }`}
              aria-label={t("language.english")}
              aria-pressed={i18n.language === "en"}
            >
              EN
            </button>
          </div>
        </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

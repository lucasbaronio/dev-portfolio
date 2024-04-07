import React, { useEffect, useState } from 'react';
import { Avatar } from 'flowbite-react';
import { useTranslation } from 'react-i18next';

var SPANISH_REGEX = /^es(-[A-Z]{2})?$/;

const LANG = {
  SPANISH: 'es',
  ENGLISH: 'en',
};

const FALLBACK_LANG = LANG.SPANISH;

const avatarTheme = {
  root: {
    bordered: 'group-hover:p-[1px] group-hover:ring-2',
    color: {
      accent: 'ring-accent-100 dark:ring-accent-100',
    },
  },
};

const DropdownLenguageSelector = () => {
  const { i18n } = useTranslation();
  const [currentLang, setCurrentLang] = useState();

  useEffect(() => {
    if (SPANISH_REGEX.test(i18n.language)) setCurrentLang(LANG.SPANISH);
    else setCurrentLang(LANG.ENGLISH);
  }, [i18n.language]);

  const setSpanishLang = () => {
    i18n.changeLanguage(LANG.SPANISH);
  };

  const setEnglishLang = () => {
    i18n.changeLanguage(LANG.ENGLISH);
  };

  return (
    <div className="relative group">
      <button
        className="flex items-center h-12 sm:h-full w-full sm:w-auto px-8 hover:text-accent-100"
        type="button"
      >
        <Avatar
          img={`/${currentLang ?? FALLBACK_LANG}.png`}
          size="sm"
          rounded
          bordered
          color="accent"
          theme={avatarTheme}
        />{' '}
        <svg
          className="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      <div className="group-hover:block hidden absolute top-12 left-4 sm:left-auto sm:right-4 z-10 rounded-lg shadow w-40 bg-bg-200 dark:bg-bg-200">
        <ul className="flex flex-col text-gray-700 dark:text-gray-200">
          <li>
            <button
              onClick={setSpanishLang}
              className="flex items-center group w-full gap-2 px-2 py-2 hover:bg-bg-300 rounded-ss-lg rounded-se-lg"
            >
              <Avatar size="sm" img={`/${LANG.SPANISH}.png`} rounded />
              <span className="group-hover:text-accent-100 dark:group-hover:text-accent-100">
                Español
              </span>
            </button>
          </li>
          <li>
            <button
              onClick={setEnglishLang}
              className="flex items-center group w-full gap-2 px-2 py-2 hover:bg-bg-300 rounded-es-lg rounded-ee-lg"
            >
              <Avatar size="sm" img={`/${LANG.ENGLISH}.png`} rounded />
              <span className="group-hover:text-accent-100 dark:group-hover:text-accent-100">
                Inglés
              </span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

DropdownLenguageSelector.propTypes = {};

export default DropdownLenguageSelector;

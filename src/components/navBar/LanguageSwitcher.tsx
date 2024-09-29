import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

export const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null); // Ref to track the component

  const languages = [
    { code: 'en', name: 'en', flag: '🇬🇧' },
    { code: 'ar', name: 'ع', flag: '🇪🇬' },
  ];

  const currentLanguage = i18n.language;

  const handleLanguageChange = (code: string) => {
    i18n.changeLanguage(code);
    localStorage.setItem('language', code);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);

  return (
    <div className="relative p-4" ref={ref}>
      {' '}
      <div
        className="cursor-pointer text-xl md:text-2xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        {languages.find((lang) => lang.code === currentLanguage)?.flag}
      </div>
      {isOpen && (
        <ul
          className={`absolute ${currentLanguage === 'ar' ? 'left-0' : 'right-0'} mt-5 w-16 bg-primaryColor bg-opacity-85
         rounded shadow-lg z-10`}
        >
          {languages.map((lang) => (
            <li
              key={lang.code}
              className="flex items-center justify-between px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleLanguageChange(lang.code)}
            >
              <div className="flex items-center">
                <span>{lang.flag}</span>
                <span className="ml-2">{lang.name}</span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

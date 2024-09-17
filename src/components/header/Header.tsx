import { useTranslation } from 'react-i18next';
import ClerkAccount from '../clerkAccount/ClerkAccount.tsx';

function Header() {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = async () => {
    const currentLanguage = i18n.language;
    const newLanguage = currentLanguage === 'en' ? 'ar' : 'en';
    await i18n.changeLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
  };
  return (
    <>
      <nav
        id="nav"
        className="fixed inset-x-0 top-0 flex flex-row justify-between z-20 text-white bg-transparent"
      >
        <div className="p-4">
          <div className="font-extrabold tracking-widest text-xl cursor-pointer">
            {t('EG Theater')}
            <a
              href="#"
              className="transition duration-500 hover:text-indigo-500 "
            ></a>
          </div>
        </div>
        <div className="p-4 hidden md:flex flex-row justify-between font-bold">
          <a
            id="hide-after-click"
            href="#about"
            className="mx-4 text-lg  border-b-2 border-transparent hover:border-b-2 hover:border-indigo-300 transition duration-500"
          >
            {t('ABOUT')}
          </a>
          <a
            id="hide-after-click"
            href="#about"
            className="mx-4 text-lg  border-b-2 border-transparent hover:border-b-2 hover:border-indigo-300 transition duration-500"
          >
            {t('THEATER_SCRIPTS')}
          </a>
          <ClerkAccount />
          <a
            onClick={handleLanguageChange}
            className="mx-4 text-lg border-b-2 border-transparent hover:border-b-2 hover:border-indigo-300 transition duration-500 cursor-pointer"
          >
            {t('OTHER_LANGUAGE')}
          </a>
        </div>
      </nav>
    </>
  );
}

export default Header;

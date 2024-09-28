import { useTranslation } from 'react-i18next';
import ClerkAccount from '../clerkAccount/ClerkAccount.tsx';
import { useState } from 'react';
import { NavBarButton } from './NavBarButton.tsx';
import { HamburgerMenuButton } from './HamburgerMenuButton.tsx';
import './NavBar.css';

function NavBar() {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
        className="bg-black
        fixed inset-x-0 top-0 flex flex-row justify-between z-50 text-white shadow-lg h-16"
      >
        <div className="p-4 md:hidden flex items-center">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
        <section className="p-4 hidden md:flex flex-row justify-between font-bold">
          <NavBarButton to="/about" text={t('ABOUT')} />
          <NavBarButton to="/shows" text={t('SHOWS')} />
          <NavBarButton to="/theater-scripts" text={t('THEATER_SCRIPTS')} />
          <NavBarButton to="/podcasts" text={t('PODCASTS')} />
        </section>
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-black p-4 flex flex-col space-y-4 font-bold">
            <HamburgerMenuButton
              to="/"
              onClickFn={toggleMenu}
              text={t('HOME')}
            />
            <HamburgerMenuButton
              to="/shows"
              onClickFn={toggleMenu}
              text={t('SHOWS')}
            />
            <HamburgerMenuButton
              to="/theater-scripts"
              onClickFn={toggleMenu}
              text={t('THEATER_SCRIPTS')}
            />
            <HamburgerMenuButton
              to="/podcasts"
              onClickFn={toggleMenu}
              text={t('PODCASTS')}
            />
            <HamburgerMenuButton
              to="/about"
              onClickFn={toggleMenu}
              text={t('ABOUT')}
            />
            <ClerkAccount />
            <a
              onClick={() => {
                handleLanguageChange();
                toggleMenu();
              }}
              className="hamburger-button"
            >
              {t('OTHER_LANGUAGE')}
            </a>
          </div>
        )}
        <section className="p-4 hidden md:flex font-extrabold tracking-widest text-xl cursor-pointer">
          <NavBarButton to="/" text={t('EG Theater')} />
          <ClerkAccount />
          <a onClick={handleLanguageChange} className="navbar-button">
            {t('OTHER_LANGUAGE')}
          </a>
        </section>
      </nav>
    </>
  );
}

export default NavBar;

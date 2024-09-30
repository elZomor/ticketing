import { useTranslation } from 'react-i18next';
import ClerkAccount from '../clerkAccount/ClerkAccount.tsx';
import { useState } from 'react';
import { NavBarButton } from './NavBarButton.tsx';
import { HamburgerMenuButton } from './HamburgerMenuButton.tsx';
import './NavBar.css';
import { LanguageSwitcher } from './LanguageSwitcher.tsx';
import { HamburgerMenuIcon } from './HamburgerMenuIcon.tsx';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
function NavBar() {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav
        id="nav"
        className="bg-black
        fixed inset-x-0 top-0 flex flex-row justify-between z-50 text-gold h-16"
      >
        <div className="md:hidden flex items-center flex-row justify-between w-full h-16">
          <HamburgerMenuIcon toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
          <Link
            to="/"
            className="relative flex items-center justify-center h-16 overflow-hidden"
          >
            <img
              src={logo}
              alt="Logo"
              className=" cursor-pointer h-30 w-40 object-contain"
            />
          </Link>
          <LanguageSwitcher />
        </div>

        <section className=" hidden md:flex flex-row justify-between font-bold">
          <Link
            to="/"
            className="relative flex items-center justify-center h-16 overflow-hidden"
          >
            <img
              src={logo}
              alt="Logo"
              className=" cursor-pointer max-h-30 w-40 object-contain"
            />
          </Link>
          <ClerkAccount />
          <NavBarButton to="/shows" text={t('SHOWS')} />
          <NavBarButton to="/theater-scripts" text={t('THEATER_SCRIPTS')} />
          <NavBarButton to="/podcasts" text={t('PODCASTS')} />
          <NavBarButton to="/about" text={t('ABOUT')} />
        </section>
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-primaryColor bg-opacity-85 p-4 flex flex-col space-y-4 font-bold">
            <ClerkAccount />
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
          </div>
        )}
        <section className=" hidden md:flex flex-row h-16">
          <LanguageSwitcher />
        </section>
      </nav>
    </>
  );
}

export default NavBar;

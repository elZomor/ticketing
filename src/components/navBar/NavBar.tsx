import { useTranslation } from 'react-i18next';
import ClerkAccount from '../clerkAccount/ClerkAccount.tsx';
import { useState } from 'react';
import { NavBarButton } from './NavBarButton.tsx';
import { HamburgerMenuButton } from './HamburgerMenuButton.tsx';
import './NavBar.css';
import { LanguageSwitcher } from './LanguageSwitcher.tsx';
import { HamburgerMenuIcon } from './HamburgerMenuIcon.tsx';

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
        className="bg-primaryColor bg-opacity-85
        fixed inset-x-0 top-0 flex flex-row justify-between z-50 text-gold shadow-lg h-16"
      >
        <div className="p-4 md:hidden flex items-center">
          <HamburgerMenuIcon toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
        </div>
        <div className="p-4 md:hidden flex">
          <LanguageSwitcher />
        </div>

        <section className="p-4 hidden md:flex flex-row justify-between font-bold">
          <ClerkAccount />
          <NavBarButton to="/shows" text={t('SHOWS')} />
          <NavBarButton to="/theater-scripts" text={t('THEATER_SCRIPTS')} />
          <NavBarButton to="/podcasts" text={t('PODCASTS')} />
          <NavBarButton to="/about" text={t('ABOUT')} />
        </section>
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-darkRed bg-opacity-60 p-4 flex flex-col space-y-4 font-bold">
            <ClerkAccount />
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
          </div>
        )}
        <section className="p-4 hidden md:flex">
          <LanguageSwitcher />
        </section>
      </nav>
    </>
  );
}

export default NavBar;

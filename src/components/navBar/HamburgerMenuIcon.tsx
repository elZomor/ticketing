import { FC } from 'react';

type HamburgerMenuIconProps = { toggleMenu: () => void; isMenuOpen: boolean };

export const HamburgerMenuIcon: FC<HamburgerMenuIconProps> = ({
  toggleMenu,
  isMenuOpen,
}) => {
  return (
    <button className="relative group" onClick={toggleMenu}>
      <div
        className={`relative flex overflow-hidden items-center justify-center rounded-full w-12 h-12
          transform transition-all bg-primaryColor bg-opacity-80`}
      >
        <div
          className={`flex flex-col justify-between w-5 h-5 transform transition-all duration-300 origin-center overflow-hidden ${isMenuOpen ? 'transform translate-y-1' : ''}`}
        >
          <div
            className={`bg-gold h-[2px] w-7 transform transition-all duration-300 origin-left ${isMenuOpen ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'}`}
          ></div>
          <div
            className={`bg-gold h-[2px] w-7 rounded transform transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}
          ></div>
          <div
            className={`bg-gold h-[2px] w-7 transform transition-all duration-300 origin-left ${isMenuOpen ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'}`}
          ></div>

          <div
            className={`absolute items-center justify-between transform transition-all duration-500 top-1.5 ${isMenuOpen ? 'translate-x-0 w-12' : '-translate-x-10 w-0'}`}
          >
            <div
              className={`absolute bg-gold h-[2px] w-5 transform transition-all duration-500 rotate-0 delay-300 ${isMenuOpen ? 'rotate-45' : ''}`}
            ></div>
            <div
              className={`absolute bg-gold h-[2px] w-5 transform transition-all duration-500 -rotate-0 delay-300 ${isMenuOpen ? '-rotate-45' : ''}`}
            ></div>
          </div>
        </div>
      </div>
    </button>
  );
};

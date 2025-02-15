import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { MenuIcon } from '../svg/Svg';
import NavLinks from './NavLinks';
import BurgerMenu from './BurgerMenu';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  return (
    <header className="w-full bg-transparent z-20 text-white">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <div className="flex items-center">
          <NavLink to="/">
            <img
              src="/icons/logo_bg.svg"
              alt="Escape Room logo"
              className="h-10 w-auto"
            />
          </NavLink>
        </div>
        <nav className="hidden lg:flex flex-1 justify-center space-x-8">
          <NavLinks />
        </nav>
        <div className="text-sm text-primary hidden sm:block">
          8 (800) 333-55-99
        </div>
        <div className="lg:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="focus:outline-none text-primary"
          >
            <MenuIcon isOpen={isMenuOpen} />
          </button>
        </div>
      </div>
      <BurgerMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
  );
};

export default Header;

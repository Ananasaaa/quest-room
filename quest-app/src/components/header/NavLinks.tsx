import { NavLink } from 'react-router-dom';

const navLinks = [
  { path: '/', label: 'QUESTS' },
  { path: '/beginners', label: 'FOR BEGINNERS' },
  { path: '/reviews', label: 'REVIEWS' },
  { path: '/sales', label: 'SALES' },
  { path: '/contacts', label: 'CONTACTS' },
];

interface NavLinksProps {
  onClick?: () => void;
  className?: string;
}

const NavLinks = ({ onClick, className = '' }: NavLinksProps) => {
  return (
    <>
      {navLinks.map(({ path, label }) => (
        <NavLink
          key={path}
          to={path}
          className={({ isActive }) =>
            `${isActive ? 'text-accent' : 'hover:text-accent'} ${className}`
          }
          onClick={onClick}
        >
          {label}
        </NavLink>
      ))}
    </>
  );
};

export default NavLinks;

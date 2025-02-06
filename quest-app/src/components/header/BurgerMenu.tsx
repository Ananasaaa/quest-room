import { NavLink } from 'react-router-dom';

interface BurgerMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const navLinks = [
  { path: '/quests', label: 'QUESTS' },
  { path: '/beginners', label: 'FOR BEGINNERS' },
  { path: '/reviews', label: 'REVIEWS' },
  { path: '/sales', label: 'SALES' },
  { path: '/contacts', label: 'CONTACTS' },
];

const BurgerMenu = ({ isOpen, onClose }: BurgerMenuProps) => {
  if (!isOpen) return null;

  return (
    <nav className="lg:hidden bg-bgcolor text-primary">
      <ul className="flex flex-col items-center space-y-4 py-4">
        {navLinks.map(({ path, label }) => (
          <li key={path}>
            <NavLink
              to={path}
              className={({ isActive }) =>
                isActive ? 'text-accent' : 'hover:text-accent'
              }
              onClick={onClose}
            >
              {label}
            </NavLink>
          </li>
        ))}
        <li>
          <div className="text-sm text-primary">8 (800) 333-55-99</div>
        </li>
      </ul>
    </nav>
  );
};

export default BurgerMenu;

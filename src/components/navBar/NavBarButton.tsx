import { Link } from 'react-router-dom';
import { FC } from 'react';

type NavBarButtonProps = { to: string; text: string };

export const NavBarButton: FC<NavBarButtonProps> = ({ to, text }) => {
  return (
    <Link to={to} className="pt-4 navbar-button">
      {text}
    </Link>
  );
};

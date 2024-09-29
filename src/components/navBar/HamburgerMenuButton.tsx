import { Link } from 'react-router-dom';
import { FC } from 'react';

type HamburgerMenuButtonProps = {
  to: string;
  onClickFn: () => void;
  text: string;
};

export const HamburgerMenuButton: FC<HamburgerMenuButtonProps> = ({
  to,
  onClickFn,
  text,
}) => {
  return (
    <Link to={to} onClick={onClickFn} className="hamburger-button">
      {text}
    </Link>
  );
};

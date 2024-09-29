import React from 'react';

interface IProps {
  component: React.FC;
}

export const PublicRoute: React.FC<IProps> = ({ component: Component }) => {
  return <Component />;
};

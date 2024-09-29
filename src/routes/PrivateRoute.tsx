import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '@clerk/clerk-react';

interface IProps {
  component: React.FC;
}

export const PrivateRoute: React.FC<IProps> = ({ component: Component }) => {
  const { isSignedIn } = useAuth();

  if (isSignedIn) {
    return <Component />;
  }
  return <Navigate to={'/'} replace />;
};

import NavBar from './components/navBar/NavBar.tsx';
import { Route, Routes } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { arSA, enUS } from '@clerk/localizations';
import { Suspense, useEffect } from 'react';
import { ClerkProvider } from '@clerk/clerk-react';
import { routes } from './routes';
import { PublicRoute } from './routes/PublicRoute.tsx';
import { PrivateRoute } from './routes/PrivateRoute.tsx';
import NotFound from './pages/NotFound.tsx';

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key');
}

export const App = () => {
  const { i18n } = useTranslation();
  const localization = i18n.language === 'ar' ? arSA : enUS;

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
    }
  }, [i18n]);
  document
    .getElementsByTagName('html')[0]
    .setAttribute('dir', i18n.language === 'ar' ? 'rtl' : 'ltr');

  return (
    <Suspense fallback="Loading...">
      <ClerkProvider
        localization={localization}
        publishableKey={PUBLISHABLE_KEY}
        afterSignOutUrl="/"
      >
        <div className="w-screen h-full relative flex flex-col">
          <NavBar />
          <div className="mt-16">
            <Routes>
              {Object.entries(routes).map((route) => (
                <Route
                  key={route[1].path}
                  path={route[1].path}
                  element={
                    route[1].public ? (
                      <PublicRoute component={route[1].component} />
                    ) : (
                      <PrivateRoute component={route[1].component} />
                    )
                  }
                />
              ))}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </ClerkProvider>
    </Suspense>
  );
};

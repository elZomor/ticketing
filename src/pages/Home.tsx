import { SignedOut, useClerk } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const Home = () => {
  const { t } = useTranslation();
  const clerk = useClerk();
  const navigate = useNavigate();

  const handleClick = () => navigate('/shows');

  return (
    <div className="relative z-10 grid grid-cols-12 h-full items-center">
      <div className="col-span-12 md:col-span-6 text-center md:text-left">
        <h1 className="text-white font-extrabold text-3xl sm:text-4xl lg:text-5xl mb-6 sm:mb-8">
          {t('EG Theater')}
        </h1>

        <p className="text-stone-100 text-sm sm:text-base font-bold italic">
          {t('SLOGAN')}
        </p>

        <div className="m-8 flex md:flex-row flex-col">
          <SignedOut>
            <button
              onClick={() => clerk.openSignIn()}
              className="w-full md:w-auto mt-4 md:mt-0 md:m[8px] text-white uppercase py-3 text-sm
              sm:text-base font-light px-8 border border-white hover:bg-white hover:bg-opacity-10"
            >
              {t('LOGIN')}
            </button>
          </SignedOut>
          <button
            id="hide-after-click"
            onClick={handleClick}
            className="w-full md:w-auto mt-4 md:mt-0 text-white uppercase py-3 text-sm
              sm:text-base font-light px-8 border border-white hover:bg-white hover:bg-opacity-10"
          >
            {t('SHOWS')}
          </button>
        </div>
      </div>
    </div>
  );
};

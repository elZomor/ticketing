import seats12 from '../../assets/images/seats12.avif';
import { useTranslation } from 'react-i18next';
import { SignedOut, useClerk } from '@clerk/clerk-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const { t } = useTranslation();
  const clerk = useClerk();

  return (
    <div className="w-screen h-screen overflow-hidden relative before:block before:absolute before:bg-black before:h-full before:w-full before:top-0 before:left-0 before:z-10 before:opacity-30">
      <img
        src={seats12}
        className="absolute top-0 left-0 w-full h-full object-cover"
        alt=""
      />

      <div className="relative z-20 max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-12 h-full items-center">
        <div className="col-span-12 md:col-span-6 text-center md:text-left">
          <h1 className="text-white font-extrabold text-3xl sm:text-4xl lg:text-5xl mb-6 sm:mb-8">
            {t('EG Theater')}
          </h1>

          <p className="text-stone-100 text-sm sm:text-base font-bold italic">
            {t('SLOGAN')}
          </p>

          <div className="mt-6 sm:mt-8">
            <SignedOut>
              <button
                onClick={() => clerk.openSignIn()}
                className="w-full md:w-auto mt-4 md:mt-0 text-white uppercase py-3 text-sm sm:text-base font-light px-8 border border-white hover:bg-white hover:bg-opacity-10"
              >
                {t('LOGIN')}
              </button>
            </SignedOut>
            <Link
              to="/shows"
              id="hide-after-click"
              className="w-full md:w-auto mt-4 md:mt-0 text-white uppercase py-3 text-sm sm:text-base font-light px-8 border border-white hover:bg-white hover:bg-opacity-10 mx-0 md:mx-3"
            >
              {t('SHOWS')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

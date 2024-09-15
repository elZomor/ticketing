import seats12 from '../../assets/images/seats12.avif';
import { useClerk, SignedOut } from '@clerk/clerk-react';
import { useTranslation } from 'react-i18next';

export default function Home() {
  const clerk = useClerk();
  const { t } = useTranslation();
  const handleClick = () => {
    clerk.openSignIn();
  };

  return (
    <div
      className="w-screen h-screen overflow-hidden relative before:block before:absolute before:bg-black before:h-full before:w-full before:top-0 before:left-0 before:z-10 before:opacity-30">
      <img src={seats12} className="absolute top-0 left-0  w-full" alt="" />
      <div className="relative z-20 max-w-screen-lg mx-auto grid grid-cols-12 h-full items-center">
        <div className="col-span-6">
          <h1 className="text-white font-extrabold text-5xl mb-8">
            {t('EG Theater')}
          </h1>
          <p className="text-stone-100 text-base font-bold italic">
            {t('SLOGAN')}
          </p>
          <SignedOut>
            <button
              onClick={handleClick}
              className="mt-8 text-white uppercase py-4 text-base font-light px-10 border border-white hover:bg-white hover:bg-opacity-10"
            >
              {t('LOGIN')}
            </button>
          </SignedOut>
          <button
            className="mt-8 text-white uppercase py-4 text-base font-light px-10 border border-white hover:bg-white hover:bg-opacity-10 mx-3">
            {t('SHOWS')}
          </button>
        </div>
      </div>
    </div>
  );
}

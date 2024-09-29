import { useTranslation } from 'react-i18next';
import hero from '../../assets/images/hero1.jpg';
import { Link } from 'react-router-dom';

export const HeroSection = () => {
  const { t } = useTranslation();
  return (
    <div className="flex justify-center items-center">
      <div
        className="flex flex-col-reverse md:flex-row px-6 md:px-20 md:w-[90%] bg-cover bg-center bg-no-repeat
     mt-4 p-6 items-center justify-between md:h-80 bg-accentColor
     bg-opacity-70 shadow-xl"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div className="h-full flex flex-col items-center justify-center">
          <h2 className="text-4xl italic lg:text-5xl text-center md:text-right text-neutralColorOne leading-tight font-bold">
            {t('HERO_TITLE')}
          </h2>
          <h3 className="mt-6 md:mt-10 text-md lg:text-xl text-center md:text-right text-neutralColorTwo font-light tracking-wider leading-relaxed">
            {t('HERO_SECTION')}
          </h3>
          <Link
            to="/shows"
            className="mt-10 inline-block bg-textColorMain text-neutralColorOne font-semibold px-6 py-3
            rounded-md hover:bg-textColorAlt transition-colors duration-300"
          >
            {t('DETAILS')}
          </Link>
        </div>
      </div>
    </div>
  );
};

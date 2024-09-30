import { useTranslation } from 'react-i18next';
import hero from '../../assets/images/hero1.jpg';
import { Link } from 'react-router-dom';

export const HeroSection = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="flex justify-center items-center h-full">
      <div
        className="flex flex-col md:flex-row px-6 md:px-10 w-full bg-cover bg-center bg-no-repeat
      p-6 items-center justify-between md:h-[25rem] bg-accentColor
     bg-opacity-70 shadow-xl"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div className="h-full flex flex-col items-center justify-center md:w-1/2">
          <h2
            className={`text-4xl lg:text-5xl ${i18n.language === 'ar' ? 'md:text-right' : 'md:text-left'} text-neutralColorOne font-bold w-full`}
          >
            {t('HERO_TITLE')}
          </h2>
          <h3
            className={`mt-6 md:mt-10 text-md lg:text-xl ${i18n.language === 'ar' ? 'md:text-right' : 'md:text-left'}
          text-neutralColorTwo font-light tracking-wider leading-relaxed`}
          >
            {t('HERO_SECTION')} {t('HERO_SECTION')} {t('HERO_SECTION')}{' '}
            {t('HERO_SECTION')} {t('HERO_SECTION')} {t('HERO_SECTION')}{' '}
            {t('HERO_SECTION')} {t('HERO_SECTION')}
          </h3>
        </div>
        <div
          className={`md:absolute bottom-4  ${i18n.language === 'en' ? 'md:right-4' : 'md:left-4'}`}
        >
          <Link
            to="/shows"
            className="mt-3 inline-block bg-textColorMain text-neutralColorOne font-semibold px-6 py-3 md:px-10 md:py-5
                        rounded-md hover:bg-textColorAlt transition-colors duration-300 md:text-3xl
                         "
          >
            {t('DETAILS')}
          </Link>
        </div>
      </div>
    </div>
  );
};

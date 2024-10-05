import { useTranslation } from 'react-i18next';
import hero from '../../assets/images/hero1.jpg';
import { Link } from 'react-router-dom';

export const HeroSection = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="flex justify-center items-center h-full">
      <div
        className="flex flex-col md:flex-row p-6 md:p-8 w-full bg-cover
        bg-center bg-no-repeat  items-center justify-between md:h-96 bg-accentColor
     bg-opacity-70 shadow-xl md:relative"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div className="h-full flex flex-col items-center justify-end md:w-1/2">
          <h2
            className={`text-4xl lg:text-5xl 
            ${i18n.language === 'ar' ? 'md:text-right' : 'md:text-left'} 
            text-neutralColorOne font-bold w-full`}
          >
            {t('HERO_TITLE')}
          </h2>
          <h3
            className={`mt-6 md:mt-10 text-md lg:text-3xl 
            ${i18n.language === 'ar' ? 'md:text-right' : 'md:text-left'}
          text-neutralColorTwo font-light tracking-wider leading-relaxed w-full`}
          >
            {t('HERO_SECTION')} {t('HERO_SECTION')}
            {t('HERO_SECTION')}
            {t('HERO_SECTION')}
            {t('HERO_SECTION')}
            {t('HERO_SECTION')}
          </h3>
        </div>
        <div
          className={`md:absolute bottom-8  
          ${i18n.language === 'en' ? 'md:right-4' : 'md:left-4'}`}
        >
          <Link
            to="/shows"
            className="mt-3 inline-block bg-textColorMain
            text-gold font-semibold px-6 py-3 md:px-10 md:py-5
                        rounded-md hover:bg-textColorAlt transition-colors
                        duration-300 md:text-3xl
                         "
          >
            {t('DETAILS')}
          </Link>
        </div>
      </div>
    </div>
  );
};

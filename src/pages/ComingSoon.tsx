import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const ComingSoon = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full h-full flex items-center justify-center bg-cover bg-center bg-no-repeat relative z-40">
      <div className="w-full h-full flex flex-col items-center justify-between bg-primaryColor bg-opacity-85 py-8">
        <div className="flex-1 flex flex-col items-center justify-center">
          <h1 className="text-6xl lg:text-7xl xl:text-8xl text-gold tracking-wider font-bold font-serif mt-12 text-center">
            {t('SOON')}
          </h1>
          <Link
            to="/"
            className="mt-10 inline-block bg-textColorMain text-neutralColorOne font-semibold px-6 py-3
            rounded-md hover:bg-textColorAlt transition-colors duration-300"
          >
            {t('BACK_HOME')}
          </Link>
        </div>
      </div>
    </div>
  );
};

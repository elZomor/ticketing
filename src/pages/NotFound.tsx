import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

function NotFound() {
  const { t } = useTranslation();
  return (
    <div className="md:flex-row flex gap-3 flex-col justify-center items-center h-full w-full">
      <div className="text-9xl font-bold text-indigo-600 mb-4">404</div>
      <h1 className="text-4xl font-bold text-gray-800 mb-6">
        {t('NOT_FOUND_HEADER')}
      </h1>
      <p className="text-lg text-gray-600 mb-8">{t('NOT_FOUND_BODY')}</p>
      <Link
        to="/"
        className="inline-block bg-indigo-600 text-white font-semibold px-6 py-3 rounded-md hover:bg-indigo-700 transition-colors duration-300"
      >
        {t('BACK_HOME')}
      </Link>
    </div>
    //   className="w-screen h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
    //   style={{ backgroundImage: `url(${seats12})` }}
    // >
    //   <div className="flex items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat">
    //     <div className="max-w-md mx-auto text-center bg-white bg-opacity-90 p-8 rounded-lg shadow-lg">
    //       <div className="text-9xl font-bold text-indigo-600 mb-4">404</div>
    //       <h1 className="text-4xl font-bold text-gray-800 mb-6">
    //         {t('NOT_FOUND_HEADER')}
    //       </h1>
    //       <p className="text-lg text-gray-600 mb-8">{t('NOT_FOUND_BODY')}</p>
    //       <Link
    //         to="/"
    //         className="inline-block bg-indigo-600 text-white font-semibold px-6 py-3 rounded-md hover:bg-indigo-700 transition-colors duration-300"
    //       >
    //         {t('BACK_HOME')}
    //       </Link>
    //     </div>
    //   </div>
    // </div>
  );
}

export default NotFound;

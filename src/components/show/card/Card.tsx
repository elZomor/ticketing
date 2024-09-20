import { ShowModel } from '../models/ShowViewAllModel.ts';
import { useTranslation } from 'react-i18next';

const Card = ({ data }: { data: ShowModel }) => {
  const { t } = useTranslation();
  const {
    poster,
    name,
    cast_name,
    show_date,
    show_time,
    theater_name,
    theater_id,
    author,
    director,
    link,
    id,
    booking_available,
  } = data;
  const currentDomain = window.location.origin;
  const logo = poster
    ? poster
    : 'https://cdn.pixabay.com/photo/2019/11/07/20/48/cinema-4609877_1280.jpg';
  console.log(logo);
  const handleButtonClick = (url: string, newTab: boolean) => {
    if (newTab) {
      window.open(url, '_blank'); // Open in new tab
    } else {
      window.location.href = url; // Open in same tab
    }
  };

  return (
    <div className="mt-5 md:flex bg-white bg-opacity-70">
      <div className="md:flex-shrink-0">
        <img
          className="h-48 w-full object-cover md:w-48"
          src={logo}
          alt="logo"
        />
      </div>
      <div className="p-8">
        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
          {name.ar} - {cast_name}
        </div>
        <p className="block mt-1 text-lg leading-tight font-medium text-black">
          {show_date} - {show_time}
        </p>
        <p className="block mt-1 text-lg leading-tight font-normal italic text-black">
          <a
            href="#"
            onClick={() =>
              handleButtonClick(
                `${currentDomain}/theaters/${theater_id}`,
                false
              )
            }
            className="text-black hover:text-blue-600 hover:underline"
          >
            {theater_name}
          </a>
        </p>
        <p className="mt-2 text-black-500">
          {t('AUTHOR')}: {author}
        </p>
        <p className="mt-2 text-black-500">
          {t('DIRECTOR')}: {director}
        </p>
        <button className="mt-5 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
          {t('BOOK_SHOW')}
        </button>
        <button
          className="mt-5 ml-3 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          onClick={() =>
            handleButtonClick(`${currentDomain}/shows/${id}`, false)
          }
          disabled={!booking_available}
        >
          {t('SHOW_DETAILS')}
        </button>
        <button
          className="mt-5 ml-3 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          onClick={() => handleButtonClick(link, true)}
        >
          {t('FACEBOOK_EVENT')}
        </button>
      </div>
    </div>
  );
};

export default Card;

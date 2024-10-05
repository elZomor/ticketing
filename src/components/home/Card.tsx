import { ShowModel } from '../../model/ShowViewAllModel.ts';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

const Card = ({ data }: { data: ShowModel }) => {
  const { t } = useTranslation();
  const [inDetailMode, setInDetailMode] = useState(false);

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
  const handleButtonClick = (url: string, newTab: boolean) => {
    if (newTab) {
      window.open(url, '_blank'); // Open in new tab
    } else {
      window.location.href = url; // Open in same tab
    }
  };

  return (
    <div className="relative mt-0 md:flex h-full p-2 m-2 md:border-0">
      <div
        className="absolute right-0 w-1/2 h-full md:w-full flex md:flex-row md:mx-2"
        onMouseOver={() => setInDetailMode(true)}
        onMouseOut={() => setInDetailMode(false)}
        style={{
          backgroundImage: `url(${logo}) `,
          backgroundSize: '100% 100%', // Stretch the image to fill the div
          backgroundPosition: 'center', // Center the image
          backgroundRepeat: 'no-repeat', // Prevent repeating the image
        }}
      >
        <div
          className={`${
            inDetailMode ? 'md:block' : 'md:hidden'
          } hidden md:flex items-center justify-center bg-black bg-opacity-80 mt-8 md:w-full`}
        >
          <div>
            <div className="uppercase tracking-wide text-2xl text-accentColor font-semibold">
              {name.ar} - {cast_name}
            </div>
            <p className="block mt-1 text-xl leading-tight font-medium text-accentColor">
              {show_date} - {show_time}
            </p>
            <p className="block mt-1 text-lg leading-tight font-normal italic text-accentColor">
              <a
                href="#"
                onClick={() =>
                  handleButtonClick(
                    `${currentDomain}/theaters/${theater_id}`,
                    false
                  )
                }
                className="text-text-accentColor hover:text-blue-600 hover:underline"
              >
                {theater_name}
              </a>
            </p>
            <p className="mt-2 text-accentColor">
              {t('AUTHOR')}: {author}
            </p>
            <p className="mt-2 text-accentColor">
              {t('DIRECTOR')}: {director}
            </p>
            <button className="mt-5 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
              {t('BOOK_SHOW')}
            </button>
            ;
            <button
              className="mt-5 ml-3 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              onClick={() =>
                handleButtonClick(`${currentDomain}/shows/${id}`, false)
              }
              disabled={!booking_available}
            >
              {t('SHOW_DETAILS')}
            </button>
            ;
            <button
              className="mt-5 ml-3 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              onClick={() => handleButtonClick(link, true)}
            >
              {t('FACEBOOK_EVENT')}
            </button>
            ;
          </div>
        </div>
      </div>
      <div className={`md:hidden absolute left-0 w-1/2 h-full`}>
        <div>
          <div className="uppercase tracking-wide font-semibold">{name.ar}</div>
          <div className="">{cast_name}</div>
          <p className="">{show_date}</p>
          <p className="">{show_time}</p>
          <p className="italic underline">
            <a
              href="#"
              onClick={() =>
                handleButtonClick(
                  `${currentDomain}/theaters/${theater_id}`,
                  false
                )
              }
              className="text-text-accentColor hover:text-blue-600 hover:underline"
            >
              {theater_name}
            </a>
          </p>
          <p className="">
            {t('AUTHOR')}: {author}
          </p>
          <p className="">
            {t('DIRECTOR')}: {director}
          </p>
          <div className="flex flex-row items-center justify-between px-2">
            <button className="px-2 py-1 mt-3 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
              {t('BOOK_SHOW')}
            </button>
            <button
              className="px-2 py-1 mt-3 border border-transparent text-sm font-medium rounded-md 
            text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 
            focus:ring-red-500"
              onClick={() =>
                handleButtonClick(`${currentDomain}/shows/${id}`, false)
              }
              disabled={!booking_available}
            >
              {t('SHOW_DETAILS')}
            </button>
            <button
              className="mt-3 border border-transparent rounded-md
            text-white bg-blue-600"
              onClick={() => handleButtonClick(link, true)}
            >
              <i
                onClick={() => handleButtonClick(link, true)}
                className="fab fa-facebook w-5 h-5"
              ></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

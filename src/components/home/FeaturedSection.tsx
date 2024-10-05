import { dataList } from './utils.ts';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Card from './Card.tsx';

export const FeaturedSection = () => {
  const [startIndex, setStartIndex] = useState(0);
  const cardsToShow = 4;
  const { t, i18n } = useTranslation();

  const handleButtonClick = (url: string) => {
    window.location.href = url;
  };

  const handleNext = () => {
    if (startIndex + cardsToShow < dataList.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };
  const currentDomain = window.location.origin;
  return (
    <div className="mt-0 flex flex-col overflow-hidden">
      <div className="h-16 flex flex-row md:justify-between md:h-36 ">
        <h1 className="text-3xl my-auto mx-auto text-center md:text-6xl text-textColorMain md:mx-0 md:px-4 ">
          {t('FEATURED_EVENTS')}
        </h1>
        <div
          className={`flex flex-row relative ${i18n.language === 'en' ? 'mr-32' : 'ml-32'} hidden md:block`}
        >
          <button
            className={`absolute bottom-2 bg-gray-500 text-white rounded-full h-12 w-12 -mx-8
            ${startIndex === 0 ? 'bg-gray-500 cursor-not-allowed' : 'bg-blue-500'} `}
            onClick={handlePrev}
            disabled={startIndex === 0}
          >
            &lt;
          </button>
          <button
            className={`absolute bottom-2 text-white rounded-full h-12 w-12 mx-8 
            ${startIndex + cardsToShow >= dataList.length ? 'bg-gray-500 cursor-not-allowed' : 'bg-blue-500'}`}
            onClick={handleNext}
            disabled={startIndex + cardsToShow >= dataList.length}
          >
            &gt;
          </button>
        </div>
      </div>
      <div className="hidden md:block justify-between items-center">
        <div className="flex transition-transform duration-300">
          {dataList
            .slice(startIndex, startIndex + cardsToShow)
            .map((dataItem) => (
              <div key={dataItem.id} className="w-1/4 h-[30rem] ">
                <Card data={dataItem} />
              </div>
            ))}
        </div>
      </div>
      <div className="flex flex-col md:hidden">
        {dataList
          .slice(startIndex, startIndex + cardsToShow)
          .map((dataItem) => (
            <div key={dataItem.id} className="w-full h-56 my-1">
              <Card data={dataItem} />
            </div>
          ))}
      </div>
      <button
        className="px-2 py-1 my-3 border border-transparent text-lg font-bold rounded-md
            text-gold bg-black w-3/4 mx-auto md:hidden"
        onClick={() => handleButtonClick(`${currentDomain}/shows`)}
      >
        {t('MORE_EVENTS')}
      </button>
    </div>
  );
};

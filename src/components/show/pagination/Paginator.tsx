import { PaginatorModel } from '../models/PaginatorModel.ts';
import { useTranslation } from 'react-i18next';
import React from 'react';

const Paginator = ({
  data,
  onPageChange,
}: {
  data: PaginatorModel;
  onPageChange: (pageNumber: number) => void;
}) => {
  const { current_page, previous, next, total_page_number } = data;
  const { t } = useTranslation();

  const handlePageChange = (
    event: React.MouseEvent<HTMLAnchorElement>,
    pageNumber: number
  ) => {
    event.preventDefault(); // Prevent the default anchor behavior
    onPageChange(pageNumber);
  };

  return (
    <div className="mt-5 max-w-2xl mx-auto overflow-hidden mb-5">
      <nav aria-label="Page navigation example">
        <ul className="inline-flex -space-x-px">
          <li>
            <a
              href="#"
              onClick={(e) => previous && handlePageChange(e, current_page - 1)}
              className={`bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 ml-0 rounded-l-lg leading-tight py-2 px-3 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${!previous && 'cursor-not-allowed opacity-50'}`}
              aria-disabled={!previous}
            >
              {t('PREVIOUS')}
            </a>
          </li>
          {Array.from({ length: total_page_number }, (_, index) => {
            const page_number = index + 1;
            return (
              <li key={page_number}>
                <a
                  href="#"
                  onClick={(e) => handlePageChange(e, page_number)}
                  aria-current={
                    current_page === page_number ? 'page' : undefined
                  }
                  className={`bg-white border border-gray-300 ${current_page === page_number ? 'bg-blue-50 border border-gray-300 text-blue-600 hover:bg-blue-100 hover:text-blue-700' : 'text-gray-500 hover:bg-gray-100 hover:text-gray-700'} leading-tight py-2 px-3 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
                >
                  {page_number}
                </a>
              </li>
            );
          })}
          <li>
            <a
              href="#"
              onClick={(e) => next && handlePageChange(e, current_page + 1)}
              className={`bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 rounded-r-lg leading-tight py-2 px-3 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${!next && 'cursor-not-allowed opacity-50'}`}
              aria-disabled={!next}
            >
              {t('NEXT')}
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Paginator;

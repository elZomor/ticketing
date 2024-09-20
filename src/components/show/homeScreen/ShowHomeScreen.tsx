import Card from '../card/Card.tsx';
import { useEffect, useState } from 'react';
import { ShowModel } from '../models/ShowViewAllModel.ts';
import { SHOWS_URL } from '../URLs.ts';
import Paginator from '../pagination/Paginator.tsx';
import { PaginatorModel } from '../models/PaginatorModel.ts';

const ShowHomeScreen = () => {
  const [dataList, setDataList] = useState<ShowModel[]>([]);
  const [paginatorData, setPaginatorData] = useState<
    PaginatorModel | undefined
  >(undefined);
  const fetchData = (pageNumber: number) => {
    try {
      fetch(`${SHOWS_URL}?page=${pageNumber}`)
        .then((result) => result.json())
        .then((json) => {
          setDataList(json['results']);

          setPaginatorData({
            current_page: json['current_page'],
            total_page_number: json['total_pages'],
            next: json['next'],
            previous: json['previous'],
          });
        });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  useEffect(() => {
    fetchData(1);
  }, []);

  return (
    <div className="z-40">
      {dataList.map((dataItem) => (
        <Card key={dataItem.id} data={dataItem} />
      ))}
      {paginatorData ? (
        <Paginator data={paginatorData} onPageChange={fetchData} />
      ) : null}
    </div>
  );
};

export default ShowHomeScreen;

import { useEffect, useState } from 'react';
import { ShowModel } from '../../model';
import { PaginatorModel } from '../../model';
import Card from '../../components/card/Card.tsx';
import Paginator from '../../components/pagination/Paginator.tsx';
import { BASE_URL } from '../../constants/constants.ts';

export const ViewAllScreen = () => {
  const [dataList, setDataList] = useState<ShowModel[]>([]);
  const [paginatorData, setPaginatorData] = useState<
    PaginatorModel | undefined
  >(undefined);
  const fetchData = (pageNumber: number) => {
    try {
      fetch(`${BASE_URL}/shows?page=${pageNumber}`)
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

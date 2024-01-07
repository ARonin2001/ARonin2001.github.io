import { useEffect, useState } from 'react';

import GalleryContainer from '../GalleryContainer/GalleryContainer';
import PaginationContainer from '../PaginationContainer/PaginationContainer';

import style from './MainContent.module.scss';

import { paintingApi } from '../../services/paintingApi';

const MainContent = () => {
  let [limit, setLimit] = useState(9);
  let [totalPages, setTotalPages] = useState(0);
  let [page, setPage] = useState(1);

  let [paintingsFetch, { data: paintings, isLoading }] =
    paintingApi.useLazyFetchPaintingsWithParamsQuery();

  let [allPaintingsFetch, { data: allPaintings }] =
    paintingApi.useLazyFetchAllPaintingsQuery();

  useEffect(() => {
    paintingsFetch({ limit, page });
    allPaintingsFetch();
  }, []);

  useEffect(() => {
    const countTotalPages = allPaintings?.length ? allPaintings?.length : 0;
    setTotalPages(countTotalPages);
  }, [allPaintings]);

  const handleClickPaginationPage = (page: number) => {
    setPage(page);
    paintingsFetch({ limit, page });
  };

  if (isLoading) return <h2>Loading...</h2>;
  if (!paintings) return <h2>Paintings is not to be :\ </h2>;

  return (
    <>
      <div className={style.mainGallery}>
        <GalleryContainer
          limit={limit}
          page={page}
          paintings={paintings ? paintings : []}
        />
      </div>

      <div className={style.mainPagination}>
        <PaginationContainer
          page={page}
          setPage={handleClickPaginationPage}
          limit={limit}
          totalPages={totalPages}
        />
      </div>
    </>
  );
};

export default MainContent;

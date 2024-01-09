import { useEffect, useState } from 'react';

import { paintingApi } from '../../services/paintingApi';
import AppHeaderContainer from '../AppHeaderContainer/AppHeaderContainer';
import AppContent from '../AppContent/AppContent';
import { useAppDispatch } from '../../hooks/redux';

const MainContent = () => {
  let [limit, setLimit] = useState(9);
  let [totalPages, setTotalPages] = useState(0);
  let [page, setPage] = useState(1);
  let [name, setName] = useState<string | undefined>();
  let [authorId, setAuthorId] = useState<number | undefined>();
  let [locationId, setLocationId] = useState<number | undefined>();
  let [createdFrom, setCreatedFrom] = useState<string | undefined>();
  let [createdBefore, setCreatedBefore] = useState<string | undefined>();

  const setNameValue = (value: string) => {
    setName(value ? value : undefined);
  };
  const setItemAuthorId = (id: number | undefined) => {
    setAuthorId(id);
  };
  const setItemLocationId = (id: number | undefined) => {
    setLocationId(id);
  };
  const setYearCreatedFrom = (value: string | undefined) => {
    setCreatedFrom(value ? value : undefined);
  };
  const setYearCreatedBefore = (value: string | undefined) => {
    setCreatedBefore(value ? value : undefined);
  };

  let [allPaintingsFetch, { data: allPaintings }] =
    paintingApi.useLazyFetchAllPaintingsQuery();

  useEffect(() => {
    allPaintingsFetch();
  }, []);

  useEffect(() => {
    const countTotalPages = allPaintings?.length ? allPaintings?.length : 0;
    setTotalPages(countTotalPages);
  }, [allPaintings]);

  return (
    <>
      {/* Header, Filter. Top (header) app elements */}
      <AppHeaderContainer
        setName={setNameValue}
        setItemValueId={setItemAuthorId}
        setItemLocationId={setItemLocationId}
        setYearCreatedFrom={setYearCreatedFrom}
        setYearCreatedBefore={setYearCreatedBefore}
        createdFrom={createdFrom}
        createdBefore={createdBefore}
        name={name}
      />

      {/* Gallery (Paintings), Pagination. Content app elements */}
      <AppContent
        limit={limit}
        page={page}
        setPage={setPage}
        totalPages={totalPages}
        name={name}
        authorId={authorId}
        locationId={locationId}
        createdFrom={createdFrom}
        createdBefore={createdBefore}
      />
    </>
  );
};

export default MainContent;

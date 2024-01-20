import React, { useEffect, useState } from 'react';

import { paintingApi } from '../../services/paintingApi';
import AppHeaderContainer from '../AppHeaderContainer/AppHeaderContainer';
import AppContent from '../AppContent/AppContent';

const MainContent: React.FC = () => {
  let [limit, setLimit] = useState(12);
  let [totalPages, setTotalPages] = useState(0);
  let [page, setPage] = useState(1);
  let [name, setName] = useState<string | undefined>();
  let [authorId, setAuthorId] = useState<number | undefined>();
  let [locationId, setLocationId] = useState<number | undefined>();
  let [createdFrom, setCreatedFrom] = useState<string | undefined>();
  let [createdBefore, setCreatedBefore] = useState<string | undefined>();

  const setNameValue = (value?: string) => {
    setName(value ? value : undefined);
  };

  let [allPaintingsFetch, { data: allPaintings }] =
    paintingApi.useLazyFetchPaintingsWithParamsQuery();

  useEffect(() => {
    if (page !== 1) setPage(1);

    allPaintingsFetch({
      name,
      createdBefore,
      createdFrom,
      authorId,
      locationId,
    });
  }, [name, createdBefore, createdFrom, authorId, locationId]);

  useEffect(() => {
    const countTotalPages = allPaintings?.length ? allPaintings?.length : 0;
    setTotalPages(countTotalPages);
  }, [allPaintings]);

  return (
    <>
      {/* Header, Filter. Top (header) app elements */}
      <AppHeaderContainer
        setName={setNameValue}
        setItemValueId={(id?: number) => setAuthorId(id)}
        setItemLocationId={(id?: number) => setLocationId(id)}
        setYearCreatedFrom={(value?: string) => {
          setCreatedFrom(value ? value : undefined);
        }}
        setYearCreatedBefore={(value?: string) => {
          setCreatedBefore(value ? value : undefined);
        }}
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

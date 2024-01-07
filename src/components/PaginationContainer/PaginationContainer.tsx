import { useState, useMemo, useEffect, memo } from 'react';
import Pagination from './Pagination/Pagination';

type PaginationContainerProps = {
  page: number;
  setPage: (page: number) => void;
  limit: number;
  totalPages: number;
};

const PaginationContainer = ({
  page,
  setPage,
  limit,
  totalPages,
}: PaginationContainerProps) => {
  // let [curPage, setCurPage] = useState(1);
  // let [countElements, setCountElements] = useState(45);
  let [numberPagesArr, setNumberPagesArr] = useState<number[]>([1, 2, 3]);

  let countPages = useMemo(() => Math.ceil(totalPages / limit), [totalPages]);

  const setNumberPagesArrToStart = (): void => {
    let arrPages: number[] = [];

    if (countPages >= 3) {
      setNumberPagesArr([1, 2, 3]);
    }

    if (countPages < 3 && countPages !== 0) {
      for (let i = 1; i < countPages + 1; i++) arrPages.push(i);

      setNumberPagesArr(arrPages);
    }
  };

  const setNumberPagesArrToEnd = (): void => {
    let arrPages: number[] = [];

    if (countPages > 3) {
      for (let i = countPages - 2; i <= countPages; i++) arrPages.push(i);
    }

    if (countPages <= 3) {
      for (let i = 1; i < countPages + 1; i++) arrPages.push(i);
    }

    setNumberPagesArr(arrPages);
  };

  useEffect(() => {
    // setNumberPagesArrToStart();
  }, []);

  const toStartPage = (): void => {
    if (page != 1) {
      setNumberPagesArrToStart();
      setPage(1);
    }
  };

  const toPrevPage = (): void => {
    if (page != 1) onChangeCurrentPage(page - 1);
  };

  const toEndPage = (): void => {
    if (page != countPages) {
      setNumberPagesArrToEnd();
      setPage(countPages);
    }
  };

  const toNextPage = (): void => {
    if (page != countPages) onChangeCurrentPage(page + 1);
  };

  const incrementPage = (numberPage: number): number[] => {
    let lastElNumberPages = numberPagesArr[numberPagesArr.length - 1];

    if (numberPage >= lastElNumberPages && lastElNumberPages != countPages) {
      return numberPagesArr.map((el) => el + 1);
    }

    return numberPagesArr;
  };

  const decrementPage = (numberPage: number): number[] => {
    if (numberPage === numberPagesArr[0])
      return numberPagesArr.map((el) => el - 1);

    return numberPagesArr;
  };

  const onChangeCurrentPage = (numberPage: number): void => {
    let pages: number[] = numberPagesArr;

    if (page - numberPage < 0) pages = incrementPage(numberPage);

    if (page - numberPage > 0 && numberPagesArr[0] != 1)
      pages = decrementPage(numberPage);

    setNumberPagesArr(pages);
    setPage(numberPage);
  };

  if (totalPages === 0) return null;

  return (
    <Pagination
      curPage={page}
      toStartPage={toStartPage}
      countPages={countPages}
      numberPagesArr={numberPagesArr}
      onChangeCurrentPage={onChangeCurrentPage}
      toPrevPage={toPrevPage}
      toEndPage={toEndPage}
      toNextPage={toNextPage}
    />
  );
};

export default memo(PaginationContainer);

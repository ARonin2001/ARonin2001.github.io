import { useState, useMemo, useEffect } from 'react';
import Pagination from './Pagination/Pagination';

const PaginationContainer = () => {
  let [curPage, setCurPage] = useState(1);
  let [countElements, setCountElements] = useState(45);
  let [numberPagesArr, setNumberPagesArr] = useState<number[]>([]);

  let countPages = useMemo(() => Math.ceil(countElements / 9), [countElements]);

  const setNumberPagesArrToStart = (): void => {
    let arrPages: number[] = [];

    if (countPages >= 3) {
      setNumberPagesArr([1, 2, 3]);
    }

    if (countPages < 3) {
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
    setNumberPagesArrToStart();
  }, []);

  const toStartPage = (): void => {
    if (curPage != 1) {
      setNumberPagesArrToStart();
      setCurPage(1);
    }
  };

  const toPrevPage = (): void => {
    if (curPage != 1) onChangeCurrentPage(curPage - 1);
  };

  const toEndPage = (): void => {
    if (curPage != countPages) {
      setNumberPagesArrToEnd();
      setCurPage(countPages);
    }
  };

  const toNextPage = (): void => {
    if (curPage != countPages) onChangeCurrentPage(curPage + 1);
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

    if (curPage - numberPage < 0) pages = incrementPage(numberPage);

    if (curPage - numberPage > 0 && numberPagesArr[0] != 1)
      pages = decrementPage(numberPage);

    setNumberPagesArr(pages);
    setCurPage(numberPage);
  };

  if (countElements === 0) return null;

  return (
    <Pagination
      curPage={curPage}
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

export default PaginationContainer;

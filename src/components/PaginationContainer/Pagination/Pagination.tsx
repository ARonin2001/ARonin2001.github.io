import React, { useEffect, useMemo, useState } from 'react';

import PaginationButton from './PaginationButton/PaginationButton';
import Arrow from './Arrows/Arrow/Arrow';

import style from './Pagination.module.scss';

type Props = {
  curPage: number;
  toStartPage: () => void;
  countPages: number;
  numberPagesArr: number[];
  onChangeCurrentPage: (numberPage: number) => void;
  toPrevPage: () => void;
  toEndPage: () => void;
  toNextPage: () => void;
};

const Pagination = (props: Props) => {
  const {
    curPage,
    toStartPage,
    countPages,
    numberPagesArr,
    onChangeCurrentPage,
    toPrevPage,
    toEndPage,
    toNextPage,
  } = props;

  let prevBtnsDisabled = curPage === 1 ? style.disabled : '';
  let nextBtnsDisabled = curPage === countPages ? style.disabled : '';

  return (
    <div className={style.pagination}>
      <div className={style.container}>
        <div
          className={
            style.pages + ' ' + style.btnsPrev + ' ' + prevBtnsDisabled
          }
        >
          <PaginationButton
            content={
              <>
                <Arrow />
                <Arrow />
              </>
            }
            onHandleClick={toStartPage}
          />
          <PaginationButton onHandleClick={toPrevPage} content={<Arrow />} />
        </div>

        <div className={style.pages}>
          {numberPagesArr.map((el, key) => {
            return (
              <PaginationButton
                key={key}
                content={el}
                onHandleClick={onChangeCurrentPage}
                styles={curPage === el ? style.current : ''}
              />
            );
          })}
        </div>

        <div
          className={
            style.pages + ' ' + style.btnsNext + ' ' + nextBtnsDisabled
          }
        >
          <PaginationButton onHandleClick={toNextPage} content={<Arrow />} />
          <PaginationButton
            content={
              <>
                <Arrow /> <Arrow />
              </>
            }
            onHandleClick={toEndPage}
          />
        </div>
      </div>
    </div>
  );
};

export default React.memo(Pagination);

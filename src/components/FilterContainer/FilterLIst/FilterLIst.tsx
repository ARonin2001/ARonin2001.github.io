import React, { FC, useEffect } from 'react';
import { useState } from 'react';
import style from './FilterLIst.module.scss';
import { IList } from '../../../models/IList';

interface Props {
  Child: React.FC<any>;
  title: string;
  list?: IList[];
  setItemValueId?: (id?: number) => void;
  setYearCreatedFrom?: (value?: string) => void;
  setYearCreatedBefore?: (value?: string) => void;
  createdFrom?: string;
  createdBefore?: string;
}

const FilterLIst: React.FC<Props> = ({
  Child,
  title,
  list,
  setItemValueId,
  setYearCreatedFrom,
  setYearCreatedBefore,
  createdFrom,
  createdBefore,
}) => {
  let [activeUl, setActiveUl] = useState(false);
  let [selectTitle, setSelectTitle] = useState('');
  let [isDeleteTitle, setDeleteTitle] = useState(false);

  useEffect(() => {
    if (selectTitle === '') setSelectTitle(title);

    if (selectTitle !== title && selectTitle !== '' && isDeleteTitle !== true)
      setDeleteTitle(true);
  }, [selectTitle]);

  let activeClassNameUl = activeUl ? style.active : '';

  const handleFocus = (e: React.FocusEvent<HTMLUListElement, Element>) => {
    if (!('data-btn-delete' in (e.target as any).attributes)) setActiveUl(true);
  };

  const changeTitle = (title: string, itemId: number): void => {
    setSelectTitle(title);
    if (setItemValueId) setItemValueId(itemId);
    setActiveUl(false);
  };

  const toTitleDefault = (): void => {
    setSelectTitle(title);
    setDeleteTitle(false);
    if (setItemValueId) setItemValueId(undefined);
  };

  return (
    <ul
      className={style.list + ' ' + activeClassNameUl}
      data-select
      onBlur={() => setActiveUl(false)}
      onFocus={(e) => handleFocus(e)}
      tabIndex={2}
    >
      <li className={style.title} data-select>
        {selectTitle}
      </li>

      <div className={style.children}>
        <Child
          setTitle={changeTitle}
          list={list}
          setYearCreatedFrom={setYearCreatedFrom}
          setYearCreatedBefore={setYearCreatedBefore}
          createdFrom={createdFrom}
          createdBefore={createdBefore}
        />
      </div>

      <div className={style.arrow}></div>
      {isDeleteTitle && (
        <div
          data-btn-delete
          className={style.delete}
          tabIndex={0}
          onClick={toTitleDefault}
        >
          <span></span>
          <span></span>
        </div>
      )}
    </ul>
  );
};

export default FilterLIst;

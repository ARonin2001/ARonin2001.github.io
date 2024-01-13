import React, { FC, useEffect } from 'react';
import { useState } from 'react';
import style from './FilterLIst.module.scss';
import { IList } from '../../../models/IList';

interface Props {
  Child: React.FC<any>;
  title: string;
  list?: IList[];
  setItemValueId?: (id: number | undefined) => void;
  setYearCreatedFrom?: (value: string | undefined) => void;
  setYearCreatedBefore?: (value: string | undefined) => void;
  createdFrom?: string | undefined;
  createdBefore?: string | undefined;
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

  const toggleClassActive = () => setActiveUl((prev: boolean) => !prev);

  const handleClick = (e: React.MouseEvent) => {
    // if element has attribute data-select that toggleClassActive()
    if ('data-select' in (e.target as any).attributes) toggleClassActive();
  };

  const changeTitle = (title: string, itemId: number): void => {
    setSelectTitle(title);
    if (setItemValueId) setItemValueId(itemId);
    toggleClassActive();
  };

  const toTitleDefault = (): void => {
    setSelectTitle(title);
    setDeleteTitle(false);
    if (setItemValueId) setItemValueId(undefined);
  };

  return (
    <ul
      className={style.list + ' ' + activeClassNameUl}
      onClick={(e) => handleClick(e)}
      data-select
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
        <div data-btn-delete className={style.delete} onClick={toTitleDefault}>
          <span></span>
          <span></span>
        </div>
      )}
    </ul>
  );
};

export default FilterLIst;

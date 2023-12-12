import React, { FC, useEffect } from 'react';
import { useState } from 'react';
import style from './FilterLIst.module.scss';

interface Props {
  Child: React.FC<any>;
  title: string;
}

const FilterLIst: React.FC<Props> = ({ Child, title }) => {
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
    // if teg has attribute data-select that toggleClassActive()
    if ('data-select' in (e.target as any).attributes) toggleClassActive();
  };

  const changeTitle = (title: string): void => {
    setSelectTitle(title);
    toggleClassActive();
  };

  const toTitleDefault = (): void => {
    setSelectTitle(title);
    setDeleteTitle(false);
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
          title={[
            'sdfsdf',
            'sdfljlke',
            'sdlkfjsd',
            's1341234324',
            'sdfsdf',
            'sdfljlke',
            'sdlkfjsd',
            's1341234324',
          ]}
        />
      </div>

      <div className={style.arrow}></div>
      {isDeleteTitle && (
        <div className={style.delete} onClick={toTitleDefault}>
          <span></span>
          <span></span>
        </div>
      )}
    </ul>
  );
};

export default FilterLIst;

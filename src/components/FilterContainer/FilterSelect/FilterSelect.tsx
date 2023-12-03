import { ChangeEvent, MouseEventHandler, useState } from 'react';
import style from './FilterSelect.module.scss';

const FilterSelect: React.FC = () => {
  let [selectActive, setSelectActive] = useState(false);
  let [title, setTitle] = useState<string | null>('Author');

  const toggleSelectActive = () => {
    setSelectActive((prev: boolean) => !prev);
  };

  const handleAuthorClick = (
    e: React.MouseEvent<HTMLLIElement, MouseEvent>,
  ) => {
    let liText = e.currentTarget.innerText;
    setTitle(liText);
  };

  let subSelectClassActive: string | null = selectActive
    ? style.sub__select_active
    : null;

  let selectClassActive: string | null = selectActive
    ? style.select_active
    : null;

  return (
    <>
      <ul
        className={style.select + ' ' + selectClassActive}
        onClick={() => toggleSelectActive()}
      >
        <li className={style.container}>
          <span className={style.title}>{title}</span>
        </li>

        <ul className={style.sub__select + ' ' + subSelectClassActive}>
          <li onClick={(e) => handleAuthorClick(e)}>Salvador dali</li>
          <li onClick={(e) => handleAuthorClick(e)}>Vincent van gogh</li>
          <li onClick={(e) => handleAuthorClick(e)}>Claude monet</li>
          <li onClick={(e) => handleAuthorClick(e)}>Salvador dali</li>
          <li onClick={(e) => handleAuthorClick(e)}>Salvador dali</li>
        </ul>
      </ul>
      <div className={style.arrow}></div>
    </>
  );
};

export default FilterSelect;

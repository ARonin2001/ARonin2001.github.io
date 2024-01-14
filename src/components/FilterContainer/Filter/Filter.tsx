import { useEffect, useState, memo } from 'react';

import style from './Filter.module.scss';

interface FilterProps {
  children: React.ReactNode;
}

const Filter = (props: FilterProps) => {
  let [active, setActive] = useState(false);

  const classActive = active ? style.active : '';

  const setFilterActive = (e: React.FocusEvent<HTMLDivElement, Element>) => {
    if (!('data-btn-delete' in (e.target as any).attributes)) setActive(true);
  };

  const setFilterUnactive = () => {
    setActive(false);
  };

  return (
    <div
      onFocus={(e) => setFilterActive(e)}
      onBlur={setFilterUnactive}
      tabIndex={1}
      className={style.filter + ' ' + classActive}
    >
      {props.children}
    </div>
  );
};

export default memo(Filter);

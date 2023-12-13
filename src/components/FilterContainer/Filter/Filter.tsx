import { useState } from 'react';

import style from './Filter.module.scss';

interface FilterProps {
  children: React.ReactNode;
}

const Filter = (props: FilterProps) => {
  let [active, setActive] = useState(false);

  const classActive = active ? style.active : '';

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    console.log(e.target);
    setActive((prev) => !prev);
  };

  return (
    <div
      onClick={(e) => handleClick(e)}
      className={style.filter + ' ' + classActive}
    >
      {props.children}
    </div>
  );
};

export default Filter;

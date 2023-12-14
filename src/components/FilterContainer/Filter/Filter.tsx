import { useState } from 'react';

import style from './Filter.module.scss';

interface FilterProps {
  children: React.ReactNode;
}

const Filter = (props: FilterProps) => {
  let [active, setActive] = useState(false);

  const classActive = active ? style.active : '';

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    let hasAttribute = 'data-btn-delete' in (e.target as any).attributes;
    let isSpan = (e.target as any).tagName === 'SPAN';

    if (!hasAttribute && !isSpan) setActive((prev) => !prev);
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

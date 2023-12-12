import SimpleBar from 'simplebar-react';
import FilterSelectLi from './FilterSelectLi/FilterSelectLi';

import 'simplebar-react/dist/simplebar.min.css';
import './ScrollBar.css';
import style from './FilterSelect.module.scss';

interface Props {
  setTitle: (title: string) => void;
  title: string[];
}

const FilterSelect: React.FC<Props> = ({ setTitle, title }) => {
  return (
    <div className={style.container} data-simplebar>
      <SimpleBar style={{ maxHeight: 300 }} forceVisible="y" autoHide={false}>
        <ul className={style.select}>
          {title.map((el, index) => {
            return (
              <FilterSelectLi key={index} setTitle={setTitle} title={el} />
            );
          })}
        </ul>
      </SimpleBar>
    </div>
  );
};

export default FilterSelect;

import SimpleBar from 'simplebar-react';
import FilterSelectLi from './FilterSelectLi/FilterSelectLi';

import 'simplebar-react/dist/simplebar.min.css';
import './ScrollBar.css';
import style from './FilterSelect.module.scss';

import { IList } from '../../../models/IList';

interface Props {
  setTitle: (title: string, id: number) => void;
  list: IList[];
}

const FilterSelect: React.FC<Props> = ({ setTitle, list }) => {
  if (!list) return null;

  return (
    <div className={style.container} data-simplebar>
      <SimpleBar style={{ maxHeight: 300 }} forceVisible="y" autoHide={false}>
        <ul className={style.select}>
          {list.map((el, index) => {
            return (
              <FilterSelectLi
                id={el.id}
                key={el.id}
                setTitle={setTitle}
                title={el.title}
              />
            );
          })}
        </ul>
      </SimpleBar>
    </div>
  );
};

export default FilterSelect;

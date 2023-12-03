import Filter from './Filter/Filter';
import FilterInput from './FilterInput/FilterInput';
import FilterSelect from './FilterSelect/FilterSelect';

import style from './FilterContainer.module.scss';

const FilterContainer = () => {
  return (
    <div className={style.filterContainer}>
      <div className={style.container}>
        <Filter>
          <FilterInput />
        </Filter>

        <Filter>
          <FilterSelect />
        </Filter>
      </div>
    </div>
  );
};

export default FilterContainer;

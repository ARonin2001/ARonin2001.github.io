import Filter from './Filter/Filter';
import FilterInput from './FilterInput/FilterInput';

import style from './FilterContainer.module.scss';
import FilterLIst from './FilterLIst/FilterLIst';
import FilterSelect from './FilterSelect/FilterSelect';

const FilterContainer: React.FC = () => {
  return (
    <div className={style.filterContainer}>
      <div className={style.container}>
        <Filter>
          <FilterInput />
        </Filter>

        <Filter>
          <FilterLIst title={'Some body'} Child={FilterSelect} />
        </Filter>
      </div>
    </div>
  );
};

export default FilterContainer;

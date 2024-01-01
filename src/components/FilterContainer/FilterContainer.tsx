import Filter from './Filter/Filter';
import FilterInput from './FilterInput/FilterInput';
import FilterLIst from './FilterLIst/FilterLIst';
import FilterSelect from './FilterSelect/FilterSelect';
import FilterCreated from './FilterCreated/FilterCreated';

import style from './FilterContainer.module.scss';

const FilterContainer: React.FC = () => {
  return (
    <div className={style.mainContainer}>
      <div className={style.container}>
        <Filter>
          <FilterInput />
        </Filter>
        <Filter>
          <FilterLIst title={'Author'} Child={FilterSelect} />
        </Filter>
        <Filter>
          <FilterLIst title={'Location'} Child={FilterSelect} />
        </Filter>
        <Filter>
          <FilterLIst title={'Created'} Child={FilterCreated} />
        </Filter>
      </div>
    </div>
  );
};

export default FilterContainer;

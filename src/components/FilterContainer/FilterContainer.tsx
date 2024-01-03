import Filter from './Filter/Filter';
import FilterInput from './FilterInput/FilterInput';
import FilterLIst from './FilterLIst/FilterLIst';
import FilterSelect from './FilterSelect/FilterSelect';
import FilterCreated from './FilterCreated/FilterCreated';

import style from './FilterContainer.module.scss';

import { authorApi } from '../../services/authorApi';
import { IList } from '../../models/IList';
import { locationApi } from '../../services/locationApi';

const FilterContainer: React.FC = () => {
  let { data: authors, error, isLoading } = authorApi.useFetchAllAuthorsQuery();

  let { data: locations } = locationApi.useFetchAllLocationsQuery();

  let listAuthors: IList[];
  let listLocations: IList[];

  listAuthors = authors
    ? authors.map((el) => ({ id: el.id, title: el.name }))
    : [];

  listLocations = locations
    ? locations.map((el) => ({ id: el.id, title: el.location }))
    : [];

  return (
    <div className={style.mainContainer}>
      <div className={style.container}>
        <Filter>
          <FilterInput />
        </Filter>
        <Filter>
          <FilterLIst
            title={'Author'}
            list={listAuthors}
            Child={FilterSelect}
          />
        </Filter>
        <Filter>
          <FilterLIst
            title={'Location'}
            list={listLocations}
            Child={FilterSelect}
          />
        </Filter>
        <Filter>
          <FilterLIst title={'Created'} Child={FilterCreated} />
        </Filter>
      </div>
    </div>
  );
};

export default FilterContainer;

import Filter from './Filter/Filter';
import FilterLIst from './FilterLIst/FilterLIst';
import FilterSelect from './FilterSelect/FilterSelect';
import FilterCreated from './FilterCreated/FilterCreated';
import Input from '../Input/Input';

import style from './FilterContainer.module.scss';

import { authorApi } from '../../services/authorApi';
import { IList } from '../../models/IList';
import { IAuthor } from '../../models/IAuthor';
import { ILocation } from '../../models/ILocation';
import { locationApi } from '../../services/locationApi';

interface FilterContainerProps {
  name?: string;
  setName: (value?: string) => void;
  setItemValueId: (id?: number) => void;
  setItemLocationId: (id?: number) => void;
  setYearCreatedFrom: (value?: string) => void;
  setYearCreatedBefore: (value?: string) => void;
  createdFrom?: string;
  createdBefore?: string;
}

const FilterContainer: React.FC<FilterContainerProps> = ({
  setName,
  setItemValueId,
  setItemLocationId,
  setYearCreatedFrom,
  setYearCreatedBefore,
  createdFrom,
  createdBefore,
  name,
}) => {
  let { data: authors } = authorApi.useFetchAllAuthorsQuery();
  let { data: locations } = locationApi.useFetchAllLocationsQuery();

  let listAuthors: IList[];
  let listLocations: IList[];

  listAuthors = authors
    ? authors.map((el: IAuthor) => ({ id: el.id, title: el.name }))
    : [];

  listLocations = locations
    ? locations.map((el: ILocation) => ({ id: el.id, title: el.location }))
    : [];

  return (
    <div className={style.mainContainer}>
      <div className={style.container}>
        <Filter>
          <Input
            setValue={setName}
            value={name}
            name={'Name'}
            type={'text'}
            className={style.inputName}
          />
        </Filter>
        <Filter>
          <FilterLIst
            title={'Author'}
            list={listAuthors}
            Child={FilterSelect}
            setItemValueId={setItemValueId}
          />
        </Filter>
        <Filter>
          <FilterLIst
            title={'Location'}
            list={listLocations}
            Child={FilterSelect}
            setItemValueId={setItemLocationId}
          />
        </Filter>
        <Filter>
          <FilterLIst
            title={'Created'}
            Child={FilterCreated}
            setYearCreatedFrom={setYearCreatedFrom}
            setYearCreatedBefore={setYearCreatedBefore}
            createdFrom={createdFrom}
            createdBefore={createdBefore}
          />
        </Filter>
      </div>
    </div>
  );
};

export default FilterContainer;

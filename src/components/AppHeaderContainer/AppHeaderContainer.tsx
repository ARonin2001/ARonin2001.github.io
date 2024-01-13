import FilterContainer from '../FilterContainer/FilterContainer';
import Header from '../Header/Header';

import style from './AppHeaderContainer.module.scss';

interface AppHeaderContainerProps {
  setName: (value?: string) => void;
  name?: string;
  setItemValueId: (id?: number) => void;
  setItemLocationId: (id?: number) => void;
  setYearCreatedFrom: (value?: string) => void;
  setYearCreatedBefore: (value?: string) => void;
  createdFrom?: string;
  createdBefore?: string;
}

const AppHeaderContainer: React.FC<AppHeaderContainerProps> = ({
  setName,
  setItemValueId,
  setItemLocationId,
  setYearCreatedFrom,
  setYearCreatedBefore,
  createdFrom,
  createdBefore,
  name,
}) => {
  return (
    <>
      <div className={style.header}>
        <Header />
      </div>

      <div className={style.filter}>
        <FilterContainer
          setName={setName}
          setItemValueId={setItemValueId}
          setItemLocationId={setItemLocationId}
          setYearCreatedFrom={setYearCreatedFrom}
          setYearCreatedBefore={setYearCreatedBefore}
          createdFrom={createdFrom}
          createdBefore={createdBefore}
          name={name}
        />
      </div>
    </>
  );
};

export default AppHeaderContainer;

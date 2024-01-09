import style from './FilterCreated.module.scss';
import Input from './Input/Input';

interface FilterCreatedProps {
  setYearCreatedFrom: (value: string | undefined) => void;
  setYearCreatedBefore: (value: string | undefined) => void;
  createdFrom: string | undefined;
  createdBefore: string | undefined;
}

const FilterCreated: React.FC<FilterCreatedProps> = ({
  setYearCreatedBefore,
  setYearCreatedFrom,
  createdBefore,
  createdFrom,
}) => {
  return (
    <div className={style.container}>
      <div className={style.form}>
        <div className={style.inputs}>
          <Input
            placeholder={'from'}
            setInputValue={setYearCreatedFrom}
            value={createdFrom}
          />
          <span className={style.dash}></span>
          <Input
            placeholder={'before'}
            setInputValue={setYearCreatedBefore}
            value={createdBefore}
          />
        </div>
      </div>
    </div>
  );
};

export default FilterCreated;

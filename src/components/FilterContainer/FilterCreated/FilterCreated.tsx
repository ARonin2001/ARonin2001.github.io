import Input from '../../Input/Input';
import style from './FilterCreated.module.scss';

interface FilterCreatedProps {
  setYearCreatedFrom: (value: string | undefined) => void;
  setYearCreatedBefore: (value: string | undefined) => void;
  createdFrom?: string;
  createdBefore?: string;
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
            name={'from'}
            type={'number'}
            value={createdFrom}
            setValue={setYearCreatedFrom}
            className={style.inp}
          />
          <span className={style.dash}></span>
          <Input
            name={'before'}
            type={'number'}
            value={createdBefore}
            setValue={setYearCreatedBefore}
            className={style.inp}
          />
        </div>
      </div>
    </div>
  );
};

export default FilterCreated;

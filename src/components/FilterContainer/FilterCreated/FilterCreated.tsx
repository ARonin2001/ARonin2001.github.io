import style from './FilterCreated.module.scss';
import Input from './Input/Input';

const FilterCreated: React.FC = () => {
  return (
    <div className={style.container}>
      <div className={style.form}>
        <div className={style.inputs}>
          <Input placeholder={'from'} />
          <span className={style.dash}></span>
          <Input placeholder={'before'} />
        </div>
      </div>
    </div>
  );
};

export default FilterCreated;

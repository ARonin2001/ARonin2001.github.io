import style from './Filter.module.scss';

interface FilterProps {
  children: React.ReactNode;
}

const Filter = (props: FilterProps) => {
  return <div className={style.filter}>{props.children}</div>;
};

export default Filter;

import style from './FilterSelectLi.module.scss';

interface Props {
  setTitle: (title: string) => void;
  title: string;
}

const FilterSelectLi: React.FC<Props> = ({ setTitle, title }) => {
  return (
    <li className={style.li} onClick={(): void => setTitle(title)}>
      <div className={style.content}>{title}</div>
    </li>
  );
};

export default FilterSelectLi;

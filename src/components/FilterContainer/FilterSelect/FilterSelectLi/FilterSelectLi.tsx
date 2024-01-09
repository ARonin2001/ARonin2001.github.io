import style from './FilterSelectLi.module.scss';

interface Props {
  setTitle: (title: string, id: number) => void;
  id: number;
  title: string;
}

const FilterSelectLi: React.FC<Props> = ({ setTitle, title, id }) => {
  return (
    <li className={style.li} onClick={(): void => setTitle(title, id)}>
      <div className={style.content}>{title}</div>
    </li>
  );
};

export default FilterSelectLi;

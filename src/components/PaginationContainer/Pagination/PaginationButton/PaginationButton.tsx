import style from './PaginationButton.module.scss';

type Props = {
  content: string | number | JSX.Element;
  styles?: string;
  onHandleClick: (numberPage: number) => void;
};

const PaginationButton = (props: Props) => {
  const { content, styles, onHandleClick } = props;

  return (
    <button
      className={style.page + ' ' + styles}
      onClick={() => onHandleClick(Number(content))}
    >
      {content}
    </button>
  );
};

export default PaginationButton;

import style from './Description.module.scss';

interface Props {
  title: string;
  body: string;
}

const Description: React.FC<Props> = ({ title, body }) => {
  return (
    <div className={style.description}>
      <span className={style.title}>{title}</span>
      <span className={style.body}>{body}</span>
    </div>
  );
};

export default Description;

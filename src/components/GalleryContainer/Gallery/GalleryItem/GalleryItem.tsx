import Description from './Description/Description';
import style from './GalleryItem.module.scss';

interface Props {
  pictureRef: string;
  imgPath: string;
  name: string;
  created: string;
  author: string;
  location: string;
}

const GalleryItem: React.FC<Props> = ({
  pictureRef,
  imgPath,
  name,
  created,
  author,
  location,
}) => {
  return (
    <div className={style.item}>
      <div className={style.container}>
        <a
          className={style.link}
          href={imgPath}
          onClick={(e) => e.preventDefault()}
        >
          <img className={style.img} src={pictureRef} alt={name} />

          <div className={style.info}>
            <div className={style.infoContainer}>
              <h3 className={style.title}>{name}</h3>

              <div className={style.descriptionContainer}>
                <Description title={'Author:'} body={author} />
                <Description title={'Created:'} body={created} />
                <Description title={'Location:'} body={location} />
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default GalleryItem;

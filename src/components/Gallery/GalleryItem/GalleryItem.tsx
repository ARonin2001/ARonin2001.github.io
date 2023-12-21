import Description from './Description/Description';
import style from './GalleryItem.module.scss';

interface Props {
  pictureRef: string;
  imgPath: string;
  title: string;
}

const GalleryItem: React.FC<Props> = ({ pictureRef, imgPath, title }) => {
  return (
    <div className={style.item}>
      <div className={style.container}>
        <a className={style.link} href={imgPath}>
          <img className={style.img} src={pictureRef} alt={title} />

          <div className={style.info}>
            <div className={style.infoContainer}>
              <h3 className={style.title}>{title}</h3>

              <div className={style.descriptionContainer}>
                <Description title={'Author:'} body={'Rembrandt'} />
                <Description title={'Created:'} body={'1642'} />
                <Description title={'Location:'} body={'The Rijksmuseum'} />
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default GalleryItem;

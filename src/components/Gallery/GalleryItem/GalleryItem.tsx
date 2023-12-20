import style from './GalleryItem.module.scss';

const GalleryItem: React.FC = () => {
  return (
    <div className={style.item}>
      <div className={style.container}>
        <a className={style.link} href="#">
          <img
            className={style.img}
            src="http://tokyoyakei.jp/tokyo/tokyo-tower/t-tower-4145l.jpg"
            alt=""
          />

          <div className={style.info}>
            <div className={style.infoContainer}>
              <h3 className={style.title}>The Night Watch</h3>

              <div className={style.descriptionContainer}>
                <div className={style.description}>
                  <span className={style.descriptionTitle}>Author:</span>
                  <span className={style.descriptionBody}>Rembrandt</span>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default GalleryItem;

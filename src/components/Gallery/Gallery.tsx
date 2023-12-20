import style from './Gallery.module.scss';
import GalleryItem from './GalleryItem/GalleryItem';

const Gallery: React.FC = () => {
  return (
    <div className={style.gallery}>
      <div className={style.container}>
        <GalleryItem />
        <GalleryItem />
        <GalleryItem />
        <GalleryItem />
        <GalleryItem />
        <GalleryItem />
        <GalleryItem />
        <GalleryItem />
        <GalleryItem />
        <GalleryItem />
        <GalleryItem />
      </div>
    </div>
  );
};

export default Gallery;

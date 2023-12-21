import style from './Gallery.module.scss';
import GalleryItem from './GalleryItem/GalleryItem';

const Gallery: React.FC = () => {
  return (
    <div className={style.gallery}>
      <div className={style.container}>
        <GalleryItem
          imgPath={'#'}
          pictureRef={
            'http://tokyoyakei.jp/tokyo/tokyo-tower/t-tower-4145l.jpg'
          }
          title={'The Night Watch'}
        />
        <GalleryItem
          imgPath={'#'}
          pictureRef={
            'http://tokyoyakei.jp/tokyo/tokyo-tower/t-tower-4145l.jpg'
          }
          title={'The Night Watch'}
        />
        <GalleryItem
          imgPath={'#'}
          pictureRef={
            'http://tokyoyakei.jp/tokyo/tokyo-tower/t-tower-4145l.jpg'
          }
          title={'The Night Watch'}
        />
        <GalleryItem
          imgPath={'#'}
          pictureRef={
            'http://tokyoyakei.jp/tokyo/tokyo-tower/t-tower-4145l.jpg'
          }
          title={'The Night Watch'}
        />
        <GalleryItem
          imgPath={'#'}
          pictureRef={
            'http://tokyoyakei.jp/tokyo/tokyo-tower/t-tower-4145l.jpg'
          }
          title={'The Night Watch'}
        />
        <GalleryItem
          imgPath={'#'}
          pictureRef={
            'http://tokyoyakei.jp/tokyo/tokyo-tower/t-tower-4145l.jpg'
          }
          title={'The Night Watch'}
        />
        <GalleryItem
          imgPath={'#'}
          pictureRef={
            'http://tokyoyakei.jp/tokyo/tokyo-tower/t-tower-4145l.jpg'
          }
          title={'The Night Watch'}
        />
      </div>
    </div>
  );
};

export default Gallery;

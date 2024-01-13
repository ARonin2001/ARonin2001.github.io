import React from 'react';

import GalleryItem from './GalleryItem/GalleryItem';

import style from './Gallery.module.scss';

import { settingsApi } from '../../../services/settingsApi';
import { IPainting } from '../../../models/IPainting';

type GalleryProps = {
  listPaintings: IPainting[];
};

const Gallery: React.FC<GalleryProps> = ({ listPaintings }) => {
  if (listPaintings.length === 0) return <h2>Paitings is not to be:</h2>;

  return (
    <div className={style.gallery}>
      <div className={style.container}>
        {listPaintings.map((el) => {
          return (
            <GalleryItem
              key={el.id}
              imgPath={settingsApi.baseUrl + el.imageUrl}
              pictureRef={settingsApi.baseUrl + el.imageUrl}
              name={el.name}
              created={el.created}
              author={el.author.toString()}
              location={el.location.toString()}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Gallery;

import React from 'react';

import GalleryItem from './GalleryItem/GalleryItem';

import style from './Gallery.module.scss';

import { settingsApi } from '../../../services/settingsApi';

interface Paintings {
  author: string;
  created: string;
  id: number;
  imageUrl: string;
  location: string;
  name: string;
}

type GalleryProps = {
  limit: number;
  page: number;
  listPaintings: Paintings[];
};

const Gallery: React.FC<GalleryProps> = ({ limit, page, listPaintings }) => {
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
              author={el.author}
              location={el.location}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Gallery;

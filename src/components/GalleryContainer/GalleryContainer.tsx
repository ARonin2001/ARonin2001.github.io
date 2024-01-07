import React, { useState, useEffect } from 'react';

import Gallery from './Gallery/Gallery';
import { authorApi } from '../../services/authorApi';
import { locationApi } from '../../services/locationApi';
import { IPainting } from '../../models/IPainting';

interface Paintings {
  author: string;
  created: string;
  id: number;
  imageUrl: string;
  location: string;
  name: string;
}

type GalleryContainerProps = {
  limit: number;
  page: number;
  // paintings: IPainting[];
  paintings: Paintings[];
};

const GalleryContainer = ({
  limit,
  page,
  paintings,
}: GalleryContainerProps) => {
  // let [listPaintings, setListPaintings] = useState<Paintings[]>([]);

  // const { data: authors } = authorApi.useFetchAllAuthorsQuery();
  // const { data: locations } = locationApi.useFetchAllLocationsQuery();

  // useEffect(() => {
  //   let list = paintings.map((el) => {
  //     return {
  //       author: authors?.find((auth) => el.authorId === auth.id)?.name || '',
  //       created: el.created,
  //       id: el.id,
  //       imageUrl: el.imageUrl,
  //       location:
  //         locations?.find((loc) => el.locationId === loc.id)?.location || '',
  //       name: el.name,
  //     };
  //   });

  //   setListPaintings(list);
  // }, [paintings]);

  return <Gallery limit={limit} page={page} listPaintings={paintings} />;
};

export default React.memo(GalleryContainer);

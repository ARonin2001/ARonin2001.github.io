import React from 'react';

import Gallery from './Gallery/Gallery';
import { paintingApi } from '../../services/paintingApi';

type GalleryContainerProps = {
  limit: number;
  page: number;
  name?: string;
  authorId?: number;
  locationId?: number;
  createdFrom?: string;
  createdBefore?: string;
};

const GalleryContainer: React.FC<GalleryContainerProps> = ({
  limit,
  page,
  name,
  authorId,
  locationId,
  createdFrom,
  createdBefore,
}) => {
  let { data: paintings, isLoading } =
    paintingApi.useFetchPaintingsWithParamsQuery({
      limit,
      page,
      name,
      authorId,
      locationId,
      createdFrom,
      createdBefore,
    });
  return <Gallery listPaintings={paintings || []} />;
};

export default React.memo(GalleryContainer);

import axios from 'axios';
import { IPainting, IPaintingWithId } from '../models/IPainting';
import { emptySplitApi } from './emptySplitApi';
import { authorApi } from './authorApi';
import { settingsApi } from './settingsApi';
import { locationApi } from './locationApi';
import { IAuthor } from '../models/IAuthor';
import { ILocation } from '../models/ILocation';

interface PaintingUrlSettings {
  limit?: number;
  page?: number;
}

interface PaintingTransformResponse {
  authors: IAuthor[];
  locations: ILocation[];
  paintings: IPaintingWithId[];
}

export const paintingApi = emptySplitApi.injectEndpoints({
  endpoints: (builder) => ({
    fetchAllPaintings: builder.query<IPaintingWithId[], void>({
      query: () => ({ url: '/paintings', method: 'get' }),
    }),
    fetchPaintingsWithParams: builder.query<IPainting[], PaintingUrlSettings>({
      queryFn: async (arg) => {
        try {
          const { limit, page } = arg;

          const authors = await axios
            .get<IAuthor[]>(settingsApi.baseUrl + `/authors`)
            .then((res) => res.data);
          const locations = await axios
            .get<ILocation[]>(settingsApi.baseUrl + `/locations`)
            .then((res) => res.data);
          const paintings = await axios
            .get<IPaintingWithId[]>(
              settingsApi.baseUrl + `/paintings?_limit=${limit}&_page=${page}`,
            )
            .then((res) => res.data);

          const paintingsList: IPainting[] = await paintings?.map(
            (el: IPaintingWithId) => {
              return {
                author:
                  authors?.find((auth: IAuthor) => el.authorId === auth.id)
                    ?.name || '',
                created: el.created,
                id: el.id,
                imageUrl: el.imageUrl,
                location:
                  locations.find((loc: ILocation) => el.locationId === loc.id)
                    ?.location || '',
                name: el.name,
              };
            },
          );

          return paintingsList ? { data: paintingsList } : { data: [] };
        } catch (error) {
          return { error };
        }
      },
    }),
  }),
});

export const { useFetchAllPaintingsQuery, useFetchPaintingsWithParamsQuery } =
  paintingApi;

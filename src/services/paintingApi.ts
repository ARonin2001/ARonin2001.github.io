import axios from 'axios';
import { IPainting, IPaintingWithId } from '../models/IPainting';
import { emptySplitApi } from './emptySplitApi';
import { settingsApi } from './settingsApi';
import { IAuthor } from '../models/IAuthor';
import { ILocation } from '../models/ILocation';
import { authorApi } from './authorApi';

interface PaintingUrlSettings {
  limit?: number;
  page?: number;
  authorId?: number;
  locationId?: number;
  name?: string;
  createdFrom?: string;
  createdBefore?: string;
}

export const paintingApi = emptySplitApi.injectEndpoints({
  endpoints: (builder) => ({
    fetchAllPaintings: builder.query<IPainting[], void>({
      query: () => ({ url: '/paintings', method: 'get' }),
    }),
    fetchPaintingsWithParams: builder.query<IPainting[], PaintingUrlSettings>({
      query: ({
        limit = 9,
        page = 1,
        authorId,
        locationId,
        name,
        createdFrom,
        createdBefore,
      }) => ({
        url: '/paintings',
        method: 'get',
        params: {
          _limit: limit,
          _page: page,
          authorId,
          locationId,
          name,
          created_gte: createdFrom,
          created_lte: createdBefore,
        },
      }),
      transformResponse: async (response: IPaintingWithId[], meta, arg) => {
        if (!response) return [];

        const { authorId, locationId } = arg;

        const { data: authors } = await axios.get<IAuthor[]>(
          settingsApi.baseUrl + '/authors',
          {
            params: {
              authorId,
            },
          },
        );
        const { data: locations } = await axios.get<ILocation[]>(
          settingsApi.baseUrl + '/locations',
          {
            params: {
              locationId,
            },
          },
        );

        const paintingsList: IPainting[] = response?.map(
          (el: IPaintingWithId) => {
            return {
              ...el,
              author:
                authors?.find((auth: IAuthor) => el.authorId === auth.id)
                  ?.name || '',
              location:
                locations.find((loc: ILocation) => el.locationId === loc.id)
                  ?.location || '',
            };
          },
        );

        return paintingsList;
      },
      providesTags: ['PaintingWithParams'],
    }),
  }),
});

export const { useFetchAllPaintingsQuery, useFetchPaintingsWithParamsQuery } =
  paintingApi;

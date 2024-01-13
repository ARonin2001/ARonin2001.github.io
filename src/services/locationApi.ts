import { ILocation } from '../models/ILocation';
import { emptySplitApi } from './emptySplitApi';

export const locationApi = emptySplitApi.injectEndpoints({
  endpoints: (builder) => ({
    fetchAllLocations: builder.query<ILocation[], void>({
      query: () => ({ url: '/locations', method: 'get' }),
    }),
  }),
});

export const { useFetchAllLocationsQuery } = locationApi;

import { createApi } from '@reduxjs/toolkit/query/react';
import axiosBaseQuery from './axios';
import { settingsApi } from './settingsApi';
import { ILocation } from '../models/ILocation';

export const locationApi = createApi({
  reducerPath: 'locationApi',
  baseQuery: axiosBaseQuery({ baseUrl: settingsApi.baseUrl }),
  endpoints: (builder) => ({
    fetchAllLocations: builder.query<ILocation[], void>({
      query: () => ({ url: 'locations', method: 'get' }),
    }),
  }),
});

export const { useFetchAllLocationsQuery } = locationApi;

import { createApi } from '@reduxjs/toolkit/query/react';
import axiosBaseQuery from './axios';
import { settingsApi } from './settingsApi';
import { IPainting } from '../models/IPainting';

export const paintingsApi = createApi({
  reducerPath: 'paintingsApi',
  baseQuery: axiosBaseQuery({ baseUrl: settingsApi.baseUrl }),
  endpoints: (builder) => ({
    fetchAllPaintings: builder.query<IPainting[], void>({
      query: () => ({ url: 'paintings', method: 'get' }),
    }),
  }),
});

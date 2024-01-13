import { createApi } from '@reduxjs/toolkit/query/react';
import axiosBaseQuery, { urlApi } from './axios';

export const emptySplitApi = createApi({
  reducerPath: 'api',
  baseQuery: axiosBaseQuery({ baseUrl: urlApi }),
  tagTypes: ['PaintingWithParams'],
  endpoints: () => ({}),
});

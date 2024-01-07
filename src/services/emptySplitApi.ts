import { createApi } from '@reduxjs/toolkit/query/react';
import axiosBaseQuery from './axios';
import { settingsApi } from './settingsApi';

export const emptySplitApi = createApi({
  reducerPath: 'api',
  baseQuery: axiosBaseQuery({ baseUrl: settingsApi.baseUrl }),
  tagTypes: ['allAuthors'],
  endpoints: () => ({}),
});

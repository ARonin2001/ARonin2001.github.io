import { createApi } from '@reduxjs/toolkit/query/react';
import { IAuthor } from '../models/IAuthor';
import axiosBaseQuery from './axios';
import { settingsApi } from './settingsApi';

export const authorApi = createApi({
  reducerPath: 'authorApi',
  baseQuery: axiosBaseQuery({ baseUrl: settingsApi.baseUrl }),
  endpoints: (builder) => ({
    fetchAllAuthors: builder.query<IAuthor[], void>({
      query: () => ({ url: 'authors', method: 'get' }),
    }),
  }),
});

export const { useFetchAllAuthorsQuery } = authorApi;

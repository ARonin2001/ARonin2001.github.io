import { IAuthor } from '../models/IAuthor';
import { emptySplitApi } from './emptySplitApi';

export const authorApi = emptySplitApi.injectEndpoints({
  endpoints: (builder) => ({
    fetchAllAuthors: builder.query<IAuthor[], void>({
      query: () => ({ url: '/authors', method: 'get' }),
      providesTags: ['allAuthors'],
    }),
    getAuthorById: builder.query<IAuthor[], number>({
      query: (id: number) => ({ url: `/authors?id=${id}`, method: 'get' }),
    }),
  }),
});

export const { useFetchAllAuthorsQuery, useGetAuthorByIdQuery } = authorApi;

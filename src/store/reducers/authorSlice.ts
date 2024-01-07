import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAuthor } from '../../models/IAuthor';
import { authorApi } from '../../services/authorApi';

interface AuthorState {
  authors: IAuthor[];
}

const initialState: AuthorState = { authors: [] };

export const authorSlice = createSlice({
  name: 'author',
  initialState,
  reducers: {
    setAuthors: (state, action) => {
      state.authors = action.payload || [];
    },
  },
});

export const { setAuthors } = authorSlice.actions;

export default authorSlice.reducer;

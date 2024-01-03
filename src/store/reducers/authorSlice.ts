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
  reducers: {},
});

export default authorSlice.reducer;

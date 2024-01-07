import { configureStore } from '@reduxjs/toolkit';

import authorReducer from './reducers/authorSlice';
import { emptySplitApi } from '../services/emptySplitApi';

export const store = configureStore({
  reducer: {
    authorReducer,
    [emptySplitApi.reducerPath]: emptySplitApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(emptySplitApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

import { configureStore } from '@reduxjs/toolkit';

import authorReducer from './reducers/authorSlice';
import { authorApi } from '../services/authorApi';
import { locationApi } from '../services/locationApi';

export const store = configureStore({
  reducer: {
    authorReducer,
    [authorApi.reducerPath]: authorApi.reducer,
    [locationApi.reducerPath]: locationApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authorApi.middleware, locationApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

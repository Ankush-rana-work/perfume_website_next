import { combineReducers, configureStore } from '@reduxjs/toolkit';
import commonReducer from './feature/commonSlice';
import { productApi } from './api/productApi';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

// making combine reducers
export const rootReducers = combineReducers({
  common: persistReducer({key: "common", storage }, commonReducer),
  [productApi.reducerPath]: productApi.reducer,
});

export const store = configureStore({
  reducer: rootReducers,
  devTools: process.env.NEXT_PUBLIC_ENV !== "production",
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false, }).concat([
    productApi.middleware,
  ]),
});

export const persistor = persistStore(store);
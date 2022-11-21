import {configureStore} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/query';
import {pokemonApi} from '../services/pokemon';
import serverReducer from './slice/ServerSlice';

const middlewares = [
  /* other middlewares */
  pokemonApi.middleware,
];
if (__DEV__) {
  const createDebugger = require('redux-flipper').default;
  middlewares.push(createDebugger());
}

export const store = configureStore({
  reducer: {
    server_list: serverReducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  },
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware().concat(middlewares);
  },
});

setupListeners(store.dispatch);

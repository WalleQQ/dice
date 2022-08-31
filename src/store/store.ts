import {combineReducers, configureStore} from '@reduxjs/toolkit';
import rollReducer from './reducers/userRoll';

const rootReducer = combineReducers({
  rollReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];

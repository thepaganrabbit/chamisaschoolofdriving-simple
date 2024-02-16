import { init, RematchDispatch, RematchRootState } from '@rematch/core';
// import * as models from "./models";
import { RootModel, models } from './models';
const store = init({
  models,
});
export type Store = typeof store;
export type Dispatch = RematchDispatch<RootModel>;
export type RootState = RematchRootState<RootModel>;
export default store;
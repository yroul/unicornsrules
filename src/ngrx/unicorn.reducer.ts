import {
  createReducer,
  on,
  createSelector,
  createFeatureSelector,
} from '@ngrx/store';
import { Unicorn } from 'src/app/model/Unicorn';
import { createUnicornSuccess, fetchUnicornSuccess, updateUnicornSuccess } from './unicorn.actions';

const initialUnicornsList: Unicorn[] = [];

export interface UnicornStateInterface {
  unicornsList: Unicorn[];
}
export const initialState: UnicornStateInterface = {
  unicornsList: initialUnicornsList,
};
const feature = createFeatureSelector<UnicornStateInterface>('unicorns');
export const selectUnicornsList = createSelector(
  feature,
  (state): Unicorn[] => state && state.unicornsList
);
export const selectUnicornById = (id: string) => createSelector(
  feature,
  ({unicornsList}) =>{
    return unicornsList.filter((u:Unicorn) => u.id === id)[0];
  }
);

export const unicornReducer = createReducer(
  initialState,
  on(createUnicornSuccess, (state, { unicorn }) => {
    const newArray = state.unicornsList.slice(0);
    newArray.push(unicorn);
    return {
      unicornsList: [...newArray],
    };
  }),
  on(fetchUnicornSuccess, (state, { unicorns }) => ({
    unicornsList: unicorns,
  })),
  on(updateUnicornSuccess, (state, { unicorn }) => {
    const newArray = state.unicornsList.slice(0);
    newArray.push(unicorn);
    return {
      unicornsList: [...newArray],
    };
  }),
);

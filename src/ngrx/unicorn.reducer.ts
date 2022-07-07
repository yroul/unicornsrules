import {
  createReducer,
  on,
  createSelector,
  createFeatureSelector,
} from '@ngrx/store';
import { Unicorn } from 'src/app/model/Unicorn';
import { createUnicornSuccess, fetchUnicornSuccess } from './unicorn.actions';

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
  }))
);

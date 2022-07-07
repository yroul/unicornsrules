import {
  createReducer, on, createSelector, createFeatureSelector,
} from '@ngrx/store';
import { Unicorn } from 'src/app/model/Unicorn';
import { create, createUnicornSuccess, fetchUnicornSuccess } from './unicorn.actions';

const initialUnicornsList: Unicorn[] = [];

export interface UnicornStateInterface{
  unicornsList: Unicorn[]
}
export const initialState: UnicornStateInterface = {
  unicornsList: initialUnicornsList,
};
const feature = createFeatureSelector<UnicornStateInterface>('unicorns');
export const selectUnicornsList = createSelector(feature, (state): Unicorn[] => state && state.unicornsList);

export const unicornReducer = createReducer(
  initialState,
  on(createUnicornSuccess, (state, { unicorn }) => {
    console.log('calling reducer on sucess');
    console.log(unicorn);
    const newArray = state.unicornsList.slice(0);
    newArray.push(unicorn);
    console.log('new array', newArray);
    return {
      unicornsList: [...newArray],
    };
  }),
  on(fetchUnicornSuccess, (state, { unicorns }) => ({
    unicornsList: unicorns,
  })),
);

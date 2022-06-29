import { createReducer, on, createSelector, createFeatureSelector } from '@ngrx/store';
import { Unicorn } from 'src/app/model/Unicorn';
import { create,createUnicornSuccess } from './unicorn.actions';


const initialUnicornsList: Unicorn[] = [];

export interface UnicornStateInterface{
  unicornsList: Unicorn[]
}
export const initialState: UnicornStateInterface = {
  unicornsList: initialUnicornsList,
};
const feature = createFeatureSelector<UnicornStateInterface>("unicorns");
export const selectUnicornsList = createSelector(feature, (state): Unicorn[] => {
  return state && state.unicornsList;
});


export const unicornReducer = createReducer(
  initialState,
  on(createUnicornSuccess, (state, { unicorn}) => {
    console.log("calling reducer on sucess");
    console.log(unicorn);
    const newArray = state.unicornsList.slice(0);
    return {
      unicornsList: [...state.unicornsList, unicorn],
    };
  }),
);
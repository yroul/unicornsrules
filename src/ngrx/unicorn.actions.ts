import { createAction, props } from '@ngrx/store';
import { Unicorn } from 'src/app/model/Unicorn';

export const CREATE_UNICORN_ACTION = 'Create Unicorn';
export const UPDATE_UNICORN_ACTION = 'UPDATE Unicorn';
export const CREATE_UNICORN_SUCESS_ACTION = 'Create Unicorn SUCCESS';
export const UPDATE_UNICORN_SUCESS_ACTION = 'Update Unicorn SUCCESS';
export const FETCH_UNICORN_ACTION = 'Fetch Unicorns';
export const FETCH_UNICORN_SUCCESS_ACTION = 'Fetch Unicorns SUCCESS';
export const CLEAR_DATABASE_ACTION = 'Clear Database';
export const CLEAR_DATABASE_SUCCESS_ACTION = 'Clear Database SUCCESS';
export const create = createAction(
  CREATE_UNICORN_ACTION,
  props<{ unicorn: Unicorn }>()
);
export const update = createAction(
  UPDATE_UNICORN_ACTION,
  props<{ unicorn: Unicorn }>()
);
export const updateUnicornSuccess = createAction(
  UPDATE_UNICORN_SUCESS_ACTION,
  props<{ unicorn: Unicorn }>()
);
export const createUnicornSuccess = createAction(
  CREATE_UNICORN_SUCESS_ACTION,
  props<{ unicorn: Unicorn }>()
);
export const fetchUnicorn = createAction(FETCH_UNICORN_ACTION);
export const fetchUnicornSuccess = createAction(
  FETCH_UNICORN_SUCCESS_ACTION,
  props<{ unicorns: Unicorn[] }>()
);
export const clearDatabase = createAction(CLEAR_DATABASE_ACTION);
export const clearDatabaseSuccess = createAction(CLEAR_DATABASE_SUCCESS_ACTION);

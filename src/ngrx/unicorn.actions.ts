import { createAction, props } from '@ngrx/store';
import { Unicorn } from 'src/app/model/Unicorn';
export const CREATE_UNICORN_ACTION = "Create Unicorn";
export const CREATE_UNICORN_SUCESS_ACTION = "Create Unicorn SUCCESS"
export const create = createAction(
    CREATE_UNICORN_ACTION,
    props<{ unicorn: Unicorn}>());
export const createUnicornSuccess = createAction(
    CREATE_UNICORN_SUCESS_ACTION,
    props<{ unicorn: Unicorn}>()
)
import { createAction, props } from '@ngrx/store';
import { Unicorn } from 'src/app/model/Unicorn';
export const create = createAction(
    'Create Unicorn',
    props<{ unicorn: Unicorn}>());
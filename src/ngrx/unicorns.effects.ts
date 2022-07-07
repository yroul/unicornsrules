import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, EmptyError, of, pipe, tap } from 'rxjs';
import { map, mergeMap, catchError, exhaustMap } from 'rxjs/operators';
import { Unicorn } from 'src/app/model/Unicorn';
import { UnicornService } from 'src/app/services/unicorn.service';
import {
  CLEAR_DATABASE_ACTION,
  clearDatabaseSuccess,
  CREATE_UNICORN_ACTION,
  FETCH_UNICORN_ACTION,
  UPDATE_UNICORN_ACTION,
  updateUnicornSuccess
} from './unicorn.actions';
import { createUnicornSuccess,fetchUnicornSuccess,  } from './unicorn.actions';
@Injectable()
export class UnicornEffects {

  createUnicorn$ = createEffect(() =>
    () => this.actions$.pipe(
      ofType(CREATE_UNICORN_ACTION),
      exhaustMap(({unicorn}) =>
          this.unicornService.saveUnicorn(unicorn).pipe(
              map((ackUnicorn) => createUnicornSuccess(ackUnicorn)),
              catchError((err)=> {throw new Error(err);})
      ))
  ));
  fetchUnicorn$ = createEffect(() =>
    () => this.actions$.pipe(
      ofType(FETCH_UNICORN_ACTION),
      exhaustMap(() =>
        this.unicornService.fetchUnicorns().pipe(
          map((d) => {
            return fetchUnicornSuccess({unicorns: d});
          }),
          catchError((err:Error)=> {
           /* if(err.message.includes("no item found for key")){
              this.unicornService.initializeLocalStorage().subscribe();
            }*/
            throw err;
          })
        )
      )
  ));
  clearDatabase$ = createEffect(() =>
    () => this.actions$.pipe(
      ofType(CLEAR_DATABASE_ACTION),
      exhaustMap(() => {
        return this.unicornService.clearDatabase().pipe(
          map(() => clearDatabaseSuccess())
        )
      })
    ));
    updateUnicorn$ = createEffect(() => 
      () => this.actions$.pipe(
        ofType(UPDATE_UNICORN_ACTION),
        exhaustMap(({unicorn}) => {
          return this.unicornService.updateUnicorn(unicorn).pipe(
            map((ackUnicorn) => updateUnicornSuccess({unicorn: ackUnicorn})),
            catchError((err)=> {throw new Error(err);})
          )
        })
      )
    );

  constructor(
    private actions$: Actions,
    private unicornService: UnicornService
  ) {}
}

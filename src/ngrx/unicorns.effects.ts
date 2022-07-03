import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, EmptyError, of, pipe, tap } from 'rxjs';
import { map, mergeMap, catchError, exhaustMap } from 'rxjs/operators';
import { UnicornService } from 'src/app/services/unicorn.service';
import { CREATE_UNICORN_ACTION,FETCH_UNICORN_ACTION } from './unicorn.actions';
import { createUnicornSuccess,fetchUnicornSuccess } from './unicorn.actions';
@Injectable()
export class UnicornEffects {

  createUnicorn$ = createEffect(() =>
    () => this.actions$.pipe(
      ofType(CREATE_UNICORN_ACTION),
      exhaustMap((createdUnicorn) =>
          this.unicornService.saveUnicorn(createdUnicorn).pipe(
              map((ackUnicorn) => createUnicornSuccess(ackUnicorn)),
              catchError((err)=> {throw new Error(err);})
      ))
  ));
  fetchUnicorn$ = createEffect(() =>
    () => this.actions$.pipe(
      ofType(FETCH_UNICORN_ACTION),
      exhaustMap(() =>
        this.unicornService.fetchUnicorns().pipe(
          map((d) => fetchUnicornSuccess({unicorns: d})),
          catchError((err:Error)=> {
            if(err.message.includes("no item found for key")){
              this.unicornService.initializeLocalStorage().subscribe();
            }
            throw err;
          })
        )
      )
  ));

  constructor(
    private actions$: Actions,
    private unicornService: UnicornService
  ) {}
}

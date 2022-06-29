import { Injectable } from '@angular/core';
import { EMPTY, Observable, of } from 'rxjs';
import { Unicorn } from '../model/Unicorn';
import { Gender } from '../model/Gender';
import { Store } from '@ngrx/store';
import { create } from 'src/ngrx/unicorn.actions';
import { UnicornStateInterface, selectUnicornsList } from 'src/ngrx/unicorn.reducer';

@Injectable({
  providedIn: 'root'
})
export class UnicornService {

  unicorns$: Observable<Unicorn[]>;
  unicorns2$: Observable<Unicorn[]>;
  constructor(private store: Store<{unicorns: Unicorn[]}>) {
    this.unicorns$ = store.select('unicorns');
    this.unicorns2$ = store.select(selectUnicornsList);
   }
  fetchUnicorns():Observable<Unicorn[]> 
  {
    console.log('fetching unicorns...');
    return this.unicorns2$;
  }
  saveUnicorn(unicorn: Unicorn):Observable<any>
  {
    console.log("save unicorn called")
    //TODO save unicorn
    return of(unicorn);
  }
  saveUnicorn2(): Observable<any>
  {
    console.log("fake saveUnicorn");
    return of(EMPTY);
  }
}

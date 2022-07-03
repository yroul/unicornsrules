import { Injectable } from '@angular/core';
import { EMPTY, map, Observable, of, pipe, tap } from 'rxjs';
import { Unicorn } from '../model/Unicorn';
import { Gender } from '../model/Gender';
import { Store } from '@ngrx/store';
import { create } from 'src/ngrx/unicorn.actions';
import { UnicornStateInterface, selectUnicornsList } from 'src/ngrx/unicorn.reducer';
import { LocalStorageService } from './local-storage.service';

const UNICORN_LIST = "unicornList";
@Injectable({
  providedIn: 'root'
})
export class UnicornService {

  unicorns$: Observable<Unicorn[]>;
  unicorns2$: Observable<Unicorn[]>;
  constructor(
    private store: Store<{unicorns: Unicorn[]}>,
    private localStorage: LocalStorageService) {
    this.unicorns$ = store.select('unicorns');
    this.unicorns2$ = store.select(selectUnicornsList);
   }
  fetchUnicorns():Observable<Unicorn[]>
  {
    console.log('fetching unicorns...');
    return this.localStorage.getItem(UNICORN_LIST).pipe(
      map((d) => d)
    )
  }
  saveUnicorn(unicorn: Unicorn):Observable<any>
  {
    console.log("save unicorn called")
    this.localStorage.getItem(UNICORN_LIST).pipe(map((data) => {
        let toSave;
        if(data){
          console.log("unicorn list already exist", data)
          toSave =  data.slice(0);
        } else {
          toSave = new Array();
        }
        toSave.push(unicorn);
        return this.localStorage.setItem(UNICORN_LIST,toSave);
      } )).subscribe();

    return of(unicorn);
  }
  initializeLocalStorage(): Observable<any> {
    return this.localStorage.setItem(UNICORN_LIST, []);
  }
}

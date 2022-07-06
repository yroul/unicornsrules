import {Injectable} from '@angular/core';
import {EMPTY, map, Observable, of} from 'rxjs';
import {Unicorn} from '../model/Unicorn';
import {Gender} from '../model/Gender';
import {Store} from '@ngrx/store';
import {selectUnicornsList} from 'src/ngrx/unicorn.reducer';
import {LocalStorageService} from './local-storage.service';
import {catchError} from "rxjs/operators";

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
      map((d) => d),
      catchError(() => {
       this.initializeLocalStorage().subscribe();
       return of([]);
      })
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
    console.log("Initialize database");
    return this.localStorage.setItem(UNICORN_LIST, []);
  }

  makeBaby(firstUnicorn: Unicorn, secondUnicorn: Unicorn):Unicorn {
    if(firstUnicorn.getGender() === secondUnicorn.getGender()){
      throw new Error("Unicorns with same Gender can't have baby");
    }
    if(firstUnicorn.getGender() === Gender.Other || secondUnicorn.getGender() === Gender.Other){
      throw new Error("Unicorns can't have baby if one of them has 'Other' gender");
    }
    const baby = new Unicorn();
    baby.setName(firstUnicorn.getName() + "-" + secondUnicorn.getName());
    baby.setColor(`#${firstUnicorn.getColor().substring(1, 4) + secondUnicorn.getColor().substring(4, 7)}`);
    baby.setGender(this.getRandomGender());
    return baby;
  }
  private getRandomGender(): Gender{
    const rand =  this.random(0,3);
    switch (rand){
      case 0:
        return Gender.Other;
      case 1:
        return Gender.Female;
      case 2:
        return Gender.Male;
      default:
        throw new Error("Error getting random gender");
    }
  }
  private random(min:number, max:number){
    return Math.floor(Math.random() * (max - min) + min);
  };

  clearDatabase():Observable<any> {
    console.log("clear database");
    return this.localStorage.clear().pipe(
      map(() => this.initializeLocalStorage())
    )
  }
}

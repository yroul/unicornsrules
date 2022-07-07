import { Injectable, SkipSelf } from '@angular/core';
import { EMPTY, map, Observable, of } from 'rxjs';
import { SKILLS_LIST, Unicorn } from '../model/Unicorn';
import { Gender } from '../model/Gender';
import { Store } from '@ngrx/store';
import { selectUnicornsList } from 'src/ngrx/unicorn.reducer';
import { LocalStorageService } from './local-storage.service';
import { catchError, mergeMap, take, tap } from 'rxjs/operators';
import { random } from '../utils/math';

const UNICORN_LIST = 'unicornList';
@Injectable({
  providedIn: 'root',
})
export class UnicornService {
  unicorns$: Observable<Unicorn[]>;
  unicorns2$: Observable<Unicorn[]>;
  constructor(
    private store: Store<{ unicorns: Unicorn[] }>,
    private localStorage: LocalStorageService
  ) {
    this.unicorns$ = store.select('unicorns');
    this.unicorns2$ = store.select(selectUnicornsList);
  }
  fetchUnicorns(): Observable<Unicorn[]> {
    console.log('fetching unicorns...');
    return this.localStorage.getItem(UNICORN_LIST).pipe(
      map((d:any) => d.map((u:Unicorn) => Object.assign(new Unicorn(), u))),
      catchError(() => {
        this.initializeLocalStorage().subscribe();
        return of([]);
      })
    );
  }
  saveUnicorn(unicorn: Unicorn): Observable<any> {
    console.log('save unicorn called', unicorn);
    this.localStorage
      .getItem(UNICORN_LIST)
      .pipe(
        map((data) => {
          let toSave;
          if (data) {
            console.log('unicorn list already exist', data);
            toSave = data.slice(0);
          } else {
            toSave = new Array();
          }
          toSave.push(unicorn);
          return this.localStorage.setItem(UNICORN_LIST, toSave);
        })
      )
      .subscribe();

    return of(unicorn);
  }
  initializeLocalStorage(): Observable<any> {
    console.log('Initialize database');
    return this.localStorage.setItem(UNICORN_LIST, []);
  }

  makeBaby(firstUnicorn: Unicorn, secondUnicorn: Unicorn): Unicorn {
    if (firstUnicorn.gender === secondUnicorn.gender) {
      throw new Error("Unicorns with same Gender can't have baby");
    }
    if (
      firstUnicorn.gender === Gender.Other ||
      secondUnicorn.gender === Gender.Other
    ) {
      throw new Error(
        "Unicorns can't have baby if one of them has 'Other' gender"
      );
    }
    const baby = new Unicorn();
    baby.name = firstUnicorn.name + '-' + secondUnicorn.name;
    baby.color = `#${
      firstUnicorn.color.substring(1, 4) + secondUnicorn.color.substring(4, 7)
    }`;
    baby.gender = this.getRandomGender();

    const firstUnicornEntries = Object.entries(firstUnicorn);
    const secondUnicornEntries = Object.entries(secondUnicorn);
    for (let i = 0; i < SKILLS_LIST.length; i++) {
      const skillName: string = SKILLS_LIST[i];
      const firstUnicornSKillPoint = firstUnicornEntries.filter(
        (entry) => entry[0] === skillName
      )[0][1];
      const secondUnicornSKillPoint = secondUnicornEntries.filter(
        (entry) => entry[0] === skillName
      )[0][1];
      const skillValue = Math.round(
        (firstUnicornSKillPoint + secondUnicornSKillPoint) / 2
      );

      Object.assign(baby, {
        [skillName]: skillValue,
      });
    }

    return baby;
  }
  private getRandomGender(): Gender {
    const rand = random(0, 3);
    switch (rand) {
      case 0:
        return Gender.Other;
      case 1:
        return Gender.Female;
      case 2:
        return Gender.Male;
      default:
        throw new Error('Error getting random gender');
    }
  }

  clearDatabase(): Observable<any> {
    console.log('clear database');
    return this.localStorage
      .clear()
      .pipe(map(() => this.initializeLocalStorage()));
  }
}

import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Unicorn } from '../model/Unicorn';
import { Store } from '@ngrx/store';
import { Actions, ofType } from '@ngrx/effects';
import {
  create,
  CREATE_UNICORN_SUCESS_ACTION,
  FETCH_UNICORN_SUCCESS_ACTION,
  fetchUnicorn,
} from '../../ngrx/unicorn.actions';
import { map, takeUntil } from 'rxjs';
import { Gender } from '../model/Gender';
import { UnicornService } from '../services/unicorn.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-babyfactory',
  templateUrl: './babyfactory.component.html',
  styleUrls: ['./babyfactory.component.sass'],
})
export class BabyfactoryComponent implements OnInit {
  firstUnicorn?: Unicorn;
  secondUnicorn?: Unicorn;
  allUnicorns: Unicorn[] = [];
  availableUnicorns1: Unicorn[] = [];
  availableUnicorns2: Unicorn[] = [];
  constructor(
    private store: Store<{ unicorns: Unicorn[] }>,
    private updates$: Actions,
    private unicornService: UnicornService,
    private router: Router
  ) {
    updates$
      .pipe(
        ofType(FETCH_UNICORN_SUCCESS_ACTION),
        map((action: any) => action)
        // takeUntil(this.destroyed$)
      )
      .subscribe(({ unicorns }) => {
        this.allUnicorns = unicorns.filter(
          (u: Unicorn) => u.gender !== Gender.Other
        );
        this.availableUnicorns1 = this.allUnicorns;
      });
    updates$
      .pipe(
        ofType(CREATE_UNICORN_SUCESS_ACTION)
        //takeUntil(this.destroyed$)
      )
      .subscribe(() => {
        this.router.navigate(['/']);
      });
  }

  ngOnInit(): void {
    this.store.dispatch(fetchUnicorn());
  }

  onUnicornSelected(event: Event, unicornIndex: number) {
    if (this.firstUnicorn && unicornIndex === 1) {
      this.availableUnicorns2 = this.allUnicorns
        .filter((u) => u.name !== this.firstUnicorn?.name)
        .filter((u: Unicorn) => u.gender !== this.firstUnicorn?.gender);
    }
  }



  makeBaby() {
    if (this.firstUnicorn && this.secondUnicorn) {
      const baby = this.unicornService.makeBaby(
        this.firstUnicorn,
        this.secondUnicorn
      );
      this.store.dispatch(create({ unicorn: baby }));
    }
  }
}

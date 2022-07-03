import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Unicorn} from "../model/Unicorn";
import {Store} from "@ngrx/store";
import {Actions, ofType} from "@ngrx/effects";
import {FETCH_UNICORN_SUCCESS_ACTION, fetchUnicorn} from "../../ngrx/unicorn.actions";
import {map} from "rxjs";
import {Gender} from "../model/Gender";

@Component({
  selector: 'app-babyfactory',
  templateUrl: './babyfactory.component.html',
  styleUrls: ['./babyfactory.component.sass']
})
export class BabyfactoryComponent implements OnInit, OnChanges {

  firstUnicorn?: Unicorn;
  secondUnicorn?: Unicorn;
  allUnicorns: Unicorn[] = [];
  availableUnicorns1: Unicorn[] = [];
  availableUnicorns2: Unicorn[] = [];
  constructor(
    private store: Store<{unicorns: Unicorn[]}>,
    private updates$: Actions
  ) {
    updates$.pipe(
      ofType(FETCH_UNICORN_SUCCESS_ACTION),
      map((action:any) => action)
      // takeUntil(this.destroyed$)
    )
      .subscribe((data) => {
        this.allUnicorns = data.unicorns.map((d:any) => d.unicorn).filter((u: Unicorn) => u.gender !== Gender.Other);
        this.availableUnicorns1 = this.allUnicorns;
      });
  }

  ngOnInit(): void {
    this.store.dispatch(fetchUnicorn());
  }

  onUnicornSelected(event: Event, unicornIndex: number)
  {
    if(this.firstUnicorn && unicornIndex === 1){
      this.availableUnicorns2 = this.allUnicorns
        .filter((u) => u.name !== this.firstUnicorn?.name)
        .filter((u:Unicorn) => u.gender !== this.firstUnicorn?.gender);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
}

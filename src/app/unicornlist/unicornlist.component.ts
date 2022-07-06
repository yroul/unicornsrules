import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { fetchUnicorn, FETCH_UNICORN_SUCCESS_ACTION } from 'src/ngrx/unicorn.actions';
import { UnicornStateInterface } from 'src/ngrx/unicorn.reducer';
import { Unicorn } from '../model/Unicorn';
import { UnicornService } from '../services/unicorn.service';
import { Actions } from '@ngrx/effects';
import { ofType } from '@ngrx/effects';
import { takeUntil, Subject, map } from 'rxjs';

@Component({
  selector: 'app-unicornlist',
  templateUrl: './unicornlist.component.html',
  styleUrls: ['./unicornlist.component.sass']
})
export class UnicornlistComponent implements OnInit {

  list?: Unicorn[];
  constructor(private unicornService: UnicornService,
    private store: Store<{unicorns: Unicorn[]}>,
    private updates$: Actions
  ) {
    updates$.pipe(
      ofType(FETCH_UNICORN_SUCCESS_ACTION),
      map((action:any) => action)
     // takeUntil(this.destroyed$)
   )
   .subscribe((data) => {
     if(data) {
       this.list = data.unicorns;
     }
   });
  }

  ngOnInit(): void {
     /* this.unicornService.fetchUnicorns().subscribe((data:Unicorn[]) => {
        console.log('current saved unicors:')
       this.list = data;
      })*/
      this.store.dispatch(fetchUnicorn())
  }

}

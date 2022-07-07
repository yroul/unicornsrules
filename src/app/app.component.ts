import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions } from '@ngrx/effects';
import { UnicornService } from './services/unicorn.service';
import { Unicorn } from './model/Unicorn';
import { clearDatabase } from '../ngrx/unicorn.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'UnicornsRules';

  constructor(
    private unicornService:UnicornService,
    private store: Store<{unicorns: Unicorn[]}>,
    private updates$: Actions,
  ) {

  }

  clearDatabase() {
    this.store.dispatch(clearDatabase());
  }
}

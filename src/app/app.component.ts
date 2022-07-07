import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
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
    private unicornService: UnicornService,
    private store: Store<{ unicorns: Unicorn[] }>
  ) {}

  clearDatabase() {
    this.store.dispatch(clearDatabase());
  }
}

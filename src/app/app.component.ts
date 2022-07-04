import { Component } from '@angular/core';
import {UnicornService} from "./services/unicorn.service";
import {Store} from "@ngrx/store";
import {Unicorn} from "./model/Unicorn";
import {Actions} from "@ngrx/effects";
import {clearDatabase} from "../ngrx/unicorn.actions";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'UnicornsRules';

  constructor(
    private unicornService:UnicornService,
    private store: Store<{unicorns: Unicorn[]}>,
    private updates$: Actions){

  }
  clearDatabase() {
    this.store.dispatch(clearDatabase());
  }
}

import {
  Component,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Router } from '@angular/router';
import { Gender } from '../model/Gender';
import { Unicorn } from '../model/Unicorn';
import { UnicornService } from '../services/unicorn.service';
import { Store } from '@ngrx/store';
import {
  create,
  CREATE_UNICORN_SUCESS_ACTION,
} from '../../ngrx/unicorn.actions';
import { Actions } from '@ngrx/effects';
import { ofType } from '@ngrx/effects';
import { takeUntil, Subject } from 'rxjs';

@Component({
  selector: 'app-unicorneditor',
  templateUrl: './unicorneditor.component.html',
  styleUrls: ['./unicorneditor.component.sass'],
})
export class UnicorneditorComponent implements OnInit, OnChanges, OnDestroy {
  private destroyed$ = new Subject<boolean>();
  currentUnicorn?: Unicorn;
  availableGenders = Object.keys(Gender).filter((v) => isNaN(Number(v)));

  constructor(
    private unicornService: UnicornService,
    private store: Store<{ unicorns: Unicorn[] }>,
    private updates$: Actions,
    private router: Router
  ) {
    updates$
      .pipe(ofType(CREATE_UNICORN_SUCESS_ACTION), takeUntil(this.destroyed$))
      .subscribe(() => {
        this.router.navigate(['/']);
      });
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes');
    console.log(changes);
  }

  ngOnInit(): void {
    this.currentUnicorn = new Unicorn();
  }
  onGenderChange(event: Event) {
    console.log((event.target as HTMLInputElement).value + ' selected');
  }
  onSave(event?: Event) {
    if (this.currentUnicorn) {
      console.log(this.currentUnicorn);
      this.store.dispatch(create({ unicorn: this.currentUnicorn }));
    }
  }
  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}

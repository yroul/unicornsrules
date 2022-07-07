import {
  Component,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Gender } from '../model/Gender';
import { Unicorn } from '../model/Unicorn';
import { UnicornService } from '../services/unicorn.service';
import { Store } from '@ngrx/store';
import {
  create,
  CREATE_UNICORN_SUCESS_ACTION,
  update,
  UPDATE_UNICORN_SUCESS_ACTION,
} from '../../ngrx/unicorn.actions';
import { Actions } from '@ngrx/effects';
import { ofType } from '@ngrx/effects';
import { takeUntil, Subject, endWith, } from 'rxjs';
import { selectUnicornById } from 'src/ngrx/unicorn.reducer';

@Component({
  selector: 'app-unicorneditor',
  templateUrl: './unicorneditor.component.html',
  styleUrls: ['./unicorneditor.component.sass'],
})
export class UnicorneditorComponent implements OnInit, OnDestroy {
  private destroyed$ = new Subject<boolean>();
  currentUnicorn?: Unicorn 
  availableGenders = Object.keys(Gender).filter((v) => isNaN(Number(v)));
  formIsValid: boolean = false;
  updating: boolean = false;
  constructor(
    private unicornService: UnicornService,
    private store: Store<{ unicorns: Unicorn[] }>,
    private updates$: Actions,
    private router: Router,
    private activatedroute: ActivatedRoute
  ) {
    updates$
      .pipe(
      //  ofType(CREATE_UNICORN_SUCESS_ACTION), 
        endWith("SUCCESS"),
        takeUntil(this.destroyed$))
      .subscribe(() => {
        this.router.navigate(['/']);
      });
  }
  ngOnInit(): void {
    this.updating = false;
    const id=this.activatedroute.snapshot.paramMap.get("id");
    // updating
    if(id){
      this.currentUnicorn = new Unicorn();
      this.store.select(selectUnicornById(id))
      .pipe(
        takeUntil(this.destroyed$)
      ).subscribe((unicorn) => {
        if(unicorn){          
        this.currentUnicorn = Object.assign(new Unicorn(),unicorn);
        this.checkForm();
        this.updating = true;
        } else {
          throw new Error("UNicorn with id "+id+" no found. Can't Edit0");
        }
      });
    }
    // new unicorn
    else {
      this.currentUnicorn = new Unicorn();
    }
  }
  onGenderChange(event: Event) {
  }
  onSave(event?: Event) {
    if (this.currentUnicorn) {
      if(this.updating) {
        this.store.dispatch(update({ unicorn: this.currentUnicorn }));
      } else {
        this.store.dispatch(create({ unicorn: this.currentUnicorn }));
      }
    }
  }
  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
  checkForm(){
    if(this.currentUnicorn){
      this.formIsValid = this.currentUnicorn.name.length > 0;
    }
    
  }
}

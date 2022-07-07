import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Actions } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { UnicornlistComponent } from './unicornlist.component';

describe('UnicornlistComponent', () => {
  let component: UnicornlistComponent;
  let fixture: ComponentFixture<UnicornlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({})],
      providers: [Actions],
      declarations: [UnicornlistComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UnicornlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

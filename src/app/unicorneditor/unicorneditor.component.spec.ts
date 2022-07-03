import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { Actions } from '@ngrx/effects';

import { UnicorneditorComponent } from './unicorneditor.component';

describe('UnicorneditorComponent', () => {
  let component: UnicorneditorComponent;
  let fixture: ComponentFixture<UnicorneditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        StoreModule.forRoot({}),
        RouterTestingModule
      ],
      providers:[Actions],
      declarations: [ UnicorneditorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnicorneditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

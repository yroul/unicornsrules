import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';

import { UnicorneditorComponent } from './unicorneditor.component';

describe('UnicorneditorComponent', () => {
  let component: UnicorneditorComponent;
  let fixture: ComponentFixture<UnicorneditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        StoreModule.forRoot({}),
      ],
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

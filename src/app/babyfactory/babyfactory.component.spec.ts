import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BabyfactoryComponent } from './babyfactory.component';
import {Actions} from "@ngrx/effects";
import {StoreModule} from "@ngrx/store";
import {RouterTestingModule} from "@angular/router/testing";

describe('BabyfactoryComponent', () => {
  let component: BabyfactoryComponent;
  let fixture: ComponentFixture<BabyfactoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({}),
        RouterTestingModule
      ],
      declarations: [ BabyfactoryComponent ],
      providers:[Actions],
    })
    .compileComponents();

    fixture = TestBed.createComponent(BabyfactoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

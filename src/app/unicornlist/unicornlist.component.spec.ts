import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnicornlistComponent } from './unicornlist.component';

describe('UnicornlistComponent', () => {
  let component: UnicornlistComponent;
  let fixture: ComponentFixture<UnicornlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnicornlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnicornlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

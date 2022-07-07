import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnicornListItemComponent } from './unicorn-list-item.component';

describe('UnicornListItemComponent', () => {
  let component: UnicornListItemComponent;
  let fixture: ComponentFixture<UnicornListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnicornListItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnicornListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

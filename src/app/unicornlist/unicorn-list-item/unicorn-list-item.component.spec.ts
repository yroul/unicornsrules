import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CapitalizePipe } from 'src/app/pipe/capitalize.pipe';
import { GenderifyPipe } from 'src/app/pipe/genderify.pipe';
import { SanitizeAgePipe } from 'src/app/pipe/sanitize-age.pipe';

import { UnicornListItemComponent } from './unicorn-list-item.component';

describe('UnicornListItemComponent', () => {
  let component: UnicornListItemComponent;
  let fixture: ComponentFixture<UnicornListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnicornListItemComponent, SanitizeAgePipe,GenderifyPipe,CapitalizePipe ]
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

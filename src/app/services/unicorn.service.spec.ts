import { TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';

import { UnicornService } from './unicorn.service';

describe('UnicornService', () => {
  let service: UnicornService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        StoreModule.forRoot({}),
      ]
    });
    service = TestBed.inject(UnicornService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';
import { flatMap, Observable, pipe } from 'rxjs';

import { LocalStorageService } from './local-storage.service';

describe('LocalStorageService', () => {
  let service: LocalStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should be able to save item into local storage', () => {
    expect(service).toBeTruthy();
    const obs: Observable<String> = service.setItem('hello', 'world');
    obs.subscribe((data) => {
      expect(data).toBeTrue;
    });
  });
  it('should be able to save then get item from local storage', () => {
    expect(service).toBeTruthy();
    service
      .setItem('hello', 'world')
      .pipe(flatMap(() => service.getItem('hello')))
      .subscribe((val) => {
        expect(val).toEqual('world');
      });
  });
});

import { TestBed } from '@angular/core/testing';

import { Unicorn } from './Unicorn';
import { Gender } from './Gender';

describe('UnicornService', () => {
 

  beforeEach(() => {
   
  });

  it('should be created', () => {
    let unicorn = new Unicorn("Jean","#FF0050",Gender.Other,26);
    expect(unicorn).toBeTruthy();
    expect(unicorn.name).toEqual("Jean");
    expect(unicorn.age).toEqual(26);
  });
});

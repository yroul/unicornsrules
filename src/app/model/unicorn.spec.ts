import { TestBed } from '@angular/core/testing';

import { Unicorn } from './Unicorn';
import { Gender } from './Gender';

describe('UnicornService', () => {
 

  beforeEach(() => {
   
  });

  it('should be created', () => {
    let unicorn = new Unicorn("Jean","#FF0050",Gender.Other,26);
    expect(unicorn).toBeTruthy();
    expect(unicorn.getName()).toEqual("Jean");
    expect(unicorn.getAge()).toEqual(26);
    expect(unicorn.getColor()).toEqual("#FF0050");
  });
});

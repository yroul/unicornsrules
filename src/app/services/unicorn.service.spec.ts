import {ComponentFixture, TestBed} from '@angular/core/testing';
import {StoreModule} from '@ngrx/store';

import {UnicornService} from './unicorn.service';
import {Unicorn} from "../model/Unicorn";
import {Gender} from "../model/Gender";

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
  it('should create a baby', () => {
    const unicorn1= new Unicorn();
    unicorn1.setName("Jean");
    unicorn1.setGender(Gender.Male);
    unicorn1.setColor("#012345");
    unicorn1.setAge(20);
    const unicorn2= new Unicorn();
    unicorn2.setName("Clarisse");
    unicorn2.setGender(Gender.Female);
    unicorn2.setColor("#6789FF")
    unicorn2.setAge(20);

    const baby = service.makeBaby(unicorn1,unicorn2);
    expect(baby.getName()).toEqual("Jean-Clarisse");
    expect(baby.getColor()).toEqual("#0129FF");
    expect(baby.getAge()).toEqual(0);
    expect(baby.getGender()).toBeTruthy();

  });
  it('should failed making a baby (Same gender unicorns)', () => {
    const unicorn1= new Unicorn();
    unicorn1.setName("Jean");
    unicorn1.setGender(Gender.Male);
    unicorn1.setColor("#012345");
    unicorn1.setAge(20);
    const unicorn2= new Unicorn();
    unicorn2.setName("Raymond");
    unicorn2.setGender(Gender.Male);
    unicorn2.setColor("#6789FF")
    unicorn2.setAge(20);


    expect(() => service.makeBaby(unicorn1,unicorn2))
      .toThrowError();

  });
  it('should failed making a baby (One of the unicorn has gender "Other")', () => {
    const unicorn1= new Unicorn();
    unicorn1.setName("Jean");
    unicorn1.setGender(Gender.Male);
    unicorn1.setColor("#012345");
    unicorn1.setAge(20);
    const unicorn2= new Unicorn();
    unicorn2.setName("Raymond");
    unicorn2.setGender(Gender.Other);
    unicorn2.setColor("#6789FF")
    unicorn2.setAge(20);


    expect(() => service.makeBaby(unicorn1,unicorn2))
      .toThrowError();

  });
});

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
    unicorn1.name = "Jean";
    unicorn1.gender = Gender.Male;
    unicorn1.color = "#012345"
    unicorn1.age = 20;
    const unicorn2= new Unicorn();
    unicorn2.name = "Clarisse";
    unicorn2.gender = Gender.Female;
    unicorn2.color = "#6789FF"
    unicorn2.age = 20;

    const baby = service.makeBaby(unicorn1,unicorn2);
    expect(baby.name).toEqual("Jean-Clarisse");
    expect(baby.color).toEqual("#0129FF");
    expect(baby.age).toEqual(0);
    expect(baby.gender).toBeTruthy();

  });
  it('should failed making a baby (Same gender unicorns)', () => {
    const unicorn1= new Unicorn();
    unicorn1.name = "Jean";
    unicorn1.gender = Gender.Male;
    unicorn1.color = "#012345"
    unicorn1.age = 20;
    const unicorn2= new Unicorn();
    unicorn2.name = "Raymond";
    unicorn2.gender = Gender.Male;
    unicorn2.color = "#6789FF"
    unicorn2.age = 20;


    expect(() => service.makeBaby(unicorn1,unicorn2))
      .toThrowError();

  });
  it('should failed making a baby (One of the unicorn has gender "Other")', () => {
    const unicorn1= new Unicorn();
    unicorn1.name = "Jean";
    unicorn1.gender = Gender.Male;
    unicorn1.color = "#012345"
    unicorn1.age = 20;
    const unicorn2= new Unicorn();
    unicorn2.name = "Raymond";
    unicorn2.gender = Gender.Other;
    unicorn2.color = "#6789FF"
    unicorn2.age = 20;


    expect(() => service.makeBaby(unicorn1,unicorn2))
      .toThrowError();

  });
});

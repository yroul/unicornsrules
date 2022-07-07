import { TestBed } from '@angular/core/testing';

import { Unicorn, MAX_SKILLS_POINT } from './Unicorn';
import { Gender } from './Gender';

describe('Unicorn', () => {
  beforeEach(() => {});

  it('should be created', () => {
    let unicorn = new Unicorn('Jean', '#FF0050', Gender.Other, 26);
    expect(unicorn).toBeTruthy();
    expect(unicorn.name).toEqual('Jean');
    expect(unicorn.age).toEqual(26);
    expect(unicorn.color).toEqual('#FF0050');
    expect(unicorn.id).toMatch(/^[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}$/);
    const total =
      unicorn.agility +
      unicorn.intelligence +
      unicorn.speed +
      unicorn.kindness +
      unicorn.strength;
    expect(total).toBeLessThanOrEqual(MAX_SKILLS_POINT);
    expect(unicorn.agility).toBeLessThanOrEqual(10);
    expect(unicorn.agility).toBeGreaterThanOrEqual(0);
    expect(unicorn.intelligence).toBeLessThanOrEqual(10);
    expect(unicorn.intelligence).toBeGreaterThanOrEqual(0);
    expect(unicorn.speed).toBeLessThanOrEqual(10);
    expect(unicorn.speed).toBeGreaterThanOrEqual(0);
    expect(unicorn.kindness).toBeLessThanOrEqual(10);
    expect(unicorn.kindness).toBeGreaterThanOrEqual(0);
    expect(unicorn.strength).toBeLessThanOrEqual(10);
    expect(unicorn.strength).toBeGreaterThanOrEqual(0);
  });
  it('should be created (without color)', () => {
    let unicorn = new Unicorn('Jean', undefined, Gender.Other, 26);
    expect(unicorn).toBeTruthy();
    expect(unicorn.color).toBeTruthy();
    expect(unicorn.id).toMatch(/^[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}$/);
  });
  it('should be created (default constructor)', () => {
    let unicorn = new Unicorn();
    expect(unicorn).toBeTruthy();
    expect(unicorn.color).toBeTruthy();
    expect(unicorn.id).toMatch(/^[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}$/);
  });
  it('should be get the correct skill value', () => {
    let unicorn = new Unicorn();
    unicorn.agility = 9;
    expect(unicorn.getSkillValue('agility')).toEqual(9);
    expect(unicorn.id).toMatch(/^[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}$/);
  });
  it('should be throw an Error (unknown skillName)', () => {
    let unicorn = new Unicorn();
    unicorn.agility = 9;
    expect(() => {
      unicorn.getSkillValue('unknown');
    }).toThrowError();
  });
});

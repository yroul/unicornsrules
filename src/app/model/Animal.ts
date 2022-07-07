import { Gender } from './Gender';
export abstract class Animal {
  name: string = '';
  color: string = '#FF0000';
  gender: Gender = Gender.Other;
  age: number = 0;
}

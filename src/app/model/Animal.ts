import { Gender } from './Gender';
import { Identifiable } from './Identifiable';

export abstract class Animal extends Identifiable {
  name: string = '';
  color: string = '#FF0000';
  gender: Gender = Gender.Other;
  age: number = 0;

  constructor()
  {
    super();
  }
}

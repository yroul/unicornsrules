import { Pipe, PipeTransform } from '@angular/core';
import { Gender } from '../model/Gender';

@Pipe({
  name: 'genderify'
})
export class GenderifyPipe implements PipeTransform {

  transform(value: string | undefined, ...args: unknown[]): string {
    let prefix;
    if(value === Gender.Other){
      prefix = 'an';
    } else {
      prefix = 'a';
    }
   
    return prefix + ' '+value;
  }

}

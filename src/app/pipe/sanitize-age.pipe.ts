import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sanitizeAgePipe'
})
export class SanitizeAgePipe implements PipeTransform {

  transform(age: number | undefined, ...args: unknown[]): string {
    if(!age) return '';
    let plural = false;
    if(age > 1){
      plural = true;
    }

    return `${age} ${plural ? 'years' : 'year'} old`;
  }

}

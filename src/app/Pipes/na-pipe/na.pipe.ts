import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'na',
  standalone: true
})
export class NaPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): String {
    if (value !==null && value!==undefined && value !== '')
    {
      return new String(value)
    }
    return 'N/A';
  }

}

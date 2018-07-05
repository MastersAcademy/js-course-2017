import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'bool'})
export class BoolPipe implements PipeTransform {
  transform(value: boolean): string {
    if (value === true) {
      return 'yes';
    } else {
      return 'no';
    }
  }
}

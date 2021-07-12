import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(array: any[], ...args: unknown[]): any[] {
    return array.slice().reverse();
  }

}

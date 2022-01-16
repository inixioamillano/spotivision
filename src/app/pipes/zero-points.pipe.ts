import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'zeroPoints'
})
export class ZeroPointsPipe implements PipeTransform {

  transform(contestants: any[], ...args: unknown[]): any[] {
    return contestants.filter(c => c.points === 0);
  }

}

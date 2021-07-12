import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderByPoints'
})
export class OrderByPointsPipe implements PipeTransform {

  transform(contestants: any[], ...args: unknown[]): unknown {
    if (!contestants) {
      return [];
    }
    return contestants.sort((c1, c2) => c1.points > c2.points ? -1 : 1).slice(0, 10);
  }

}

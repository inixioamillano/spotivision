import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderByPoints'
})
export class OrderByPointsPipe implements PipeTransform {

  transform(contestants: any[], ...args: unknown[]): unknown {
    if (!contestants) {
      return [];
    }
    return contestants
      .filter(c => c.spotifyData.length > 0)
      .sort((c1, c2) => c1.songTitle > c2.songTitle ? 1 : -1)
      .sort((c1, c2) => c1.spotifyData.length > c2.spotifyData.length ? -1 : 1)
      .sort((c1, c2) => c1.points > c2.points ? -1 : 1);// .slice(0, 10);
  }

}

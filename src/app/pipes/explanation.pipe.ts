import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'explanation'
})
export class ExplanationPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}

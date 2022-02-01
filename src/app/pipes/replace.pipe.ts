import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replace'
})
export class ReplacePipe implements PipeTransform {

  transform(value: string, original: string, replace: string): string {
    return value.replace(original, replace);
  }

}

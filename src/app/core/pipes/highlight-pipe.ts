import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlight'
})
export class HighlightPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    const search = args[0];
    if (!value || !search) return value;

    const regex = new RegExp(`(${search})`, 'gi');
    return value.replace(regex, '<mark>$1</mark>');
  }

}

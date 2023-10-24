import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'standalone',
  standalone: true
})
export class StandalonePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}

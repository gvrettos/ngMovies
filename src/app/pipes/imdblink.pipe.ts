import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imdblink'
})
export class ImdblinkPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return '<a href=https://www.imdb.com/title/' + args[0] + ' target="_blank">' + value +  "</a>";
  }

}

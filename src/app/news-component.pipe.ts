import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'newsComponent'
})
export class NewsComponentPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}

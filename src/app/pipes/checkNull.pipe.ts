import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'checkNull'
})
export class CheckNullPipe implements PipeTransform {

  transform(value: any): string {
    if(value === undefined || value === null){
      return '0';
    } else{
      return value;
    }
  }
}

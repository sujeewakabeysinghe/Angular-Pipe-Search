import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'colorfilter'
})
export class ColorfilterPipe implements PipeTransform {

  transform(colors:string[], search:string): string[] {
    if(!colors||!search){
      return colors;
    }
    return colors.filter(color=>color.toLowerCase().indexOf(search.toLowerCase())!=-1);
  }
}

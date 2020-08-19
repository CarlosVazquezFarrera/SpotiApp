import { Pipe, PipeTransform } from '@angular/core';
import { isNull } from 'util';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform(images: any[]): string {
     if(images.length > 0){
      return images[0].url;
     }
     else{
      return 'assets/img/noimage.png';
    }
  }

}

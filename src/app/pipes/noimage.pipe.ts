import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform( imatge: any[] ): string {

    if ( !imatge ) {
      return 'assets/img/noimage.png';
    }
  
    if ( imatge.length > 0 ) {
      return imatge[0].url;
    } else {
      return 'assets/img/noimage.png';
    }

  }

}

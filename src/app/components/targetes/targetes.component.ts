import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-targetes',
  templateUrl: './targetes.component.html'
})
export class TargetesComponent{

  @Input() items: any[] = [];

  constructor(private router: Router) { }
  
  veureArtista( item: any ) {

    let artistaId;

    if ( item.type === 'artist' ) {
      artistaId = item.id;
    } else {
      artistaId = item.artists[0].id;
    }

    this.router.navigate([ '/artista', artistaId  ]);

  }

}

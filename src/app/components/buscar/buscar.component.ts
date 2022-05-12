import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html'
})
export class BuscarComponent {

  artistes: any[] = [];
  carrega: boolean;
  constructor(private spotify: SpotifyService) { 
    
  }

  buscar(t: string) {
    console.log(t);
    this.carrega = true;
    this.spotify.getArtistes( t )
          .subscribe( (data: any) => {
            console.log(data);
            this.artistes = data;
            this.carrega = false;
          });
  }

}

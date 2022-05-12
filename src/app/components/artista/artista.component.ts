import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html'
})
export class ArtistaComponent  {

  artista: any = {};
  topCans: any[] = [];

  carregaArtista: boolean;

  constructor(private router: ActivatedRoute,
                private spotify: SpotifyService) { 
                  this.carregaArtista = true;
                  this.router.params.subscribe( params => {

                    this.getArtista( params['id'] );
                    this.getTopTracks( params['id'] );
                  });

                }

  getArtista( id: string ) {

        this.carregaArtista = true;
              
        this.spotify.getArtista( id ).subscribe( artista => {
                    this.artista = artista;
                    this.carregaArtista = false;
         });        
  }

  getTopTracks( id: string ) {

    this.spotify.getTopTracks( id )
            .subscribe( topTracks => {
              console.log(topTracks);
              this.topCans = topTracks;
            });

  }

 

}

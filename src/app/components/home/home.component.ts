import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {

  canNoves: any[] = [];
  carrega: boolean;

  error: boolean;
  missatgeError: string;

  constructor(private spotify: SpotifyService) {

    this.carrega = true;
      
    this.spotify.getNewReleases().subscribe( (data:any)=> {
      
      console.log(data);
      this.canNoves = data;
      this.carrega = false;
    },( errorServei ) => {

      this.carrega = false;
      this.error = true;
      this.missatgeError = errorServei.error.error.message;

    });

   }

}

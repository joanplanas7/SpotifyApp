import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { 

  }



  getQuery( query: string ) {

    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer APIKEY'
    });

    return this.http.get(url, { headers });

  }

  getNewReleases(){

    //const headers = new HttpHeaders({'Authorization':'Bearer APIKEY'});
    
    return this.getQuery('browse/new-releases?limit=20').pipe( map (data=> {
      return data['albums'].items;

    })); 
  }

  getArtistes(t : string){
    return this.getQuery(`search?q=${ t }&type=artist&limit=15`).pipe( map (data=> {
      return data['artists'].items;

  }));
}


  getArtista(id : string){
  
    return this.getQuery(`artists/${id}`);
    //.pipe( map (data=> {return data['artists'].items;}));

}

getTopTracks( id: string ) {
  return this.getQuery(`artists/${id}/top-tracks?country=es`).pipe( map( data => data['tracks']));
}
               
  
  
}

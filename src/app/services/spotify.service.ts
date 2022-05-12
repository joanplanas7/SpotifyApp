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
      'Authorization': 'Bearer BQCtCyXwhVBt3eFyqCdWLY35aVzs5ZFcCNM_q3F5Lj6wdasdasdasdas-mT7BvftyRkWQ2W1Y1DGEPqqWUlMwUElKbGIKz4'
    });

    return this.http.get(url, { headers });

  }

  getNewReleases(){

    //const headers = new HttpHeaders({'Authorization':'Bearer BQDngOeYhZeL8N1OQN2_cJo-jUvlhdsajdhaskjEJC8znB3POw3kVQ4kyuC2flAka_Cmdasdsadd6Efxk5wSMUrbH5fxkjWOeBvPY'});
    
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

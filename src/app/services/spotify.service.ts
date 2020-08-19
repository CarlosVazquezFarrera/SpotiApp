import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
//#region Constructor
  constructor(private http: HttpClient) {}
//#endregion

//#region  Atributes
  urlService: string = 'https://api.spotify.com/v1/';

  header: HttpHeaders = new HttpHeaders({
    'Authorization': 'Bearer BQBlHmU0s6ruINWMcuH198g1DFZFi9eiFYM3d2uFRvhX1v-xk-kK4Pd0m30Fq1HCbJg9K8XlPUv73K19cxk'
  });
//#endregion

//#region  Methods
  getData(query: string){
    return this.http.get(`https://api.spotify.com/v1/${query}`, { headers: this.header });
  }
   getNewReleases(){
     return this.getData('browse/new-releases')
                .pipe(map(data => data['albums'].items));
   };
   
   getArtists(busqueda: string){
     return this.getData(`search?q=${busqueda}&type=artist`)
                .pipe(map(data => data['artists'].items));
   };

   getArtist(id: string){
     return this.getData(`artists/${id}`);
   }
   getTopTracks(id: string){
    return this.getData(`artists/${id}/top-tracks?country=US`)
                .pipe(map(data =>  data['tracks'] ));
  }

   //#endregion
}

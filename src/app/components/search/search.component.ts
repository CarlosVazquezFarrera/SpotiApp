import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private spotify: SpotifyService) { }

  artists: any [] = [];

  loading: boolean;

  ngOnInit(): void {
  }

  buscar(busqueda: string): void{
    this.loading = true;
    this.spotify.getArtists(busqueda).subscribe( (response: any)=>{
      this.artists = response;
      this.loading = false;
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent implements OnInit {

  idArtista: string;
  artista: any;
  loading: boolean;
  topTacks: any;

  constructor(private router: ActivatedRoute,
              private spotify: SpotifyService){
    this.loading = true;
    this.router.params.subscribe(params =>{
      this.idArtista = params['id'];
    });
  }

  ngOnInit(): void {
    this.spotify.getArtist(this.idArtista).subscribe(response =>{
      this.artista = response;
      this.loading = false;
    });
    
    this.spotify.getTopTracks(this.idArtista).subscribe(tracks =>{
      this.topTacks = tracks;
      console.log(this.topTacks);
    });
  }
}

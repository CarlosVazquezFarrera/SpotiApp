import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent implements OnInit {

  constructor(private router: Router) {}
  
  @Input() items: any[] = [];


  ngOnInit(): void {}

  verArtista(item: any){
    let idArtist: number;
    switch (item.type) {
      case "artist":
        idArtist = item.id;
        break;
      case "album":
        idArtist = item.artists[0].id;
        break;
    }
    this.router.navigate(['artista/', idArtist]);
  }

}

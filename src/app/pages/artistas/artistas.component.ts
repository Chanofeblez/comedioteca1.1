import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Comediantes } from 'src/app/models/youtube.models';
import { ComediantesService } from '../../services/comediantes.service';

@Component({
  selector: 'app-artistas',
  templateUrl: './artistas.component.html',
  styleUrls: ['./artistas.component.css']
})
export class ArtistasComponent implements OnInit {

  comediantes: Comediantes[] = [];

  constructor(private serviceComediantes: ComediantesService, 
              private router: Router) { }

  ngOnInit(): void {
    this.comediantes = this.serviceComediantes.getComediantes();
  }

  onVideoClick( item: Comediantes) {     
    this.router.navigate(['comediante', item.name]);
 }


}

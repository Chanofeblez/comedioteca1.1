import { Component, OnInit } from '@angular/core';


import { Comediantes } from '../../models/youtube.models';
import { ComediantesService } from '../../services/comediantes.service';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styleUrls: ['./pais.component.css']
})
export class PaisComponent implements OnInit {  

 comediantes: Comediantes[]=[];
 comediantesPaises : Comediantes[]=[];
 pais: string  = "";

  constructor(private comedianteService: ComediantesService, 
              private router: Router,
              private activatedRoute: ActivatedRoute) { 
   
  }

  ngOnInit() {

    const country  = this.activatedRoute.snapshot.params.texto;
    this.pais = country;
    this.comediantesPaises = this.comedianteService.getComediantesPaises( country );    
    this.comediantes = this.comedianteService.getComediantes();
    
  }

  onVideoClick( item: Comediantes) {     
    this.router.navigate(['comediante', item.name]);
 }

}

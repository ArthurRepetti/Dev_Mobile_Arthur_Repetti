import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { NgIf, NgFor } from '@angular/common';
import { RouterOutlet, RouterLink } from '@angular/router';

import { TournoisService } from '../tournois.service';
import { Tournois } from '../Tournois';
//import { DetailsPersonneComponent } from './details-personne/details-personne.component'

@Component({
  selector: 'app-liste-tournois',
  standalone: true,
  imports: [RouterLink, NgIf, NgFor],
  templateUrl: './liste-tournois.component.html' //,
  //styleUrl: './liste-tournois.component.css'
})
export class ListeTournoisComponent {
  data: Tournois[] = [];

  constructor( private tournoisService: TournoisService ) {  }

  ngOnInit(): void {
    this.find_all();
  }

  find_all() {
    this.tournoisService.tournois_get_all().subscribe( data => { this.data = data } ) ;
  }

}

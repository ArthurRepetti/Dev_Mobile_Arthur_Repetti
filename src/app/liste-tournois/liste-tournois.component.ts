import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { NgIf, NgFor } from '@angular/common';
import { RouterOutlet, RouterLink } from '@angular/router';

import { TournoisService } from '../tournois.service';
import { Tournois } from '../Tournois';
//import { DetailsPersonneComponent } from './details-tournois/details-tournois.component'

@Component({
  selector: 'app-liste-tournois',
  standalone: true,
  imports: [RouterLink, NgIf, NgFor, CommonModule],
  templateUrl: './liste-tournois.component.html' //,
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

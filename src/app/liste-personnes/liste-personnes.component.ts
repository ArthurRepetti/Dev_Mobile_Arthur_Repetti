import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { NgIf, NgFor } from '@angular/common';
import { RouterOutlet, RouterLink } from '@angular/router';

import { PersonnesService } from '../personnes.service';
import { Personne } from '../Personne';
//import { DetailsPersonneComponent } from './details-personne/details-personne.component'

@Component({
  selector: 'app-liste-personnes',
  standalone: true,
  imports: [RouterLink, RouterOutlet, NgIf, NgFor/*, DetailsPersonneComponent*/],
  templateUrl: './liste-personnes.component.html'
})
export class ListePersonnesComponent {
  data: Personne[] = [];

  constructor(private personnesService :PersonnesService/*, private detailsPersonneComponent :DetailsPersonneComponent*/) { }

  ngOnInit(): void {
    this.find_all();
  }

  find_all() {
    this.personnesService.personnes_get_all().subscribe(data => { this.data = data });
  }

  /*find_one(_id :number) {
    this.detailsPersonneComponent.find_one(_id);
  }*/

}

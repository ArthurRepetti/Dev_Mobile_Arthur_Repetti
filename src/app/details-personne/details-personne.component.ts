import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { NgIf, NgFor } from '@angular/common';
import { RouterOutlet, RouterLink } from '@angular/router';

import { PersonnesService } from '../personnes.service';
import { Personne } from '../Personne';

@Component({
  selector: 'app-details-personne',
  standalone: true,
  imports: [RouterLink, RouterOutlet, NgIf, NgFor],
  templateUrl: './details-personne.component.html'
})
export class DetailsPersonneComponent {
  data: Personne[] = [];

  constructor(private personnesService :PersonnesService) { }

  find_one(_id :number) {
    this.personnesService.personnes_get_one(_id).subscribe(data => { this.data = data });
  }

}

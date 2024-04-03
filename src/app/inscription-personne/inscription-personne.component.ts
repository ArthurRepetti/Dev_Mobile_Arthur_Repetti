import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { Observable, throwError } from 'rxjs';

import { PersonnesService } from '../personnes.service';
import { Personne } from '../Personne';

@Component({
  selector: 'app-inscription-personne',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './inscription-personne.component.html'
})

export class InscriptionPersonneComponent {
  data: Personne = {_id: 5, date_naissance: '', nom: '', prenom: '', pseudo: '', sexe: ''};

  constructor(private personnesService :PersonnesService) { }

  insert_one() {
    this.personnesService.personnes_insert_one(this.data).subscribe(data => { this.data = data });
  }

}

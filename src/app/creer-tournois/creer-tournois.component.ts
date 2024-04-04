import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { Observable, throwError } from 'rxjs';

import { TournoisService } from '../tournois.service';
import { Tournois } from '../Tournois';

@Component({
  selector: 'app-creer-tournois',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './creer-tournois.component.html'
})

export class CreerTournoisComponent {
  data: Tournois = {
    _id: 0,
    intitule: '',
    lieu: '',
    date: '',
    horaires: [],
    format: '',
    participant: [],
    matches: [],
    categorie_age: "",
    vainqueur: []
  };

  constructor(private tournoisService: TournoisService) { }

  insert_one() {
    this.tournoisService.tournois_insert_one(this.data).subscribe(data => { this.data = data });
  }

}

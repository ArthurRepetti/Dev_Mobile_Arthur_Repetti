import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { Observable, throwError } from 'rxjs';

import { TournoisService } from '../tournois.service';
import { Tournois } from '../Tournois';

@Component({
  selector: 'app-importer-tournois',
  standalone: true,
  imports: [],
  templateUrl: './importer-tournois.component.html'
})

export class ImporterTournoisComponent {
  data: Tournois = {
    _id: 0,
    intitule: '',
    lieu: '',
    date: '',
    horaires: [],
    format: '',
    participants: [],
    matches: [],
    categorie_age: '',
    vainqueur:[]
  };

  constructor(private tournoisService: TournoisService) { }

}

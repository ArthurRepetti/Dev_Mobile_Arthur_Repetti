import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { Observable, throwError } from 'rxjs';

import { TournoisService } from '../tournois.service';
import { Tournois } from '../Tournois';

import { PersonnesService } from '../personnes.service';
import { Personne } from '../Personne';

@Component({
  selector: 'app-creer-tournois',
  standalone: true,
  imports: [FormsModule, CommonModule],
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
    participants: [],
    matches: [],
    categorie_age: "",
    vainqueur: []
  };

  data2: Personne[] = [];

  participant_selectionne: Personne = {_id: 0, date_naissance: '', nom: '', prenom: '', pseudo: '', sexe: ''};

  constructor(private tournoisService: TournoisService, private personnesService :PersonnesService) { }

  ngOnInit(): void {
    this.find_all();
  }

  find_all() {
    this.personnesService.personnes_get_all().subscribe(data => { this.data2 = data });
  }

  add_participant() {
    const participant_selectionne = this.participant_selectionne;

    this.data2.push(participant_selectionne);
  }

  insert_one() {
    this.tournoisService.tournois_insert_one(this.data).subscribe(data => { this.data = data });
  }

}

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
  participant_selectionne: any;

  constructor(private tournoisService: TournoisService, private personnesService :PersonnesService) { }

  ngOnInit(): void {
    this.find_all();
  }

  find_all() {
    this.personnesService.personnes_get_all().subscribe(data => { this.data2 = data });
    console.log(this.data2);
  }

  add_participant() {
    const participant_selectionne: Personne = {_id: 0, date_naissance: this.participant_selectionne.date_naissance, nom: this.participant_selectionne.nom, prenom: this.participant_selectionne.prenom, pseudo: this.participant_selectionne.pseudo, sexe: this.participant_selectionne.sexe};

    this.data.participants.push(participant_selectionne);
    console.log(participant_selectionne._id)
    console.log(participant_selectionne);
    console.log(this.participant_selectionne);
    console.log(this.data.participants);
  }

  insert_one() {
    this.tournoisService.tournois_insert_one(this.data).subscribe(data => { this.data = data });
  }

}

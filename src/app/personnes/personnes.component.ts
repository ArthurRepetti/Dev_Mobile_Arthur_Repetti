import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { CommonModule } from '@angular/common';
import { NgIf, NgFor } from '@angular/common';
import { RouterOutlet, RouterLink } from '@angular/router';
import { Personne } from '../Personne';

@Component({
  selector: 'app-personnes',
  standalone: true,
  imports: [RouterLink, RouterOutlet, NgIf, NgFor],
  templateUrl: './personnes_affichage_liste.html',
})
export class PersonnesComponent {
  data: Personne[] = [];

  constructor(private dataService : DataService) { }

  ngOnInit(): void {
    this.find_all();
  }

  find_all() {
    this.dataService.personnes_get_all().subscribe(data => { this.data = data });
  }

}

import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { CommonModule } from '@angular/common';
import { NgIf, NgFor } from '@angular/common';
import { RouterOutlet, RouterLink } from '@angular/router';

import { Personne } from '../Personne';

@Component({
  selector: 'app-liste-personnes',
  standalone: true,
  imports: [RouterLink, RouterOutlet, NgIf, NgFor],
  templateUrl: './liste-personnes.component.html'
})
export class ListePersonnesComponent {
  data: Personne[] = [];

  constructor(private dataService : DataService) { }

  ngOnInit(): void {
    this.find_all();
  }

  find_all() {
    this.dataService.personnes_get_all().subscribe(data => { this.data = data });
  }

}

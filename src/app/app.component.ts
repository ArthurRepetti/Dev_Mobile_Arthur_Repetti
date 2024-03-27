import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink } from '@angular/router';

import { ListePersonnesComponent } from './liste-personnes/liste-personnes.component'
import { DetailsPersonneComponent } from './details-personne/details-personne.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, ListePersonnesComponent, DetailsPersonneComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'DevMobile';
}

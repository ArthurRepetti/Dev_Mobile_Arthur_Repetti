import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink } from '@angular/router';

import { ListePersonnesComponent } from './liste-personnes/liste-personnes.component';
import { DetailsPersonneComponent } from './details-personne/details-personne.component';
import { InscriptionPersonneComponent } from './inscription-personne/inscription-personne.component';
import { ImporterTournoisComponent } from './importer-tournois/importer-tournois.component';
import { CreerTournoisComponent } from './creer-tournois/creer-tournois.component';
import { DetailsTournoisComponent } from "./details-tournois/details-tournois.component";
import { ListeTournoisComponent } from "./liste-tournois/liste-tournois.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, ListePersonnesComponent, DetailsPersonneComponent, InscriptionPersonneComponent, ImporterTournoisComponent, CreerTournoisComponent, DetailsTournoisComponent, ListeTournoisComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'DevMobile';
}

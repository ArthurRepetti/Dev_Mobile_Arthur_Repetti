import { Routes } from '@angular/router';

import { ListePersonnesComponent } from './liste-personnes/liste-personnes.component';
import { DetailsPersonneComponent } from './details-personne/details-personne.component'

export const routes: Routes = [
  {path: 'liste-personnes', component: ListePersonnesComponent },
  {path: 'details-personne', component: DetailsPersonneComponent }
];

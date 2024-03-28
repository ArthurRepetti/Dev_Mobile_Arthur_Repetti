import { Routes } from '@angular/router';

import { ListePersonnesComponent } from './liste-personnes/liste-personnes.component';
import { DetailsPersonneComponent } from './details-personne/details-personne.component';
import { InscriptionPersonneComponent } from './inscription-personne/inscription-personne.component';

export const routes: Routes = [
  {path: 'liste-personnes', component: ListePersonnesComponent },
  {path: 'details-personne', component: DetailsPersonneComponent },
  {path: 'inscription-personne', component: InscriptionPersonneComponent }
];

import { Routes } from '@angular/router';

import { ListePersonnesComponent } from './liste-personnes/liste-personnes.component';
import { DetailsPersonneComponent } from './details-personne/details-personne.component';
import { InscriptionPersonneComponent } from './inscription-personne/inscription-personne.component';
import { ImporterTournoisComponent } from './importer-tournois/importer-tournois.component';
import { CreerTournoisComponent } from './creer-tournois/creer-tournois.component';
import { ListeTournoisComponent } from './liste-tournois/liste-tournois.component';
// @ts-ignore
//import { ImporterTournoisComponent } from './importer-tournois/importer-tournois.component';
import { DetailsTournoisComponent } from "./details-tournois/details-tournois.component";

export const routes: Routes = [
  {path: 'liste-personnes', component: ListePersonnesComponent },
  {path: 'details-personne/:id', component: DetailsPersonneComponent },
  {path: 'inscription-personne', component: InscriptionPersonneComponent },
  {path: 'liste-tournois', component: ListeTournoisComponent },
  {path: 'details-tournois', component: DetailsTournoisComponent },
  {path: 'importer-tournois', component: ImporterTournoisComponent },
  {path: 'creer-tournois', component: CreerTournoisComponent }
];

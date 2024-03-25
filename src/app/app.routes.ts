import { Routes } from '@angular/router';

import { ListeComponent } from './liste/liste.component';
import { PersonnesComponent } from './personnes/personnes.component';

export const routes: Routes = [
  {path: 'liste', component: ListeComponent},
  {path: 'personnes', component: PersonnesComponent}
];

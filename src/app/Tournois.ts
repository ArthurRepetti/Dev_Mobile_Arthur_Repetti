
import { Personne } from './Personne';
import { Matche } from './Matche';

export interface Tournois {
  _id: number;
  intitule: string;
  lieu: string;
  date: string;
  horaires: string[];
  format: string;
  participants: Personne[];
  matches: Matche[];
  categorie_age: string;
  vainqueur: Personne[];
}


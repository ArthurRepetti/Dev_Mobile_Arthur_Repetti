
import { Personne } from './Personne';

export interface Matche {
  joueur1: Personne;
  joueur2: Personne;
  score1: number;
  score2: number;
  vainqueur: Personne;

}


import { Participant } from './Participant';

export interface Matche {
  joueur1: Participant;
  joueur2: Participant;
  score1: number;
  score2: number;
  vainqueur: Participant;

}


export interface Tournois {
  _id: number; // Identifiant du tournoi (nombre)
  intitule: string; // Intitulé du tournoi (string)
  lieu: string; // Lieu du tournoi (string)
  date: string; // Date du tournoi (string)
  horaires: string[]; // Horaires du tournoi (tableau de string)
  format: string; // Format du tournoi (string)
  participant: { Personne }[]; // Liste des participants au tournoi

}

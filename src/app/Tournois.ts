
export interface Tournois {
  _id: number; // Identifiant du tournoi (nombre)
  intitule: string; // Intitulé du tournoi (chaîne de caractères)
  lieu: string; // Lieu du tournoi (chaîne de caractères)
  date: string; // Date du tournoi (chaîne de caractères)
  horaires: string[]; // Horaires du tournoi (tableau de chaînes de caractères)
  format: string; // Format du tournoi (chaîne de caractères)
  participant: Participant[]; // Liste des participants au tournoi
}


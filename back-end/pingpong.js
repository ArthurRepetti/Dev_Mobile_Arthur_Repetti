/*
 * SCRIPT: "pingpong.js"
 * AUTEUR: Arthur REPETTI
 * DATE: 06/03/2024
 */

db = db.getSiblingDB("pingpong");

db.tournois.drop();
db.personnes.drop();
db.format.drop();
db.categories.drop();

db.tournois.insertMany([
	{"_id": 0, "intitule": "Le grand tournois de l'IUT édition 2024", "lieu": "140 Rue de la Nouvelle France, 93100 Montreuil", "date": "15/06/2024", "horaires": [14,19], "format": "Simple", "categorie_age": "Juniors", "niveau": "Intermédiaire", 
	"participant": [{"prenom": "Arthur","nom": "Repetti"}, {"prenom": "Thibault", "nom": "Houemabe"}], 
	"matches": [{"joueur1": {"nom": "Repetti", "score": 9}, "joueur2": {"nom": "Houemabe", "score": 11}, "vainqueur": "Thibault"}]
}
]);

db.personnes.insertMany([
	{"_id": 0, "prenom": "Arthur", "nom": "Repetti", "date_naissance": "12/03/2004", "sexe": "Homme", "pseudo": "arepetti"},
	{"_id": 1, "prenom": "Thomas", "nom": "Marotta", "date_naissance": "27/11/2003", "sexe": "Homme", "pseudo": "tmarotta"}
]);

db.format.insertMany([
	{"_id": 0, "nom": "Simple", "nombre_joueurs": 1},
	{"_id": 1, "nom": "Double", "nombre_joueurs": 2},
	{"_id": 2, "nom": "Mixte", "nombre_joueurs": 1},	
	{"_id": 3, "nom": "Equipe", "nombre_joueurs": 3}
]);

db.categories.insertMany([
	{"_id": 0, "nom": "Poussins", "age_minimun": 9, "age_maximum": 10},
	{"_id": 1, "nom": "Benjamins", "age_minimun": 11, "age_maximum": 12},
	{"_id": 2, "nom": "Minimes", "age_minimun": 13, "age_maximum": 14},
	{"_id": 3, "nom": "Cadets", "age_minimun": 14, "age_maximum": 15},
	{"_id": 4, "nom": "Juniors", "age_minimun": 16, "age_maximum": 19},
	{"_id": 5, "nom": "Seniors", "age_minimun": 20, "age_maximum": 40},
	{"_id": 6, "nom": "Vétéran", "age_minimun": 41}
]);

//mongodb://localhost:27017
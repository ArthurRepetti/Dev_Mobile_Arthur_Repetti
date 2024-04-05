#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Thu Mar 28 15:43:14 2024

@author: fsiddiqui
"""

from Connexion import Connexion

from flask import jsonify
from personnes import Personnes

class Tournois:
    def __init__(self):
        self.collection = Connexion().set_collection("tournois")


    def find_all(self):
        cursor = self.collection.find()
        find = []

        for tournoi in cursor:
            find.append(tournoi)

        return jsonify(find)


    def find_one( self, identifiant: int ):
        cursor = self.collection.find( { "_id": identifiant } )
        find = []

        for tournoi in cursor:
            find.append(tournoi)

        return jsonify(find)

    from flask import jsonify
    def find_last_id(self):
        cursor = self.collection.find({}, { "_id": 1 })
        max_id = 0

        for identifiants in cursor :
            if (int(identifiants['_id']) > max_id):
                max_id = int(identifiants['_id'])

        return max_id + 1

    def insert_one(self, identifiant: int, intitule: str, lieu: str, date: str, horaires: list, format: str, participants: list):
        print("j'essaye d'inserer")
        my_insert = {
            "_id": identifiant,
            "intitule": intitule,
            "lieu": lieu,
            "date": date,
            "horaires": horaires,
            "format": format,
            "participant": participants,
            "matches": self.create_matches(participants)

        }

        self.collection.insert_one(my_insert)

    """
    def insert_one(self, identifiant: int, intitule: str, lieu: str, date: str, horaires: list, format: str, participant: list):
      document_insert = {
        "_id": identifiant,
        "intitule": intitule,
        "lieu": lieu,
        "date": date,
        "horaires": horaires,
        "format": format,
        "participant": participant
      }
      try:
        result = self.collection.insert_one(document_insert)
        # Si l'insertion a réussi, on peut renvoyer l'_id du document inséré.
        return jsonify({"success": True, "id": str(result.inserted_id)}), 200
      except Exception as e:
        # En cas d'erreur, renvoyer un message d'erreur
        return jsonify({"success": False, "error": str(e)}), 500

        self.collection.insert_one(document_insert)
    """
    def inserer_match(self, id_tournoi, nom_joueur1, score_joueur1, nom_joueur2, score_joueur2):
      match = {
        "joueur1": {"nom": nom_joueur1, "score": score_joueur1},
        "joueur2": {"nom": nom_joueur2, "score": score_joueur2}
      }
      try:
        # Mettre à jour le document tournoi en ajoutant un nouveau match dans le tableau 'matches'
        self.collection.update_one(
          {"_id": id_tournoi},
          {"$push": {"matches": match}}
        )
        return jsonify({"succes": True, "message": "Match ajouté avec succès"}), 200
      except Exception as e:
        return jsonify({"succes": False, "erreur": str(e)}), 500

        #def insert_match (  )
        
    def create_matches(self, participants: list):
        matches = []
        
        for i, participant1 in enumerate(participants):
            for j, participant2 in enumerate(participants):
                if i != j:
                    matches.append({"joueur1": participant1, "joueur2": participant2, "score1": None, "score2": None, "vainqueur": None})
            
            return matches

    def remove_one_intitule(self, intitule: str):
        myquery = {"intitule": intitule}

        self.collection.delete_one(myquery)

    def update_one_intitule( self, intitule: str ):
        myquery = {"intitule": intitule}
        new_value = {"$set": {"intitule": intitule} }

        self.collection().update_one(myquery, new_value)

    def get_participant_tournoi(self, id_tournoi):
      tournoi = self.collection.find_one({ "_id": id_tournoi })
      if not tournoi:
        return "Tournoi non trouvé"

      participants_id = tournoi.get("participants", [])

      participants = list(Personnes.find( { "_id": { "$in": participants_id}}) )

      participants_liste = [ { "nom": p["nom"], "prenom": p["prenom"]} for p in participants ]

      return participants_liste

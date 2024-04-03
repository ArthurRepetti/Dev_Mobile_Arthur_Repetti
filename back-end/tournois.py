#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Thu Mar 28 15:43:14 2024

@author: fsiddiqui
"""

from Connexion import Connexion

from flask import jsonify

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


    def find_last_id(self):
        cursor = self.collection.find({}, { "_id": 1 })
        max_id = 0

        for identifiants in cursor :
            if (int(identifiants['_id']) > max_id):
                max_id = int(identifiants['_id'])

        return max_id + 1

    def insert_one( self, identifiant: int, intitule: str, lieu: str, date: str, horaires: list, format: str, participant: list ):
        document_insert = {

            "_id": identifiant,
            "intitule": intitule,
            "lieu": lieu,
            "date": date,
            "horaires": horaires,
            "format": format,
            "participant": participant

        }

        self.collection.insert_one(document_insert)


        #def insert_match (  )

    def remove_one_intitule(self, intitule: str):
        myquery = {"intitule": intitule}

        self.collection.delete_one(myquery)

    def update_one_intitule( self, intitule: str ):
        myquery = {"intitule": intitule}
        new_value = {"$set": {"intitule": intitule} }

        self.collection().update_one(myquery, new_value)


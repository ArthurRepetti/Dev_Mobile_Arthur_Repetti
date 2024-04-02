#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Wed Mar 20 14:48:51 2024

@author: arepetti
"""

from Connexion import Connexion

from flask import jsonify

class Personnes:
    
    def __init__(self):
        self.collection = Connexion().set_collection("personnes")
       
        
    def find_all(self):
        cursor = self.collection.find()
        find = []
        
        for personne in cursor :
            find.append(personne)
            
        return jsonify(find)
    
    def find_one(self, identifiant :int):
        cursor = self.collection.find({"_id": identifiant});
        find = []
        
        for personne in cursor :
            find.append(personne)
            
        return jsonify(find)

    def insert_one(self, identifiant :int, prenom :str, nom :str, date_naissance :str, sexe :str, pseudo :str):
        my_insert = {"_id": identifiant, "prenom": prenom, "nom": nom, "date_naissance": date_naissance, "sexe": sexe, "pseudo": pseudo}
        
        self.collection.insert_one(my_insert)

    def update_one_prenom(self, prenom :str, newprenom :str):
        myquery = {"prenom": prenom}
        newvalue = {"$set": {"prenom": newprenom}}
        
        self.collection.update_one(myquery, newvalue)


    def remove_one_prenom(self, prenom :str):
        myquery = {"prenom": prenom}
        
        self.collection.delete_one(myquery)
    
    """
    self.personnes().insert_one(4, "celine", "dion", "11/09/1976", "Homme", "cdion")
    self.personnes().update_one_prenom("Celine", "groscaca")
    self.personnes().delet_one_prenom("celine")
    print(self.personnes().find_all())
    """
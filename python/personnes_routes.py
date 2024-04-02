#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Mon Mar 18 16:00:43 2024

@author: arepetti
"""

from flask import Blueprint, jsonify, request
from personnes import Personnes

personnes_bp = Blueprint('routes', __name__)        

@personnes_bp.route('/get_all', methods=['GET'])
def personnes_get_all():
    return Personnes().find_all()

@personnes_bp.route('/get_one/<int:_id>', methods=['GET'])
def personnes_get_one(_id):
    return Personnes().find_one(_id)

@personnes_bp.route('/post_one', methods=['POST'])
def personnes_post_one():
    identifiant = request.form.get("identifiant")
    prenom = request.form.get("prenom")
    nom = request.form.get("nom")
    date_naissance = request.form.get("date_naissance")
    sexe = request.form.get("sexe")
    pseudo = request.form.get("pseudo")
    
    Personnes().insert_one(identifiant, prenom, nom, date_naissance, sexe, pseudo)
    return Personnes().find_all()

@personnes_bp.route('/patch_one', methods=['POST'])
def personne_patch_one_prenom():
    prenom = request.form.get("prenom")
    newprenom = request.form.get("newprenom")
    
    Personnes().update_one_prenom(prenom, newprenom)
    return Personnes().find_all()

@personnes_bp.route('/delet_one', methods=['POST'])
def personnes_delet_one_prenom(self):
    prenom = request.form.get("prenom")
    
    Personnes().remove_one_prenom(prenom)
    return Personnes().find_all()
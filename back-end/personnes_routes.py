#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Mon Mar 18 16:00:43 2024

@author: arepetti
"""

from flask import Blueprint, jsonify, request
from personnes import Personnes

personnes_bp = Blueprint('routes', __name__)

@personnes_bp.route('/', methods=['GET'])
def personnes_get_all():
    return Personnes().find_all()


@personnes_bp.route('/<int:_id>', methods=['GET'])
def personnes_get_one(_id):
    return Personnes().find_one(_id)


@personnes_bp.route('/', methods=['POST'])
def personnes_post_one():
    personne = request.get_json()

    identifiant = Personnes().find_last_id()
    date_naissance = personne['date_naissance']
    nom = personne['nom']
    prenom = personne['prenom']
    pseudo = personne['pseudo']
    sexe = personne['sexe']

    Personnes().insert_one(identifiant, prenom, nom, date_naissance, sexe, pseudo)
    return Personnes().find_all()
"""
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
"""
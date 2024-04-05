#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Thu Mar 28 15:43:14 2024

@author: fsiddiqui
"""

from flask import Blueprint, jsonify, request
from tournois import Tournois


tournois_bp = Blueprint('tournois', __name__)


@tournois_bp.route('/get_all', methods=['GET'])
def tournois_get_all():
    return Tournois().find_all()

@tournois_bp.route('/get_one/<int:_id>', methods=['GET'])
def tournois_get_one(_id):
    return Tournois().find_one(_id)

"""
@tournois_bp.route('/post_one', methods=['POST'])
def tournois_post_one():
    identifiant = Tournois.find_last_id()
    intitule = request.form.get("intitule")
    lieu = request.form.get("lieu")
    date = request.form.get("date")
    horaires = request.form.get("horaires")
    format = request.form.get("format")
    participant = request.form.get("participant")

    Tournois().insert_one(identifiant, intitule, lieu, date, horaires, format, participant)
    return Tournois().find_all()
"""

@tournois_bp.route('/post_one', methods=['POST'])
def tournois_post_one():
    tournois = request.get_json()
    # print(tournois, "tournois fonctionnel")
    identifiant = Tournois().find_last_id()
    intitule = tournois['intitule']
    lieu = tournois['lieu']
    date = tournois['date']
    horaires = [] # tournois['horaires']
    format = tournois['format']
    participants = tournois.get('participants', [])
    
    Tournois().insert_one(identifiant, intitule, lieu, date, horaires, format, participants)

    return Tournois().find_all()

@tournois_bp.route('/get_matches/<int:_id>', methods=['GET'])
def tournois_get_matches(_id):
    return Tournois().find_matches(_id)


"""
@tournois_bp.route('/patch_one', methods=['POST'])
@tournois_bp.route('delete_one', methods=['POST'])
def tournois_delete_one_intitule(self):
    intitule = request.form.get("intitule")
"""


#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Thu Mar 28 15:43:14 2024

@author: fsiddiqui
"""

from flask import Blueprint, jsonify, request
from tournois import Tournois


tournois_bp = Blueprint('tournois', __name__)


@tournois_bp.route('/', methods=['GET'])
def tournois_get_all():
    return Tournois().find_all()


@tournois_bp.route('/<int:_id>', methods=['GET'])
def tournois_get_one(_id):
    return Tournois().find_one(_id)


@tournois_bp.route('/', methods=['POST'])
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


@tournois_bp.route('/matches/<int:_id>', methods=['GET'])
def tournois_get_matches(_id):
    return Tournois().find_matches(_id)

"""
@tournois_bp.route('delete_one', methods=['POST'])
def tournois_delete_one_intitule(self):
    intitule = request.form.get("intitule")
"""


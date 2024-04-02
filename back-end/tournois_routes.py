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

@tournois_bp.route('/post_one', methods=['POST'])
def tournois_post_one():
    identifiant = request.form.get("identifiant")
    intitule = request.form.get("intitule")
    lieu = request.form.get("lieu")
    date = request.form.get("date")
    horaires = request.form.get("horaires")
    format = request.form.get("format")
    participant = request.form.get("participant")
    
    Tournois().insert_one(identifiant, intitule, lieu, date, horaires, format, participant)
    return Tournois().find_all()

@tournois_bp.route('/patch_one', methods=['POST'])
def tournois_patch_one_intitule():
    intitule = request.form.get("intitule")
    new_intitule = request.form.get("new_intitule")
    
    Tournois().update_one_intitule(intitule, new_intitule)
    return Tournois().find_all()

@tournois_bp.route('delete_one', methods=['POST'])
def tournois_delete_one_intitule(self):
    intitule = request.form.get("intitule")
    


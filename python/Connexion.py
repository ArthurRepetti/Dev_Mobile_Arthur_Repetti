#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Wed Mar 20 14:26:22 2024

@author: arepetti
"""

import pymongo

from node_modules.flatted.python.test import str


class Connexion:

    def __init__(self):
        self.client = pymongo.MongoClient("mongodb://localhost:27017/")
        self.db = self.client["pingpong"]

    def set_collection(self, nom :str):
        return self.db[nom]

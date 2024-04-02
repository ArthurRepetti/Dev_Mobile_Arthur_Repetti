#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Mon Mar 18 14:39:31 2024

@author: arepetti
"""

from flask import Flask
"""from flask_cors import CORS"""

from personnes_routes import personnes_bp

app = Flask(__name__)
"""app = CORS(app)"""

app.register_blueprint(personnes_bp, url_prefix='/api/personnes')

@app.route('/')
def hello_world():
    return "Hello, world !"

if __name__ == '__main__':
    app.run(debug=True)
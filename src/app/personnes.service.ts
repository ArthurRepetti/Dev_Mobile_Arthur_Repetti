import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import { Personne } from './Personne';

@Injectable({
  providedIn: 'root'
})
export class PersonnesService {

  constructor(private http: HttpClient) { }

  personnes_get_all(): Observable<Personne[]> {
    return this.http.get<Personne[]>('/api/personnes/get_all');
  }

  personnes_get_one(_id :string): Observable<Personne[]> {
    return this.http.get<Personne[]>('/api/personnes/get_one/' + _id);
  }

  personnes_insert_one(personne :Personne): Observable<Personne> {
    return this.http.post<Personne>('/api/personnes/post_one', personne);
  }
}

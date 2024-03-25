import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Personne } from './Personne';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  personnes_get_all(): Observable<Personne[]> {
    return this.http.get<Personne[]>('/api/personnes/get_all');
  }

}

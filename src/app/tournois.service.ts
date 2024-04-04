import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import {Tournois} from './Tournois';

@Injectable({
  providedIn: 'root'
})
export class TournoisService {

  constructor( private http: HttpClient ) {  }

  tournois_get_all(): Observable<Tournois[]> {
  return this.http.get<Tournois[]>('/api/tournois/get_all') ;
  }

  tournois_get_one(_id: String): Observable<Tournois[]> {
  return this.http.get<Tournois[]>('/api/tournois/get_one/' + _id );
  }

}

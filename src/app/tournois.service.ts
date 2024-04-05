import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import { Tournois } from './Tournois';

@Injectable({
  providedIn: 'root'
})
export class TournoisService {

  constructor( private http: HttpClient ) {  }

  tournois_get_all(): Observable<Tournois[]> {
    return this.http.get<Tournois[]>('/api/tournois/') ;
  }

  tournois_get_one(_id: string): Observable<Tournois[]> {
    return this.http.get<Tournois[]>('/api/tournois/' + _id );
  }

  tournois_insert_one(tournois :Tournois): Observable<Tournois> {
    return this.http.post<Tournois>('/api/tournois/', tournois);
  }

}

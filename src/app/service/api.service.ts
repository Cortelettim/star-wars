import { Injectable } from '@angular/core';
import { Filmes } from './filmes.model';
import {  Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // tslint:disable-next-line: typedef-whitespace
  constructor(private http : HttpClient) { }

  read(): Observable<any> {
    return this.http.get<any>('http://swapi.dev/api/films/')
  }
  readById(id: number): Observable<Filmes> {
    const url = `http://swapi.dev/api/films/${id}`;
    return this.http.get<Filmes>(url)
  }
}

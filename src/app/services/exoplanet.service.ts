import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Exoplanet } from '../models/exoplanet';

const url: string = "https://api-exoplanets.herokuapp.com/exoplanets";

@Injectable({
  providedIn: 'root'
})
export class ExoplanetService {

  private http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  findAll(): Observable<Exoplanet[]> {
    return this.http.get<Exoplanet[]>(url);
  }
}

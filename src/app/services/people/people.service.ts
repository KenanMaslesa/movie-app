import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private http: HttpClient) { }

  getPopular(page){
    return this.http.get(`${environment.tmdbAPIUrl}/person/popular?api_key=${environment.tmdbAPIKey}&language=en-US&include_adult=false&page=${page}`).pipe();
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class KeywordService {

  constructor(private http: HttpClient) { }

  getKeywords(query){
    return this.http.get(`${environment.tmdbAPIUrl}/search/keyword?api_key=${environment.tmdbAPIKey}&query=${query}`).pipe();
  }
}

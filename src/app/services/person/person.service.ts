import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private http: HttpClient) { }

  getPerson(personId){
    return this.http.get(`${environment.tmdbAPIUrl}/person/${personId}?api_key=${environment.tmdbAPIKey}&language=en-US`).pipe();
  }

  getPersonsCombinedCredits(personId){
    return this.http.get(`${environment.tmdbAPIUrl}/person/${personId}/combined_credits?api_key=${environment.tmdbAPIKey}&language=en-US&include_adult=false`).pipe();
  }

  getPersonImages(personId){
    return this.http.get(`${environment.tmdbAPIUrl}/person/${personId}/images?api_key=${environment.tmdbAPIKey}&language=en-US&include_adult=false`).pipe();
  }

}

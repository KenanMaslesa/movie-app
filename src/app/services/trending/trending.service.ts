import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TrendingService {

  constructor(private http: HttpClient) { }

  getTrendings(mediaType, timeWindow){
    return this.http.get(`${environment.tmdbAPIUrl}/trending/${mediaType}/${timeWindow}?api_key=${environment.tmdbAPIKey}`).pipe();
  }
}

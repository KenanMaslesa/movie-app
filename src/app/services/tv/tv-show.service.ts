import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TvShowService {
  constructor(private http: HttpClient) { }

  getTvShowDetails(tvId){
    return this.http.get(`${environment.tmdbAPIUrl}/tv/${tvId}?api_key=${environment.tmdbAPIKey}&language=en-US`).pipe();
  }
}

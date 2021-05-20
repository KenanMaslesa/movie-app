import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TvShowService {
  private apiKey = '3fd2be6f0c70a2a598f084ddfb75487c';
  constructor(private http: HttpClient) { }

  getTvShowDetails(tvId){
    return this.http.get(`https://api.themoviedb.org/3/tv/${tvId}?api_key=${this.apiKey}&language=en-US`).pipe();
  }
}

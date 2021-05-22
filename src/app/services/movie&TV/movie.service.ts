import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MovieAndTvService {
  constructor(private http: HttpClient) {}

  getMoviesByKeyword(keyword){
    return this.http.get(`${environment.tmdbAPIUrl}/keyword/${keyword}/movies?api_key=${environment.tmdbAPIKey}&language=en-US&include_adult=false`).pipe();
  }

  getSimilarMoviesTvShows(mediaType, id){
    return this.http.get(`${environment.tmdbAPIUrl}/${mediaType}/${id}/similar?api_key=${environment.tmdbAPIKey}&language=en-US&adult=false`).pipe();
  }

  getMovieDetails(movieId){
    return this.http.get(`${environment.tmdbAPIUrl}/movie/${movieId}?api_key=${environment.tmdbAPIKey}&adult=false&language=en-US`).pipe();
  }

  getTvShowDetails(tvId){
    return this.http.get(`${environment.tmdbAPIUrl}/tv/${tvId}?api_key=${environment.tmdbAPIKey}&language=en-US`).pipe();
  }

  getCastAndCrew(movieId, mediaType){
    return this.http.get(`${environment.tmdbAPIUrl}/${mediaType}/${movieId}/credits?api_key=${environment.tmdbAPIKey}&adult=false&language=en-US`).pipe();
  }

}
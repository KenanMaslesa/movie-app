import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private http: HttpClient) {}

  getMovies(page) {
    return this.http
      .get(`${environment.tmdbAPIUrl}/discover/tv?sort_by=popularity.desc&api_key=${environment.tmdbAPIKey}&page=${page}`).pipe();
  }

  getMoviesByKeyword(keyword){
    return this.http.get(`${environment.tmdbAPIUrl}/keyword/${keyword}/movies?api_key=${environment.tmdbAPIKey}&language=en-US&include_adult=false`).pipe();
  }

  getSimilarMoviesTvShows(mediaType, id){
    return this.http.get(`${environment.tmdbAPIUrl}/${mediaType}/${id}/similar?api_key=${environment.tmdbAPIKey}&language=en-US`).pipe();
  }

  getVideos(mediaType, id) {
    var video_url = `${environment.tmdbAPIUrl}/${mediaType}/${id}/videos?api_key=${environment.tmdbAPIKey}&language=en-US`;
    return this.http.get(video_url).pipe();
  }

  getMoviesBysearchTerm(searchTerm) {
    return this.http.get(`${environment.tmdbAPIUrl}/search/movie?api_key=${environment.tmdbAPIKey}&query=${searchTerm}`).pipe();
  }

  getMovieById(movieId){
    return this.http.get(`${environment.tmdbAPIUrl}/movie/${movieId}?api_key=${environment.tmdbAPIKey}&language=en-US`).pipe();
  }

  getMovieCastAndCrew(movieId, mediaType){
    return this.http.get(`${environment.tmdbAPIUrl}/${mediaType}/${movieId}/credits?api_key=${environment.tmdbAPIKey}&language=en-US`).pipe();
  }

  getTrendings(mediaType, timeWindow){
    return this.http.get(`${environment.tmdbAPIUrl}/trending/${mediaType}/${timeWindow}?api_key=${environment.tmdbAPIKey}`).pipe();
  }

  getPerson(personId){
    return this.http.get(`${environment.tmdbAPIUrl}/person/${personId}?api_key=${environment.tmdbAPIKey}&language=en-US`).pipe();
  }

  getPersonsCombinedCredits(personId){
    return this.http.get(`${environment.tmdbAPIUrl}/person/${personId}/combined_credits?api_key=${environment.tmdbAPIKey}&language=en-US&include_adult=false`).pipe();
  }

}

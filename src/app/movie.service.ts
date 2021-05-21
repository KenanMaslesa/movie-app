import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private apiKey = '3fd2be6f0c70a2a598f084ddfb75487c';
  
  constructor(private http: HttpClient) {}

  getMovies(page) {
    return this.http
      .get(`https://api.themoviedb.org/3/discover/tv?sort_by=popularity.desc&api_key=${this.apiKey}&page=${page}`).pipe();
  }

  getSimilarMoviesTvShows(mediaType, id){
    return this.http.get(`https://api.themoviedb.org/3/${mediaType}/${id}/similar?api_key=${this.apiKey}&language=en-US&page=1`).pipe();
  }

  getVideos(mediaType, id) {
    var video_url = `https://api.themoviedb.org/3/${mediaType}/${id}/videos?api_key=${this.apiKey}&language=en-US`;
    return this.http.get(video_url).pipe();
  }

  getMoviesBysearchTerm(searchTerm) {
    return this.http.get(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${searchTerm}`).pipe();
  }

  getMovieById(movieId){
    return this.http.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${this.apiKey}&language=en-US`).pipe();
  }

  getMovieCastAndCrew(movieId, mediaType){
    return this.http.get(`https://api.themoviedb.org/3/${mediaType}/${movieId}/credits?api_key=${this.apiKey}&language=en-US`).pipe();
  }

  getTrendings(mediaType, timeWindow){
    return this.http.get(`https://api.themoviedb.org/3/trending/${mediaType}/${timeWindow}?api_key=${this.apiKey}`).pipe();
  }

  getPerson(personId){
    return this.http.get(`https://api.themoviedb.org/3/person/${personId}?api_key=${this.apiKey}&language=en-US`).pipe();
  }

  getPersonsCombinedCredits(personId){
    return this.http.get(`https://api.themoviedb.org/3/person/${personId}/combined_credits?api_key=${this.apiKey}&language=en-US&include_adult=false`).pipe();
  }

}

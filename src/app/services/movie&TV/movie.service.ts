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

  getSimilarMoviesTvShows(mediaType, id, page){
    return this.http.get(`${environment.tmdbAPIUrl}/${mediaType}/${id}/similar?api_key=${environment.tmdbAPIKey}&language=en-US&adult=false&page=${page}`).pipe();
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

  getPopular(mediaType, page){
    return this.http.get(`${environment.tmdbAPIUrl}/${mediaType}/popular?api_key=${environment.tmdbAPIKey}&language=en-US&page=${page}`).pipe();
  }

  getLatest(mediaType){
    return this.http.get(`${environment.tmdbAPIUrl}/${mediaType}/latest?api_key=${environment.tmdbAPIKey}&language=en-US`).pipe();
  }

  getTopRated(mediaType, page){
    return this.http.get(`${environment.tmdbAPIUrl}/${mediaType}/top_rated?api_key=${environment.tmdbAPIKey}&language=en-US&page=${page}`).pipe();
  }

  getUpcoming(mediaType, page){
    return this.http.get(`${environment.tmdbAPIUrl}/${mediaType}/upcoming?api_key=${environment.tmdbAPIKey}&language=en-US&page=${page}`).pipe();
  }

  getReviews(mediaType, id){
    return this.http.get(`${environment.tmdbAPIUrl}/${mediaType}/${id}/reviews?api_key=${environment.tmdbAPIKey}&language=en-US`).pipe();
  }

  getImages(mediaType, id){
    return this.http.get(`${environment.tmdbAPIUrl}/${mediaType}/${id}/images?api_key=${environment.tmdbAPIKey}&language=en-US`).pipe();
  }

  getGenres(mediaType){
    return this.http.get(`${environment.tmdbAPIUrl}/genre/${mediaType}/list?api_key=${environment.tmdbAPIKey}&language=en-US`).pipe();
  }

  getTvSeasons(tvId, seasonNumber){
    return this.http.get(`${environment.tmdbAPIUrl}/tv/${tvId}/season/${seasonNumber}?api_key=${environment.tmdbAPIKey}&language=en-US`).pipe();
  }

  getTvEpisode(tvId, seasonNumber, episodeNumber){
    return this.http.get(`${environment.tmdbAPIUrl}/tv/${tvId}/season/${seasonNumber}/episode/${episodeNumber}?api_key=${environment.tmdbAPIKey}&language=en-US`).pipe();
  }

}

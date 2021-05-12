import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private moviesUrl =
    'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1';
  private moviesSearchUrl =
    'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query=';
  
    constructor(private http: HttpClient) {}

  getMovies() {
    return this.http
      .get(this.moviesUrl)
      .pipe
      /*map((responseData) => {
        return wordsArray;
      })*/
      ();
  }

  getMovieVideo(movieID) {
    var video_url = `https://api.themoviedb.org/3/movie/${movieID}/videos?api_key=3fd2be6f0c70a2a598f084ddfb75487c&language=en-US`;
    return this.http.get(video_url).pipe();
  }

  getMoviesBysearchTerm(searchTerm) {
    return this.http.get(this.moviesSearchUrl+searchTerm).pipe();
  }
}

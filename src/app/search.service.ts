import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { debounceTime } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private apiKey = '3fd2be6f0c70a2a598f084ddfb75487c';
  constructor(private http: HttpClient) { }

  multiSearch(query, page){
    return this.http.get(`https://api.themoviedb.org/3/search/multi?api_key=${this.apiKey}&language=en-US&query=${query}&page=${page}&include_adult=false`).pipe(debounceTime(3000));
  }

  discover(mediaType, page,genres){
    return this.http.get(` https://api.themoviedb.org/3/discover/${mediaType}?api_key=${this.apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&page=${page}&with_genres=${genres}`).pipe();
  }
}

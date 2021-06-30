import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private firebaseUrl = "https://movies-8dcb8-default-rtdb.europe-west1.firebasedatabase.app/";

  constructor(private http: HttpClient) { }

  //favorite list
  addMovieToList(movie, list){
    return this.http.post(`${this.firebaseUrl}/${list}.json`, movie);
  }

  removeMoviFromList(movieId, list){
    return this.http.delete(`${this.firebaseUrl}/${list}/${movieId}.json`, movieId);
  }

  getMovieFirebaseId(movieId, list){
    return this.http.get(`${this.firebaseUrl}/${list}.json`).pipe(map(responseData => {
      for(const key in responseData){
        if(responseData[key].id == movieId){
          return key;
        }
      }
      return null;
    }))
  }

  getMoviesFromList(list){
    return this.http.get(`${this.firebaseUrl}/${list}.json`).pipe(map(responseData => {
      var array = [];
      for(const key in responseData){
        array.push({...responseData[key], firebaseId: key})
      }
      return array;
    }))
  }

  //watchlist
}

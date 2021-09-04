import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { AuthService } from 'src/app/shared/services/auth.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private http: HttpClient, public authService: AuthService) { }

 
  addMovieToList(movie, list){
    var user = this.authService.getCurrentUser();
    if(user != null){
      return this.http.post(`${environment.firebase.databaseURL}/${list}/${user.uid}.json`, movie);
    }
  }

  removeMoviFromList(movieId, list){
    return this.http.delete(`${environment.firebase.databaseURL}/${list}/${this.authService.getCurrentUser().uid}/${movieId}.json`);
  }

  getMovieFirebaseId(movieId, list){
    return this.http.get(`${environment.firebase.databaseURL}/${list}/${this.authService.getCurrentUser().uid}.json`).pipe(map(responseData => {
      for(const key in responseData){
        if(responseData[key].id == movieId){
          return key;
        }
      }
      return null;
    }))
  }

  getMoviesFromList(list){
    return this.http.get(`${environment.firebase.databaseURL}/${list}/${this.authService.getCurrentUser().uid}.json`).pipe(map(responseData => {
      var array = [];
      for(const key in responseData){
        array.push({...responseData[key], firebaseId: key})
      }
      return array;
    }))
  }

}

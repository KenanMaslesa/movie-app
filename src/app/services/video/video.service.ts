import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor(private http: HttpClient) { }

  getVideos(mediaType, id) {
    var video_url = `${environment.tmdbAPIUrl}/${mediaType}/${id}/videos?api_key=${environment.tmdbAPIKey}&language=en-US`;
    return this.http.get(video_url).pipe();
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { debounceTime } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  //keywords ="212787|6373|9833|33998|34215|242896|249665|264386|272066|275267|279532|10688|236487|4411|194188|246784|263590|13059|247614|13059|33625|173251|193316|208271|211088|225582|24761|177591|230416|7098|253810|267122|5593|33451|33432|158436|155262|179178|627949|445|11530|18732|190115|206574|199723|7344|278250|273408|262786|246422|238355|237847|229037|193698|190366|187522|176511|158436|155139|18321|18314|15197|2727|445|11531|2943|9860|155301|155761|156434|176792|187551|206789|208960|227758|228853|232651|235653|237017|256538|262784|269784|280017|157813|15130|11137|40940|41515|173662|186621|196441|238059|245045|247821|250048|257658|257794|258533|262494|264384|264411|267435|269644|280069|190370|1664|11275|192119|207767|192628|207807|219371|226010|226161|233655|238059|238098|240530|256466|256603|276390|";
  keywords = '';
  constructor(private http: HttpClient) { }

  multiSearch(query, page){
    return this.http.get(`${environment.tmdbAPIUrl}/search/multi?api_key=${environment.tmdbAPIKey}&language=en-US&query=${query}&page=${page}&include_adult=false`).pipe();
  }

  searchMovies(query, page){
    return this.http.get(`${environment.tmdbAPIUrl}/search/movie?api_key=${environment.tmdbAPIKey}&language=en-US&query=${query}&page=${page}&include_adult=false`).pipe();
  }

  searchTVs(query, page){
    return this.http.get(`${environment.tmdbAPIUrl}/search/tv?api_key=${environment.tmdbAPIKey}&language=en-US&query=${query}&page=${page}&include_adult=false`).pipe();
  }

  searchPeople(query, page){
    return this.http.get(`${environment.tmdbAPIUrl}/search/person?api_key=${environment.tmdbAPIKey}&language=en-US&query=${query}&page=${page}&include_adult=true`).pipe();
  }

  discover(mediaType='movie', page, sortBy, genres, keywwords){
    return this.http.get(`${environment.tmdbAPIUrl}/discover/${mediaType}?api_key=${environment.tmdbAPIKey}&language=en-US&sort_by=${sortBy}&include_adult=false&page=${page}&with_genres=${genres}&without_keywords=${this.keywords}&with_keywords=${keywwords.join('|')}`).pipe();
  }

}

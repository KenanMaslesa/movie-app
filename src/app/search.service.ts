import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { debounceTime } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private apiKey = '3fd2be6f0c70a2a598f084ddfb75487c';
  keywords ='158436|155262|179178|627949|445|11530|18732|190115|206574|199723|7344|278250|273408|262786|246422|238355|237847|229037|193698|190366|187522|176511|158436|155139|18321|18314|15197|2727|445|11531|2943|9860|155301|155761|156434|176792|187551|206789|208960|227758|228853|232651|235653|237017|256538|262784|269784|280017|157813|15130|11137|40940|41515|173662|186621|196441|238059|245045|247821|250048|257658|257794|258533|262494|264384|264411|267435|269644|280069|190370|1664|11275|192119|207767|192628|207807|219371|226010|226161|233655|238059|238098|240530|256466|256603|276390|'

  constructor(private http: HttpClient) { }

  multiSearch(query, page){
    return this.http.get(`https://api.themoviedb.org/3/search/multi?api_key=${this.apiKey}&language=en-US&query=${query}&page=${page}&include_adult=false`).pipe(debounceTime(3000));
  }

  discover(mediaType, page,genres){
    return this.http.get(`https://api.themoviedb.org/3/discover/${mediaType}?api_key=${this.apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&page=${page}&with_genres=${genres}&without_keywords=${this.keywords}`).pipe();
  }
}

import { Component, OnInit } from '@angular/core';
import { KeywordService } from 'src/app/services/keyword/keyword.service';
import { MovieAndTvService } from 'src/app/services/movie&TV/movie.service';
import { SearchService } from 'src/app/services/search/search.service';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.scss']
})
export class TvComponent implements OnInit {
  movies: any;
  movieKeywords;
  movieKeywordsSearchQuery = '';
  keywordIDs = [];
  selectedKeywords = [];
  currentPage = 1;
  backgroundImage: string;
  searchQuery = '';
  genreFilters = [];
  sortBy = 'popularity.desc';
  tvFilters:any;

  constructor(private movieService: MovieAndTvService, private keywordService: KeywordService, private searchService: SearchService) { }

  ngOnInit(): void {
    this.getMovies(this.currentPage);
    this.getTvGenres();
  }

  getMovies(page){
    this.movieService.getPopular('tv', page).subscribe((responseData) => this.movies = responseData);
  }

  getTvKeywords(query) {
    if (query == '') {
      this.movieKeywords = null;
      this.movieKeywordsSearchQuery = '';
    }
    else{
      this.movieKeywordsSearchQuery = query;

      this.keywordService
      .getKeywords(query)
      .subscribe((data) => (this.movieKeywords = data));
    }
   
  }


  getTopRated(){
    this.movieService.getTopRated('tv', this.currentPage).subscribe((responseData) => this.movies = responseData);
  }

  discover(mediaType, page) {

    this.searchService
      .discover(mediaType, page, this.sortBy, this.genreFilters, this.keywordIDs)
      .subscribe((data) => this.movies = data);
  }

  tvByKeywordsOnPaginationClick(page, keywords){

    var keywordIDsOnly = [];
   keywords.forEach(element => {
    keywordIDsOnly.push(element.id);
   });

    this.searchService
      .discover('tv', page, this.sortBy, this.genreFilters, keywordIDsOnly)
      .subscribe((data) => this.movies = data);

  }

  onSelectedKeywords(keyword){
    if(this.selectedKeywords.indexOf(keyword) > -1 ){
      this.selectedKeywords.splice(this.selectedKeywords.indexOf(keyword),1);
    }
    else{
      this.selectedKeywords.push(keyword);
    }

    this.keywordIDs = [];
    this.selectedKeywords.forEach(element => {
      this.keywordIDs.push(element.id);
    });

    this.discover('tv', this.currentPage);
  }

  search(searchQuery){
    this.currentPage = 1;
    this.searchQuery = searchQuery;
    this.searchTvShows(searchQuery, this.currentPage);
  }

  searchOnPaginationClick(page){
    this.searchTvShows(this.searchQuery, page);
  }

  
  searchTvShows(query, page) {
    if (query != '') {
      this.searchQuery = query;
      this.searchService.searchTVs(query, page).subscribe((data) => {
        this.movies = data;
      });
    } else {
      this.currentPage = 1;
      this.discover('tv', this.currentPage);
      this.searchQuery = '';
    }
  }

  onMouseOver(movie) {
    this.backgroundImage = movie.backdrop_path;
  }

  setGenreFilters(filterId){
    this.currentPage = 1;
    if(this.genreFilters.indexOf(filterId) > -1 ){
      this.genreFilters.splice(this.genreFilters.indexOf(filterId),1);
    }
    else{
      this.genreFilters.push(filterId);
    }
    this.discover('tv', this.currentPage);
  }

  getTvGenres(){
    this.movieService.getGenres('tv').subscribe((responseData) => this.tvFilters = responseData);
  }

}

import { Component, OnInit } from '@angular/core';
import { KeywordService } from 'src/app/services/keyword/keyword.service';
import { MovieAndTvService } from 'src/app/services/movie&TV/movie.service';
import { SearchService } from 'src/app/services/search/search.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
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

  movieFilters = [
    {
      name: 'Action',
      id: 28,
    },
    {
      name: 'Adventure',
      id: 12,
    },
    {
      name: 'Animation',
      id: 16,
    },
    {
      name: 'Comedy',
      id: 35,
    },
    {
      name: 'Crime',
      id: 80,
    },
    {
      name: 'Documentary',
      id: 99,
    },
    {
      name: 'Drama',
      id: 18,
    },
    {
      name: 'Family',
      id: 10751,
    },
    {
      name: 'Fantasy',
      id: 14,
    },
    {
      name: 'History',
      id: 36,
    },
    {
      name: 'Horror',
      id: 27,
    },
    {
      name: 'Music',
      id: 10402,
    },
    {
      name: 'Mystery',
      id: 9648,
    },
    {
      name: 'Romance',
      id: 10749,
    },
    {
      name: 'Science Fiction',
      id: 878,
    },
    {
      name: 'TV Movie',
      id: 10770,
    },
    {
      name: 'Thriller',
      id: 53,
    },
    {
      name: 'War',
      id: 10752,
    },
    {
      name: 'Western',
      id: 37,
    },
  ];

  constructor(private movieService: MovieAndTvService, private keywordService: KeywordService, private searchService: SearchService) { }

  ngOnInit(): void {
    this.getMovies(this.currentPage);
  }

  getMovies(page){
    this.movieService.getPopular('movie', page).subscribe((responseData) => this.movies = responseData);
  }

  getMovieKeywords(query) {
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
    this.movieService.getTopRated('movie', this.currentPage).subscribe((responseData) => this.movies = responseData);
  }

  discover(mediaType, page) {

    this.searchService
      .discover(mediaType, page, this.sortBy, this.genreFilters, this.keywordIDs)
      .subscribe((data) => this.movies = data);
  }

  moviesByKeywordsOnPaginationClick(page, keywords){

    var keywordIDsOnly = [];
   keywords.forEach(element => {
    keywordIDsOnly.push(element.id);
   });

    this.searchService
      .discover('movie', page, this.sortBy, this.genreFilters, keywordIDsOnly)
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

    this.discover('movie', this.currentPage);
  }

  search(searchQuery){
    this.currentPage = 1;
    this.searchQuery = searchQuery;
    this.searchMovies(searchQuery, this.currentPage);
  }

  searchOnPaginationClick(page){
    this.searchMovies(this.searchQuery, page);
  }

  
  searchMovies(query, page) {
    if (query != '') {
      this.searchQuery = query;
      this.searchService.searchMovies(query, page).subscribe((data) => {
        this.movies = data;
      });
    } else {
      this.currentPage = 1;
      this.discover('movie', this.currentPage);
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
    this.discover('movie', this.currentPage);
  }
}

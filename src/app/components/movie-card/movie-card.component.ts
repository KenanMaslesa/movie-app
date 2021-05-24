import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ApiData } from 'src/app/models/ApiData';
import { Video } from 'src/app/models/Video';
import { KeywordService } from 'src/app/services/keyword/keyword.service';
import { MovieAndTvService } from 'src/app/services/movie&TV/movie.service';
import { SearchService } from 'src/app/services/search/search.service';
import { VideoService } from 'src/app/services/video/video.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent implements OnInit {
  multiSearchData: any;
  showModal: boolean;
  videoUrl: any;
  currentPageSearch = 1;
  currentPageDiscover = 1;
  movieKeywords: any;
  tvKeywords: any;
  searchQuery: string;
  sortBy = 'popularity.desc';
  backgroundImage: string;
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

  tvFilters = [
    {
      name: 'Action & Adventure',
      id: 10759,
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
      name: 'Kids',
      id: 10762,
    },

    {
      name: 'Mystery',
      id: 9648,
    },
    {
      name: 'News',
      id: 10763,
    },
    {
      name: 'Sci-Fi & Fantasy',
      id: 10765,
    },
    {
      name: 'Reality',
      id: 10764,
    },
    {
      name: 'Soap',
      id: 10766,
    },
    {
      name: 'War & Politics',
      id: 10768,
    },
    {
      name: 'Western',
      id: 37,
    },
    {
      name: 'Talk',
      id: 10767,
    },
  ];
  constructor(
    private movieAndTVService: MovieAndTvService,
    private sanitizer: DomSanitizer,
    private searchService: SearchService,
    private videoService: VideoService,
    private keywordService: KeywordService
  ) {}

  ngOnInit(): void {
    this.discover('movie', this.currentPageDiscover, this.sortBy);
  }

  getMovieVideo(movieID, mediaType) {
    this.videoService
      .getVideos(mediaType, movieID)
      .subscribe((video: Video) => {
        this.updateVideoUrl(video.results[0].key);
      });
  }

  showTrailer(movieID, mediaType = 'movie') {
    this.getMovieVideo(movieID, mediaType);
    this.showModal = true;
  }

  updateVideoUrl(id: string) {
    this.videoUrl = 'https://www.youtube.com/embed/' + id;
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      this.videoUrl
    );
  }

  multiSearch(query, page) {
    if (query != '') {
      this.searchService.multiSearch(query, page).subscribe((data: ApiData) => {
        this.createNewArayWithoutForbiddenKeywords(data);
      });
    } else {
      this.currentPageSearch = 1;
      this.discover('movie', this.sortBy, this.currentPageDiscover);
    }
  }

  createNewArayWithoutForbiddenKeywords(data) {
    const tempArray = { results: [], total_pages: Number };
    tempArray.total_pages = data.total_pages;

    data.results.forEach((element) => {
      var mediaType;
      if(element.media_type == null){
        if(element.first_air_date == null)
        mediaType = 'movie';
        else
        mediaType = 'tv';
      }
      if (element.media_type != 'person') {
        this.keywordService
          .containsForbiddenKeywords(mediaType, element.id)
          .subscribe((contains) => {
            if (!contains) tempArray.results.push({ ...element });
            this.multiSearchData = tempArray;
          });
      }
    });
  }

  onValueChange(value: string): void {
    this.searchQuery = value;
    this.multiSearch(value, this.currentPageSearch);
  }

  onSortingChange(value) {
    this.sortBy = value;
    this.discover('movie', this.currentPageDiscover, this.sortBy);
  }

  discover(mediaType, page, sortBy, genres = '', keywords = '') {
    this.searchService
      .discover(mediaType, page, this.sortBy, genres, keywords)
      .subscribe((data) => this.createNewArayWithoutForbiddenKeywords(data));
  }

  getMovieKeywords(query) {
    if (query == '') {
      this.movieKeywords = null;
      return;
    }
    this.keywordService
      .getKeywords(query)
      .subscribe((data) => (this.movieKeywords = data));
  }

  getTVKeywords(query) {
    if (query == '') {
      this.tvKeywords = null;
      return;
    }
    this.keywordService
      .getKeywords(query)
      .subscribe((data) => (this.tvKeywords = data));
  }

  getMoviesByKeyword(keyword) {
    this.movieAndTVService
      .getMoviesByKeyword(keyword)
      .subscribe((data) => (this.multiSearchData = data));
  }
  onMouseOver(movie) {
    this.backgroundImage = movie.backdrop_path;
  }
}

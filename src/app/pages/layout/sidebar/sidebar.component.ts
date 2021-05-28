import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Output() hideSidebar = new EventEmitter<boolean>();
  Toggle = false;
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
  constructor() { }

  ngOnInit(): void {
  }

  toggleSidebar(){
    this.Toggle = this.Toggle? false: true;
    this.hideSidebar.emit(this.Toggle);
  }

}

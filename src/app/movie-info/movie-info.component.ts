import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.scss'],
})
export class MovieInfoComponent implements OnInit {
  @Input() movie: any;
  @Input() movieId: number;
  showModal: boolean;

  constructor() {}

  ngOnInit(): void {
  }
}

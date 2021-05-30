import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search/search.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  multiSearchData: any;
  searchQuery: string;
  currentPage = 1;
  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
  }

  onValueChange(value: string): void {
    this.searchQuery = value;
    this.multiSearch(value, this.currentPage);
  }

  multiSearch(query, page) {
    if (query != '') {
      this.searchService.multiSearch(query, page).subscribe((data) => {
        this.multiSearchData = data;
      });
    } else {
     this.multiSearchData = null;
    }
  }

  onMouseOver(movie){

  }

}

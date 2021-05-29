import { Component, OnInit } from '@angular/core';
import { PeopleService } from 'src/app/services/people/people.service';
import { SearchService } from 'src/app/services/search/search.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss'],
})
export class PeopleComponent implements OnInit {
  people: any;
  currentPage = 1;
  backgroundImage: string;
  person:any;
  searchQuery = '';
  constructor(private peopleService: PeopleService, private searchService: SearchService) {}

  ngOnInit(): void {
    this.getPopular(this.currentPage);
  }

  getPopular(page) {
    if(this.searchQuery == ''){
      this.peopleService.getPopular(page).subscribe((responseData) => {
        this.people = responseData;
      });
    }
    else{
      this.getPeopleBySearchQuery(this.searchQuery, page);
    }
   
  }

  getPeopleBySearchQuery(searchQuery, page) {
    this.searchQuery = searchQuery;
    this.currentPage = 1;

    if(searchQuery == ''){
      this.getPopular(this.currentPage);
    }
    else{
      this.searchService.searchPeople(searchQuery, page).subscribe((responseData) => this.people = responseData);
    }
  }

  onHover(person){
    if(!person.adult)
    this.backgroundImage = person.known_for[0].backdrop_path;
    
    this.person = person;
  }
}

import { Component, OnInit } from '@angular/core';
import { PeopleService } from 'src/app/services/people/people.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
  people: any;
  currentPage = 1;
  constructor(private peopleService: PeopleService) { }

  ngOnInit(): void {
    this.getPopular(this.currentPage);
  }

  getPopular(page){
    this.peopleService.getPopular(page).subscribe((responseData) => {this.people = responseData});
  }

}

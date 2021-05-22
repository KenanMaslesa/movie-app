import { Input } from '@angular/core';
import { Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})

export class SearchComponent implements OnInit {
  constructor() { }
  @Output() valueChange = new EventEmitter();
  ngOnInit(): void {
  }

  search(searchTerm){
    this.valueChange.emit(searchTerm);
  }

}

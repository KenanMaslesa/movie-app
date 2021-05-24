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
  @Input() backgroundImage;
  image = '_and_h600_multi_faces_filter(duotone,032541,01b4e4)/7VrRna8S3x6xbijooeBmxqvHXiu.jpg';
  ngOnInit(): void {
  }

  search(searchTerm){
    this.valueChange.emit(searchTerm);
  }

}

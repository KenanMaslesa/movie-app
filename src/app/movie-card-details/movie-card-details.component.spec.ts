import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieCardDetailsComponent } from './movie-card-details.component';

describe('MovieCardDetailsComponent', () => {
  let component: MovieCardDetailsComponent;
  let fixture: ComponentFixture<MovieCardDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieCardDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieCardDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvEpisodeComponent } from './tv-episode.component';

describe('TvEpisodeComponent', () => {
  let component: TvEpisodeComponent;
  let fixture: ComponentFixture<TvEpisodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvEpisodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TvEpisodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

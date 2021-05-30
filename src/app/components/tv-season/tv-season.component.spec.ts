import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvSeasonComponent } from './tv-season.component';

describe('TvSeasonComponent', () => {
  let component: TvSeasonComponent;
  let fixture: ComponentFixture<TvSeasonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvSeasonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TvSeasonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

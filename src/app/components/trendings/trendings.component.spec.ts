import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingsComponent } from './trendings.component';

describe('TrendingsComponent', () => {
  let component: TrendingsComponent;
  let fixture: ComponentFixture<TrendingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrendingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonsCreditsComponent } from './persons-credits.component';

describe('PersonsCreditsComponent', () => {
  let component: PersonsCreditsComponent;
  let fixture: ComponentFixture<PersonsCreditsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonsCreditsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonsCreditsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

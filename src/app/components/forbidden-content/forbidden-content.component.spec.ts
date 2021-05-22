import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForbiddenContentComponent } from './forbidden-content.component';

describe('ForbiddenContentComponent', () => {
  let component: ForbiddenContentComponent;
  let fixture: ComponentFixture<ForbiddenContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForbiddenContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForbiddenContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodClickedComponent } from './food-clicked.component';

describe('FoodIndividualComponent', () => {
  let component: FoodClickedComponent;
  let fixture: ComponentFixture<FoodClickedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodClickedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodClickedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

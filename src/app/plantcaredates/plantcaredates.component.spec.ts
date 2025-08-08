import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantcaredatesComponent } from './plantcaredates.component';

describe('PlantcaredatesComponent', () => {
  let component: PlantcaredatesComponent;
  let fixture: ComponentFixture<PlantcaredatesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlantcaredatesComponent]
    });
    fixture = TestBed.createComponent(PlantcaredatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

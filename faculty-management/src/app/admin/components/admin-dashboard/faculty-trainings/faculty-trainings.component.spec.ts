import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyTrainingsComponent } from './faculty-trainings.component';

describe('FacultyTrainingsComponent', () => {
  let component: FacultyTrainingsComponent;
  let fixture: ComponentFixture<FacultyTrainingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultyTrainingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacultyTrainingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

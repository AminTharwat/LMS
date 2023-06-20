/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { NewCoursesService } from './New-courses.service';

describe('Service: NewCourses', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewCoursesService]
    });
  });

  it('should ...', inject([NewCoursesService], (service: NewCoursesService) => {
    expect(service).toBeTruthy();
  }));
});

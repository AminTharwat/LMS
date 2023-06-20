import { Injectable } from '@angular/core';
import { NewCourse } from '../models/new';

@Injectable({
  providedIn: 'root'
})
export class NewCoursesService {
  newItems: NewCourse[] = [
    {
      id: 1,
      title: 'sasa'
    }
  ];

  constructor() {}
}

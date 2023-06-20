import { Component, Input, OnInit } from '@angular/core';
import { NewCourse } from 'src/app/components/shared/models/new';
import { NewCoursesService } from 'src/app/components/shared/services/New-courses.service';

@Component({
  selector: 'New-courses',
  templateUrl: './New-courses.component.html',
  styleUrls: ['./New-courses.component.css']
})
export class NewCoursesComponent implements OnInit {
  @Input() NewCourse?: NewCourse;

  newCourse?: NewCourse;


  constructor(public newCoursesService: NewCoursesService) {}

  ngOnInit() {}
}

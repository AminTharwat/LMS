import { Component, OnInit, Input } from '@angular/core';
import { NewCourse } from './../../components/shared/models/new';
import { NewCoursesService } from 'src/app/components/shared/services/New-courses.service';

@Component({
  selector: 'Home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.scss']
})
export class HomeComponent implements OnInit {
  newCourse?: NewCourse;
  @Input() NewCourse?: NewCourse;

  constructor(public newCoursesService: NewCoursesService) {}

  ngOnInit() {}
}

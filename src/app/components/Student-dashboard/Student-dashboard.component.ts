import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-Student-dashboard',
  templateUrl: './Student-dashboard.component.html',
  styleUrls: ['./Student-dashboard.component.scss']
})
export class StudentDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  selectedDate?: NgbDateStruct;

}

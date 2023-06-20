import { Component, OnInit } from '@angular/core';
import { FormsModule }   from '@angular/forms';


@Component({
  selector: 'Signup',
  templateUrl: './Signup.component.html',
  styleUrls: ['./Signup.component.scss']
})

export class SignupComponent implements OnInit {
type:string='Password';
istext:Boolean=false;
eyeIcon:string='fa-eye-splash'
  constructor() { }

  ngOnInit() {
  }

  hidePass(){
this.istext=!this.istext;
this.istext ? this.eyeIcon ="fa-eye" : this.eyeIcon = this.eyeIcon;
this.istext ? this.type="text": this.type="password"
  }

}

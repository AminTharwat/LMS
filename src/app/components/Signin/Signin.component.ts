import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Signin',
  templateUrl: './Signin.component.html',
  styleUrls: ['./Signin.component.scss']
})
export class SigninComponent implements OnInit {
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

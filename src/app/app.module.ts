import { SigninComponent } from './components/Signin/Signin.component';
import { ReviewsComponent } from './Home/Reviews/Reviews.component';
import { WhyUsComponent } from './Home/Why-Us/Why-Us.component';
import { BestCoursesComponent } from './Home/Best-courses/Best-courses.component';
import { NewCoursesComponent } from './Home/New-courses/New-courses.component';
import { HeroComponent } from './Home/Hero/Hero.component';
import { FooterComponent } from './components/Footer/Footer.component';
import { NavbarComponent } from './components/Navbar/Navbar.component';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbAlertModule, NgbCollapseModule, NgbDateStructAdapter, NgbDropdownModule, NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './Home/Home/Home.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { HttpClientModule } from '@angular/common/http';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './components/Signup/Signup.component';
import { StudentDashboardComponent } from './components/Student-dashboard/Student-dashboard.component';
import { MatCardModule } from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { TeacherDashboardComponent } from './components/Teacher-dashboard/Teacher-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HeroComponent,
    HomeComponent,
    NewCoursesComponent,
    BestCoursesComponent,
    WhyUsComponent,
    ReviewsComponent,
    SigninComponent,
    SignupComponent,
    TeacherDashboardComponent,
    StudentDashboardComponent

  ],
  schemas: [NO_ERRORS_SCHEMA],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbPaginationModule,
     NgbAlertModule,
     HttpClientModule,
     AngularSvgIconModule.forRoot(),
     FormsModule,
     FormsModule,
     ReactiveFormsModule,
     NgbPaginationModule,
     NgbAlertModule,
     NgbCollapseModule,
     NgbDropdownModule,
     MatCardModule,
     MatDatepickerModule,
     MatNativeDateModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

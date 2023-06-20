import { SignupComponent } from './components/Signup/Signup.component';
import { SigninComponent } from './components/Signin/Signin.component';
import { HeroComponent } from './Home/Hero/Hero.component';
import { HomeComponent } from './Home/Home/Home.component';
import { NgModule, signal } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/Navbar/Navbar.component';

const routes: Routes = [
{path:'',redirectTo:'home',pathMatch:'full'},
{path:'home',component:HomeComponent},
{path:'nav',component:NavbarComponent},
{path:'hero',component:HeroComponent},
{path:'signin',component:SigninComponent},
{path:'signup',component:SignupComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

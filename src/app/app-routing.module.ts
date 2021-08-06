import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component'
import { HomeComponent } from './home/home.component'
import { AboutComponent } from './about/about.component'
import { LogoutComponent } from './logout/logout.component'
import { SignUpComponent } from './sign-up/sign-up.component'
import { TestingComponent } from './testing/testing.component'
import { HandComponent } from './hand/hand.component'


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'sign-up', component:  SignUpComponent },
  { path: 'About', component: AboutComponent },
  { path: '', component: HomeComponent },
  { path: 'testing', component: TestingComponent },
  { path: 'hand', component: HandComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

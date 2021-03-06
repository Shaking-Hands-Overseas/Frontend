import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component'
import { HomeComponent } from './webpages/home/home.component'
import { AboutComponent } from './webpages/about/about.component'
import { LogoutComponent } from './auth/logout/logout.component'
import { SignUpComponent } from './auth/sign-up/sign-up.component'
import { HandComponent } from './webpages/hand/hand.component'
import { NotFoundComponent } from './not-found/not-found.component';
import { ContactComponent } from './webpages/contact/contact.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'sign-up', component:  SignUpComponent },
  { path: 'About', component: AboutComponent },
  { path: '', component: HomeComponent },
  { path: 'hand', component: HandComponent },
  { path: 'contact', component: ContactComponent},
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

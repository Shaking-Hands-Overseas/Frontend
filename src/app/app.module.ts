import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SocialMediaComponent } from './web-parts/social-media/social-media.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './webpages/home/home.component';
import { AboutComponent } from './webpages/about/about.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { HttpErrorHandler } from './_services/http-error-handler.service';
import { MessageService } from './_services/message.service';
import { HandComponent } from './webpages/hand/hand.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ContactComponent } from './webpages/contact/contact.component';
import { NavbarComponent } from './web-parts/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    SocialMediaComponent,
    LoginComponent,
    HomeComponent,
    AboutComponent,
    LogoutComponent,
    SignUpComponent,
    HandComponent,
    NotFoundComponent,
    ContactComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [

    HttpErrorHandler,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

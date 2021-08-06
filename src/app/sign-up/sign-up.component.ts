import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { FormsModule, FormControl }   from '@angular/forms';

import { SignUpUser } from '../_models/Signupuser';
import { SignUpService } from './signup.service';
@Component({
  selector: 'app-login',
  templateUrl: './sign-up.component.html',
  providers: [SignUpService],
  styleUrls: ['./sign-up.component.css']
})

export class SignUpComponent implements OnInit {
  users: SignUpUser[] = []
  Match: boolean = true
  Empty: boolean = true
  ngOnInit(): void {
  }
  constructor(private signupService: SignUpService) { }

  model = new SignUpUser("", "", "", "")

  submitted = false;
  onSubmit() { this.submitted = true; }

  CreateUser() {
    if (this.model.password == this.model.password2){
    this.Match = true
    this.signupService.addUser(this.model)
      .subscribe(user => this.users.push(user));
    }
    else {
      this.Match = false;
    }
  }
}
import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { FormsModule, FormControl }   from '@angular/forms';

import { LoginUser } from '../_models/Loginuser';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  providers: [LoginService],
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  users: LoginUser[] = []
  ngOnInit(): void {
  }
  constructor(private loginService: LoginService) { }

  model = new LoginUser("", "")

  submitted = false;
  onSubmit() { this.submitted = true; }

  CreateUser() {
    this.loginService.addUser(this.model)
      .subscribe(user => this.users.push(user));
  }
}
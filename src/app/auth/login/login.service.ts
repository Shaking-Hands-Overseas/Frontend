import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { LoginUser } from '../../_models/Loginuser'
import { HttpErrorHandler, HandleError } from '../../_services/http-error-handler.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable()
export class LoginService {
  Url = '';  // URL to web api
  private handleError: HandleError;

  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('LoginService');
  }

  addUser(user: LoginUser): Observable<LoginUser> {
    return this.http.post<LoginUser>(this.Url, user)
  }
}

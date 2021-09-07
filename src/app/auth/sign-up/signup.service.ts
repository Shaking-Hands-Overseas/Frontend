import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { SignUpUser } from '../../_models/Signupuser';
import { HttpErrorHandler, HandleError } from '../../_services/http-error-handler.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable()
export class SignUpService {
  Url = '';  // URL to web api
  private handleError: HandleError;

  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('LoginService');
  }

  //////// Save methods //////////

  /** POST: add a new hero to the database */
  addUser(user: SignUpUser): Observable<SignUpUser> {
    return this.http.post<SignUpUser>(this.Url, user)
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';

import { User } from '../_models/user'

@Injectable({
  providedIn: 'root'
})
export class ServerRequestService {

  constructor(private http: HttpClient) { }

  NewUser(user: User): Observable<User> {
    httpOptions = {headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })};
    return this.http.post<User>("https://lqinkt.deta.dev/register", user, this.httpOptions)

  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Fingers } from '../_models/fingers'
import { Custom } from '../_models/custom'
import { HttpErrorHandler, HandleError } from '../http-error-handler.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable()
export class HandService {
  Url = 'http://127.0.0.1:8000/custom';  // URL to web api
  private handleError: HandleError;

  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('HandService');
  }

  //////// Save methods //////////

  /** POST: add a new hero to the database */
  SendInfo(info: Fingers): Observable<Fingers> {
    return this.http.post<Fingers>(this.Url, info)
  }  
  Custom(info: Custom): Observable<Custom> {
    return this.http.post<Custom>('http://127.0.0.1:8000/servo', info)
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Fingers } from '../../_models/fingers'
import { Custom } from '../../_models/custom'
import { HttpErrorHandler, HandleError } from '../../_services/http-error-handler.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable() // Decorator that marks this class as a dependency
export class HandService {
  Url = 'https://xlbi6e.deta.dev/custom';  // URL to web API
  private handleError: HandleError;

  constructor(
    private http: HttpClient, // Importing the HttpClient needed for an HTTP connection
    httpErrorHandler: HttpErrorHandler) { // Importing the Http Error Handler
    this.handleError = httpErrorHandler.createHandleError('HandService'); //Creates an Object of the class Handle Error
  }

  SendInfo(info: Fingers): Observable<Fingers> { //Creates a blank Post request with the body as an input to the function to the URL specified
    return this.http.post<Fingers>(this.Url, info) 
  }  
  Custom(info: Custom): Observable<Custom> { //Creates a blank Post request with the body as an input to the function to the URL specified
    return this.http.post<Custom>('https://xlbi6e.deta.dev/servo', info)
  }
}


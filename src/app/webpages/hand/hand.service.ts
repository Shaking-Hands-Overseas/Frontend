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

@Injectable()
export class HandService {
  Url = 'https://xlbi6e.deta.dev/custom';  // URL to web api
  private handleError: HandleError;

  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('HandService');
  }

  SendInfo(info: Fingers): Observable<Fingers> {
    return this.http.post<Fingers>(this.Url, info)
  }  
  Custom(info: Custom): Observable<Custom> {
    return this.http.post<Custom>('https://xlbi6e.deta.dev/servo', info)
  }
}

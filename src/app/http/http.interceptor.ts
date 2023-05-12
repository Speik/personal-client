import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';

import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';

import { environment } from 'src/environments/environment';

@Injectable()
export class PrimaryHttpInterceptor implements HttpInterceptor {
  public intercept(
    originalRequest: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const extendedRequest = this.setupRequest(originalRequest);

    return next
      .handle(extendedRequest)
      .pipe(catchError(this.handleError.bind(this)));
  }

  private setupRequest(originalRequest: HttpRequest<any>): HttpRequest<any> {
    const requestUrl = `${environment.baseApiUrl}/${originalRequest.url}`;

    return originalRequest.clone({
      url: requestUrl,
    });
  }

  private handleError(error: any): Observable<any> {
    console.error(error);
    return of(error);
  }
}

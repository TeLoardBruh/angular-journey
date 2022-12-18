import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    req = req.clone({
      setHeaders: {
        'X-RapidAPI-Key': '5ed13d6ab7msh4de70f7be584bbcp19ad83jsn701f34d0a7a9',
        'X-RapidAPI-Host': 'rawg-video-games-database.p.rapidapi.com',
      },
      setParams: {
        key: 'aa4935e8afe64835b293e960930ddcbe',
      },
    });
    return next.handle(req);
  }
}

import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_KEY } from '../../../../constants';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const { url } = request;
    const token = `&key=${API_KEY}`;
    const newRequest = request.clone({ url: url + token });
    console.log(newRequest);

    return next.handle(newRequest);
  }
}

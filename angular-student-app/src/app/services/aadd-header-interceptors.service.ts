import { Injectable } from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable()
export class AaddHeaderInterceptorsService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log(`Add header interceptor - ${req.url}`);

    let jsonReq:HttpRequest<any>=req.clone({
      setHeaders:{
        'Content-type':'application/json'
      }
    });

    
    return next.handle(jsonReq)
  }
  
 
}

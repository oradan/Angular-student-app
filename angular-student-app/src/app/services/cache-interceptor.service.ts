import { Injectable } from '@angular/core';
import { HttpCacheService } from './http-cache.service';
import { HttpEvent , HttpInterceptor, HttpHandler , HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {tap} from 'rxjs/operators'


@Injectable()
export class CacheInterceptorService implements HttpInterceptor {

  constructor(private httpCache: HttpCacheService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    if(req.method !== "GET"){
      console.log(`Invalidating cache ${req.method} ${req.url}`)
      this.httpCache.invalidateCache()
      return next.handle(req)
    }
   const cachedResponse: HttpResponse<any> = this.httpCache.get(req.url)


    if(cachedResponse){
      console.log("Returning a cached respons")
      return of(cachedResponse)
    }

    return next.handle(req)
    .pipe(
      tap(event =>{
        if (event instanceof HttpResponse){
          console.log(`Adding items to cache : ${req.url}`);
          this.httpCache.put(req.url,event)
        }
      })
    )

  }

  
}

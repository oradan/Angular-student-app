import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
//import { InMemoryDataService } from './services/in-memory-data.service';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {HTTP_INTERCEPTORS} from '@angular/common/http'
import { AaddHeaderInterceptorsService} from './services/aadd-header-interceptors.service'
import { LogResponseInterceptorService } from './services/log-response-interceptor.service';
import { CacheInterceptorService } from './services/cache-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    // HttpClientInMemoryWebApiModule.forRoot(
    //   InMemoryDataService,{dataEncapsulation:false}
    // )
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AaddHeaderInterceptorsService,multi:true},
    {provide: HTTP_INTERCEPTORS, useClass: LogResponseInterceptorService,multi:true},
    {provide: HTTP_INTERCEPTORS, useClass: CacheInterceptorService,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

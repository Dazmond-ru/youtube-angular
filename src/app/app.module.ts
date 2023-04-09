import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HeaderComponent } from './core/components/header/header.component';
import { FilteringCriteriaBlockComponent } from './core/components/filtering-criteria-block/filtering-criteria-block.component';

import { LoginComponent } from './auth/pages/login/login.component';

import { NotFoundComponent } from './core/pages/not-found/not-found.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './youtube/interceptor/token/token.interceptor';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FilteringCriteriaBlockComponent, NotFoundComponent, LoginComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }],
  bootstrap: [AppComponent],
})
export class AppModule {}

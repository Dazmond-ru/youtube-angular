import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

import { FormsModule } from '@angular/forms';

import { HeaderComponent } from './core/components/header/header.component';
import { FilterPipe } from './youtube/pipes/filter/filter.pipe';
import { SortPipe } from './youtube/pipes/sort/sort.pipe';
import { FilteringCriteriaBlockComponent } from './core/components/filtering-criteria-block/filtering-criteria-block.component';
import { BottomColorDirective } from './youtube/directives/bottom-color/bottom-color.directive';
import { SearchResultItemComponent } from './youtube/components/search-result-item/search-result-item.component';
import { SearchResultBlockComponent } from './youtube/components/search-result-block/search-result-block.component';
import { MainComponent } from './youtube/pages/main/main.component';
import { DetailedInformationComponent } from './youtube/pages/detailed-information/detailed-information.component';
import { NotFoundComponent } from './core/pages/not-found/not-found.component';

import { LoginComponent } from './auth/pages/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchResultItemComponent,
    SearchResultBlockComponent,
    HeaderComponent,
    BottomColorDirective,
    FilteringCriteriaBlockComponent,
    FilterPipe,
    SortPipe,
    MainComponent,
    DetailedInformationComponent,
    NotFoundComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    MatToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

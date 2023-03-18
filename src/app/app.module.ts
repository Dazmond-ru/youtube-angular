import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './components/header/auth/auth.component';
import { LogoComponent } from './components/header/logo/logo.component';
import { SearchFormComponent } from './components/header/search-form/search-form.component';
import { SettingButtonComponent } from './components/header/setting-button/setting-button.component';
import { SortFilterComponent } from './components/header/sort-filter/sort-filter.component';
import { SearchItemComponent } from './components/search/search-item/search-item.component';
import { SearchItemsComponent } from './components/search/search-items/search-items.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    LogoComponent,
    SearchFormComponent,
    SettingButtonComponent,
    SortFilterComponent,
    SearchItemComponent,
    SearchItemsComponent,
    HeaderComponent,
    SearchComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

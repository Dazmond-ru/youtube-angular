import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './header/auth/auth.component';
import { LogoComponent } from './header/logo/logo.component';
import { SearchFormComponent } from './header/search-form/search-form.component';
import { SettingButtonComponent } from './header/setting-button/setting-button.component';
import { SortFilterComponent } from './header/sort-filter/sort-filter.component';
import { SearchItemComponent } from './search/search-item/search-item.component';
import { SearchItemsComponent } from './search/search-items/search-items.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';

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

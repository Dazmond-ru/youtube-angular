import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-ts-app';

  isShowResults = false;

  onShowResultsChange(value: boolean) {
    this.isShowResults = value;
  }
}

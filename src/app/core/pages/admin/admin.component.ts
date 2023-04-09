import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { dateValidation } from '../../directives/date-validation/date-validation.directive';

const imgRegEx = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';
const videoRegEx = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent {
  form = this.fb.group({
    title: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
    description: ['', Validators.maxLength(255)],
    image: ['', [Validators.required, Validators.pattern(imgRegEx)]],
    video: ['', [Validators.required, Validators.pattern(videoRegEx)]],
    date: ['', [Validators.required, dateValidation()]],
  });

  constructor(private fb: FormBuilder) {}

  onSubmit() {}

  get title() {
    return this.form.get('title');
  }

  get description() {
    return this.form.get('description');
  }

  get image() {
    return this.form.get('image');
  }

  get video() {
    return this.form.get('video');
  }

  get date() {
    return this.form.get('date');
  }
}

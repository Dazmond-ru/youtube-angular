import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';

enum Colors {
  red = '#EB5757',
  yellow = '#F2C94B',
  green = '#27AE61',
  blue = '#3f51b5',
}

enum DaysPeriod {
  week = 7,
  month = 30,
  halfYear = month * 6,
  year = 365,
}

enum OneDay {
  msec = 1000,
  sec = 60,
  min = 60,
  hours = 24,
}

const DAY = OneDay.msec * OneDay.sec * OneDay.min * OneDay.hours;

@Directive({
  selector: '[appBottomColor]',
})
export class BottomColorDirective implements AfterViewInit {
  @Input('appBottomColor') date!: string;

  constructor(private elRef: ElementRef) {}

  color: string = '';

  ngAfterViewInit(): void {
    const videoDate = new Date(this.date);
    const nowDate = new Date();
    const diffTime = nowDate.getTime() - videoDate.getTime();
    const diffDays = Math.floor(diffTime / DAY);

    if (diffDays < DaysPeriod.week) {
      this.color = Colors.blue;
    } else if (diffDays >= DaysPeriod.week && diffDays <= DaysPeriod.month) {
      this.color = Colors.green;
    } else if (diffDays > DaysPeriod.month && diffDays <= DaysPeriod.halfYear) {
      this.color = Colors.yellow;
    } else this.color = Colors.red;

    this.elRef.nativeElement.style.borderBottom = `10px solid ${this.color}`;
  }
}

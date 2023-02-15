import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class MonthStore {
  private readonly subject = new BehaviorSubject<number>(moment().month());

  readonly month$ = this.subject.asObservable();

  private get month() {
    return this.subject.getValue();
  }

  private set month(value) {
    this.subject.next(value);
    localStorage.setItem('month', value.toString());
  }

  constructor() { }

  public loadMonth() {
    this.month = localStorage.getItem('month') ? Number(localStorage.getItem('month')) : moment().month();
  }

  editMonth(month: number) {
    this.month = month;
  }
}

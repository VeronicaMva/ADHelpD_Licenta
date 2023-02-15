import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MonthService {

  constructor() { }

  getMonth() {
    return JSON.parse(localStorage.getItem('month'));
  }

  setMonth(month) {
    localStorage.setItem('month', JSON.stringify(month));
  }
}

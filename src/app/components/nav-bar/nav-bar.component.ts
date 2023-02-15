import { Component, OnDestroy, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MonthStore } from 'src/app/store/month.store';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit, OnDestroy {
  destroy$ = new Subject<void>();
  organize : boolean = false;
  months = [
    {value: 0, text: 'January'},
    {value: 1, text: 'February'},
    {value: 2, text: 'March'},
    { value: 3, text: 'April'},
    { value: 4, text: 'May'},
    {value: 5, text: 'June'},
    {value: 6, text: 'July'},
    {value: 7, text: 'August'},
    {value: 8, text: 'September'},
    {value: 9, text: 'October'},
    {value: 10, text: 'November'},
    {value: 11, text: 'December'},
  ];
  selectedMonth = moment().month();

  constructor(public router: Router, private monthStore: MonthStore) { 
    this.monthStore.month$.pipe(takeUntil(this.destroy$)).subscribe(month => {
      this.selectedMonth = month;
    })
  }

  ngOnInit(): void {
  }

  goToHome(): void{
    this.organize = false;
    this.router.navigateByUrl('');
  }

  goToOrganize(): void{
    this.organize = true;
    this.router.navigateByUrl('organize');
  }

  goToBreak(): void{
    this.organize = false;
    this.router.navigateByUrl('break');
  }

  onChange(month) {
    this.monthStore.editMonth(month);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

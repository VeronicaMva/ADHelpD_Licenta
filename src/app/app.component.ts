import { Component } from '@angular/core';
import { MonthStore } from './store/month.store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ADHelpD';

  constructor(private monthStore: MonthStore) {
    this.monthStore.loadMonth();
  }
}
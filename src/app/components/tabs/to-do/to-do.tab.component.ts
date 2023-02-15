import { Component, OnInit } from '@angular/core';
import { CardType } from 'src/app/models';
import { CardRxjsStore } from 'src/app/store/card.store';
import { MonthStore } from 'src/app/store/month.store';

@Component({
  selector: 'app-to-do-tab',
  templateUrl: './to-do.tab.component.html',
  styleUrls: ['./to-do.tab.component.css']
})
export class ToDoTabComponent implements OnInit {

  todo: CardType = 'to-do';
  selectedMonth;

  weeks = [
    {text: 'Week 1', value: 1},
    {text: 'Week 2', value: 2},
    {text: 'Week 3', value: 3},
    {text: 'Week 4', value: 4},
    {text: 'Week 5', value: 5}
  ]

  constructor(
    private cardStore: CardRxjsStore,
    private monthStore: MonthStore) {
      this.monthStore.month$.subscribe((data) => { 
        this.selectedMonth = data;
      });
    }

  ngOnInit(): void {
    this.cardStore.loadCards();
  }

}

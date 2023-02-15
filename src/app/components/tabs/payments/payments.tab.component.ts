import { Component, OnInit } from '@angular/core';
import { CardType } from 'src/app/models';
import { MonthStore } from 'src/app/store/month.store';
import { CardRxjsStore } from 'src/app/store/card.store';

@Component({
  selector: 'app-payments-tab',
  templateUrl: './payments.tab.component.html',
  styleUrls: ['./payments.tab.component.css']
})
export class PaymentsTabComponent implements OnInit {

  payments: CardType = 'payments';
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
      this.monthStore.month$?.subscribe((data) => { 
        this.selectedMonth = data;
      });
    }

  ngOnInit(): void {
    this.cardStore.loadCards();
  }

}

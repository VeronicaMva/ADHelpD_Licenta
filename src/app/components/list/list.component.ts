import { Component, HostListener, Input, OnDestroy, OnInit } from "@angular/core";
import { combineLatest, Observable, of } from "rxjs";
import { CardModel, CardType } from "src/app/models";
import { CardRxjsStore } from "src/app/store/card.store";
import { CardStore } from "../card/cardstore";
import { ListSchema } from "./listschema";
import { map } from 'rxjs/operators';
import { v4 as uuidv4 } from 'uuid';
import * as moment from "moment";
import { MonthStore } from "src/app/store/month.store";
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"],
})

export class ListComponent implements OnInit, OnDestroy {

  @Input() list: ListSchema;
  @Input() cardStore: CardStore;
  @Input() day: any;
  @Input() week: any;
  @Input() type: CardType;
  disable = false;
  displayAddCard = false;
  newTask: string;
  cards$: Observable<CardModel[]>;
  destroy$ = new Subject<void>();
  selectedMonth;
  todayDate;
  
  constructor(private cardRxjsStore: CardRxjsStore, private monthStore: MonthStore) {
    this.monthStore.month$.pipe(takeUntil(this.destroy$)).subscribe(month => {
      this.selectedMonth = month;
    })
  }

  ngOnInit(): void {
    this.cards$ = combineLatest([this.cardRxjsStore.cards$, this.monthStore.month$]).pipe(
      map(([cards, selectedMonth]) => {
        return cards.filter(f => {
          const date = moment(f.createdAt);
          const day = date.day() === 0 ?  0 : date.day();
          const weekNo = Math.ceil(date.date() / 7);
          const month = date.month();

          return f.type === this.type && day === this.day?.value && weekNo === this.week?.value && month === selectedMonth
        })
    })
    )  
  }

  resetTask() {
    this.displayAddCard = false;
    this.newTask = '';
  }  

  addCard() {
    const todayDate = moment().month(this.selectedMonth);
    const todayWeekNo = Math.ceil(todayDate.date() / 7);
    const weekDiff = todayWeekNo - this.week?.value;
    const dayDiff = todayDate.day() - this.day?.value;

    const card: CardModel = {
      id: uuidv4(),
      description: this.newTask,
      type: this.type,
      color: false,
      createdAt: todayDate.subtract(weekDiff, 'weeks').subtract(dayDiff, 'days')
    }
    this.cardRxjsStore.addCard(card);
    this.resetTask();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}


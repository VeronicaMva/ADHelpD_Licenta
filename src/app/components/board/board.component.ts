import { Component, Input, OnInit } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { takeUntil } from 'rxjs/operators';
import { CardType } from 'src/app/models';
import { MonthService } from 'src/app/services/month.service';
import { MonthStore } from 'src/app/store/month.store';
import { CardStore } from '../card/cardstore';
import { ListSchema } from '../list/listschema';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  @Input() week: any;
  @Input() type: CardType;
  @Input() set month(value){
    
    if(value >= 0){
      var today = new Date();
      var lastDayOfMonth = new Date(today.getFullYear(), value +1, 0);
      var lastWeekDay = lastDayOfMonth.getDay();
      var firstDayOfMonth = new Date(today.getFullYear(), value, 1);
      var firstWeekDay = firstDayOfMonth.getDay();

      if(this.week.value == 1 ){
        this.weekDays = this.weekD;
        this.weekDays =  this.weekDays.filter( f => f.value >= firstWeekDay);
        }
      else if(this.week.value == 5){
        this.weekDays = this.weekD;
        this.weekDays = this.weekDays.filter( f => f.value <= lastWeekDay);
      } else{
        this.weekDays = this.weekD;
      }
    }
    
  }
  cardStore!: CardStore;
  disable = false;
  destroy$ = new Subject<void>();
  weekDays;

  weekD = [
    { text: 'Sunday', value: 0 },
    { text: 'Monday', value: 1 },
    { text: 'Tuesday', value: 2 },
    { text: 'Wednesday', value: 3 },
    { text: 'Thursday', value: 4 },
    { text: 'Friday', value: 5 },
    { text: 'Saturday', value: 6 },
  ]
  
  constructor() {  }

  ngOnInit() {  }
}
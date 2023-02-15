import { Component, Input, OnInit } from '@angular/core';
import { CardModel } from 'src/app/models';
import { CardRxjsStore } from 'src/app/store/card.store';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() card!: CardModel;
  isChecked = false;
  isEditMode = false;

  constructor(private cardRxjsStore: CardRxjsStore) {}

  ngOnInit() {
  }

  dragStart(ev: any) {
    ev.dataTransfer.setData("text", ev.target.id);
  }

  onChange(){
    this.isChecked =! this.isChecked;
  }

  edit() {
    this.cardRxjsStore.editCard(this.card, this.card.color);
    this.isEditMode = false;
  }

  remove() {
    this.cardRxjsStore.removeCard(this.card.id);
  }
  
}

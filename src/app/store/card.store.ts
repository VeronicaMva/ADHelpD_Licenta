import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CardModel } from '../models';
import { CardService } from '../services/card.service';
import { tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class CardRxjsStore {
  private readonly subject = new BehaviorSubject<CardModel[]>([]);

  readonly cards$ = this.subject.asObservable();

  private get cards() {
    return this.subject.getValue();
  }

  private set cards(value) {
    this.subject.next(value);
    this.cardService.setCards(value);
  }

  constructor(private cardService: CardService) { }

  public loadCards() {
    this.cards = this.cardService.getCards()??[];
  }

  addCard(card: CardModel) {
    this.cards = [...this.cards, card];
  }

  editCard(card: CardModel, color: boolean) {
    const cardIndex = this.cards.findIndex(f => f.id === card.id);
    if (cardIndex > -1) {
      this.cards[cardIndex] = card;
      this.cards[cardIndex].color = color;
    }
    this.cards = this.cards;
  }

  removeCard(id: string) {
    this.cards = this.cards.filter(card => card.id !== id);
  }
}

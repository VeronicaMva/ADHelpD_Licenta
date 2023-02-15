import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor() { }

  getCards() {
    return JSON.parse(localStorage.getItem('cards'));
  }

  setCards(cards) {
    localStorage.setItem('cards', JSON.stringify(cards));
  }
}

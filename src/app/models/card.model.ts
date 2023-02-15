export type CardType = 'to-do' | 'meetings' | 'payments';

export interface CardModel {
  id: string;
  description: string;
  type: CardType;
  color: boolean;
  createdAt: any;
}

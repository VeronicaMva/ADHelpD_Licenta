export class CardSchema {
  id!: string;
  description!: string;
  type: 'to-do' | 'meetings' | 'payments';
  color : boolean;
  createdAt: any;
}
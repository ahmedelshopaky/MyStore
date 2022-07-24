export class Product {
  id: number;
  name: string;
  price: number;
  description!: string;
  url!: string;
  amount: number;

  constructor() {
    this.id = 0;
    this.name = "";
    this.price = 0;
    this.description = "";
    this.url = "";
    this.amount = 0;
  }
}

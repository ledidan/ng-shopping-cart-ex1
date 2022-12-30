export class Product {
  id: string;
  name: string;
  description: string;
  thumbnail: string;
  price: number;
  quantity: number;
  constructor(
    id: string,
    name: string,
    description: string,
    thumbnail: string,
    price: number,
    quantity: number
  ) {
    (this.id = id),
      (this.name = name),
      (this.description = description),
      (this.thumbnail = thumbnail),
      (this.price = price),
      (this.quantity = quantity);
  }
}

import { Component, Input } from '@angular/core';
import { Product } from './product.model';
import { PromoCode } from './promoCode.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'Angular Shopping';
  products: Product[] = [
    {
      id: '1',
      name: 'Iphone 12 Pro Max',
      description: 'Description for Iphone 12 pro max',
      thumbnail:
        'https://images.unsplash.com/photo-1607936854279-55e8a4c64888?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80',
      price: 199,
      quantity: 5,
    },
    {
      id: '2',
      name: 'Iphone 7 Plus',
      description: 'Description for Iphone 7 Plus',
      thumbnail:
        'https://images.unsplash.com/photo-1603816245457-fe9c80b740ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aXBob25lJTIwN3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60',
      price: 99,
      quantity: 2,
    },
  ];
  numberItems: number = 0;
  subTotal: number = 0;
  discountPercent: number = 0;
  discount: number = 0;
  taxPercent: number = 10;
  tax: number = 0;
  total: number = 0;

  promoCodes: PromoCode[] = [
    {
      code: 'DADWD',
      discountPercent: 10,
    },
    {
      code: 'ADWEAA',
      discountPercent: 20,
    },
  ];
  ngDoCheck() {
    this.numberItems = 0;
    this.subTotal = 0;

    for (const product of this.products) {
      this.numberItems += product.quantity;
      this.subTotal += product.price * product.quantity;
    }

    this.discount = (this.subTotal * this.discountPercent) / 100;
    this.tax = ((this.subTotal - this.discount) * this.taxPercent) / 100;
    this.total = Number((this.subTotal - this.discount).toFixed(0));
  }
  handleRemoveProduct(productId: number) {
    // Delete product

    const index = this.products.findIndex((item: any) => item.id === productId);
    if (index !== -1) {
      this.products.splice(index, 1);
    }
    // Tinh lai tong so luong san pham va tong tien
  }
  handleUpdateQuantity(p: { id: string; quantity: number }) {
    const product = this.products.find((item) => item.id === p.id);
    if (product) {
      product.quantity = p.quantity || 0;
    }
  }

  handleApplyCodePromo(code: string) {
    const promoCode = this.promoCodes.find(
      (promoCode) => promoCode.code === code
    );
    this.discountPercent = promoCode ? promoCode.discountPercent : 0;
    this.discount = (this.subTotal * this.discountPercent) / 100;

    if (this.discount > 0) {
      alert('The promotional code was applied');
    } else {
      alert(
        'Sorry, the promotional code you entered is not valid! Try code "DADWD" (discount 10% to all cart items) or "ADWE" (discount 20% to all cart items'
      );
    }
  }
}

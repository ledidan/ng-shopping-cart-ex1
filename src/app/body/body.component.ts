import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
})
export class BodyComponent implements OnInit {
  @Input() products: any;
  @Output() onRemoveProduct = new EventEmitter();
  @Output() onUpdateQuantity = new EventEmitter();
  constructor() {}
  ngOnInit(): void {}

  onRemove(productId: number) {
    this.onRemoveProduct.emit(productId);
  }

  updateQuantity(id: number, inputElement: HTMLInputElement) {
    const value = inputElement.value;
    const intValue = parseInt(value);
    if (intValue < 1) {
      inputElement.value = -intValue + ' ';
    } else if (value.length > 2) {
      inputElement.value = value.slice(0, 2);
    }
    this.onUpdateQuantity.emit({
      id,
      quantity: parseInt(inputElement.value) || '',
    });
  }
}

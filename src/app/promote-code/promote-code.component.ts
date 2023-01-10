import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-promote-code',
  templateUrl: './promote-code.component.html',
})
export class PromoteCodeComponent implements OnInit {
  public promoCode: string = '';

  @Output() onApplyPromoCode = new EventEmitter();
  constructor() {}
  ngOnInit(): void {}

  applyPromoCode() {
    const code = this.promoCode;

    if (code && code.trim() !== ' ') {
      this.onApplyPromoCode.emit(code);
    }
  }
}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  @Input() subTotal: number = 0;
  @Input() tax: number = 0;
  @Input() total: number = 0;
  @Input() discount: number = 0;
  promoCode: string = '';
  @Output() onApplyPromoCode = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  applyPromoCode() {
    const code = this.promoCode;
    if (code && code.trim() !== '') {
      this.onApplyPromoCode.emit(code);
    }
  }
}

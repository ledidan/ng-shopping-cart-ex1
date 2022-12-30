import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  title = 'Header Shopping Cart';
  @Input() numberItem: number = 1;
  constructor() {}

  ngOnInit(): void {}
}

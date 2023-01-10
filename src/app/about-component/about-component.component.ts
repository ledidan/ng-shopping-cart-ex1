import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-component',
  templateUrl: './about-component.component.html',
  styleUrls: ['./about-component.component.css'],
})
export class AboutComponentComponent implements OnInit {
  public loginName = 'user';
  constructor() {}

  ngOnInit(): void {}
}

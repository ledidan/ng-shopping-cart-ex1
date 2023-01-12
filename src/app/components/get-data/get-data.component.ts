import { HttpServerService } from './../../Services/http-server.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-data',
  templateUrl: './get-data.component.html',
  styleUrls: ['./get-data.component.css'],
})
export class GetDataComponent implements OnInit {
  constructor(private httpServerService: HttpServerService) {}
  public title: string = 'Tracker';
  ngOnInit(): void {
    this.httpServerService
      .getComments()
      .subscribe((data) => console.log('getComments', data));
  }
  toggleAddTask() {
    console.log('toggle');
  }
}

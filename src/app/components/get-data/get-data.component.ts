import { UiService } from 'src/app/Services/ui.service';
import { HttpServerService } from './../../Services/http-server.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-get-data',
  templateUrl: './get-data.component.html',
  styleUrls: ['./get-data.component.css'],
})
export class GetDataComponent implements OnInit {
  public title: string = 'Tracker';
  showAddTask: boolean;
  subscription: Subscription;

  constructor(
    private httpServerService: HttpServerService,
    private uiService: UiService
  ) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddTask = value));
  }

  ngOnInit(): void {
    this.httpServerService
      .getComments()
      .subscribe((data) => console.log('getComments', data));
  }
  toggleTask() {
    this.uiService.toggleAddTask();
  }
}

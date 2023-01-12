import { HttpServerService } from './../Services/http-server.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-data',
  templateUrl: './post-data.component.html',
  styleUrls: ['./post-data.component.css'],
})
export class PostDataComponent implements OnInit {
  constructor(private httpServerService: HttpServerService) {}

  public ngOnInit(): void {
    const payload = { body: 'some comment 321321', postId: 4 };
    this.httpServerService
      .getPostComments(payload)
      .subscribe((data) => console.log('getPostComments', data));
  }
}

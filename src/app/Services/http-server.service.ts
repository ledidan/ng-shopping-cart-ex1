import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HttpServerService {
  private REST_API_SERVER: string = 'http://localhost:3000';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      // Authorization : 'my-auth-token
    }),
  };
  constructor(private httpClient: HttpClient) {}
}

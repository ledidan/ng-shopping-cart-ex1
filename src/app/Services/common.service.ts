import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor() {}

  public submitData(data: any): void {
    console.log('Requesting data... ', data);
  }
}

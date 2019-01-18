import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderTotalService {

  constructor() { }

  totalCalc(): Observable<orders[]> {
    console.log('hello!!', arr)

    if (orders.length > 0) {
      return arr.reduce((acc, o) => {
        console.log('o: ', o, acc);
        // acc += o.price;
        return acc;
      }, 0)
    }
    return 0;
  }
}

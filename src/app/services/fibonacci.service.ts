import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FibonacciService {

  constructor() { }

  public fibonacci = (number: number ): number => {
    if (number === 0 || number === 1) {
        return number;
    } else {
        return (this.fibonacci(number - 1) + this.fibonacci(number - 2));
    }
  }
}

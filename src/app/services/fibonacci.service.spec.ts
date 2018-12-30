import { TestBed, inject } from '@angular/core/testing';

import { FibonacciService } from './fibonacci.service';

describe('FibonacciService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FibonacciService]
    });
  });

  it('should be created', inject([FibonacciService], (service: FibonacciService) => {
    expect(service).toBeTruthy();
  }));
});

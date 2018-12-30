import { Component } from '@angular/core';
import { WasmService } from './services/wasm.service';
import { FibonacciService } from './services/fibonacci.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  number;
  jsResult: string;
  wasmResult: string;

  constructor(
      private wasmService: WasmService,
      private fibonacciService: FibonacciService
    ) {

  }

  testJS = () => {
    if (this.number > 0 ) {
      const start = performance.now();
      this.jsResult = ' ' + this.fibonacciService.fibonacci(this.number) + ' - time: ' + (performance.now() - start) + ' ms';
    }
  }

  testWebAssembly = () => {
    if (this.number > 0 ) {
      const start = performance.now();
      this.wasmService.fibonacci(this.number).subscribe(
        res => this.wasmResult =  res + ' - time: ' + (performance.now() - start) + ' ms'
      );
    }
  }

}

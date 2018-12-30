import { Component } from '@angular/core';
import { WasmService } from './services/wasm.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private wasmService: WasmService) {
    this.test();
  }

  test = () => {
    this.wasmService.fibonacci(8).subscribe(
      res => console.log(res)
    );
  }

}

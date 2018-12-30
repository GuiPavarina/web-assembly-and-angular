import { Injectable } from '@angular/core';
import * as Module from '../../../wasm/fibonacci.js';
import '!!file-loader?name=wasm/fibonacci.wasm!../../../wasm/fibonacci.wasm';
import { BehaviorSubject, Observable, from } from 'rxjs';
import { filter, mergeMap, take} from 'rxjs/operators';

declare var WebAssembly;

@Injectable({
  providedIn: 'root'
})
export class WasmService {

  module: any;

  wasmReady = new BehaviorSubject<boolean>(false);

  constructor() {
    this.instantiateWasm('wasm/fibonacci.wasm');
   }

  private async instantiateWasm(url: string) {
    const wasmFile = await fetch(url);
    console.log(wasmFile);
    // convert it into a binary array
    const buffer = await wasmFile.arrayBuffer();
    const binary = new Uint8Array(buffer);

    // create module arguments
    // including the wasm-file
    const moduleArgs = {
      wasmBinary: binary,
      onRuntimeInitialized: () => {
        this.wasmReady.next(true);
      }
    };
    console.log(moduleArgs);
    // instantiate the module
    this.module = Module(moduleArgs);
    }

    // NEED SOME IMPROVEMENT ;)
    public fibonacci(input: number): Observable<number> {
      return this.wasmReady.pipe(filter(value => value === true)).pipe(
        mergeMap(() => {
          return from(
            new Promise<number>((resolve, reject) => {
              setTimeout(() => {
                const result = this.module._fibonacci(input);
                resolve(result);
              });
            })
          );
        }),
        take(1)
      );
    }

}

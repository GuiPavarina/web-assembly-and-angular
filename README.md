# Webassembly Angular

Thanks to this [awesome guide](https://malcoded.com/posts/web-assembly-angular) about the Angular and WebAssembly integration

## Objective
The goal is to test the integration between webAssembly and Angular 6

## Adding Web Assembly @Types 
npm i --dev --save @types/webassembly-js-api 

## WebPack Config 

*IT WONT WORK WITHOUT THIS STEP*  
*Need to find a good solution for that*

the following line should be removed from the node_modules/webpack/lib/WebpackOptionsDefaulter.js

```js
//from options => this.set("module.defaultRules", "make", options => [
{
  test: /\.wasm$/i,
  type: "webassembly/experimental"
}
```

## Step by Step to WebAssembly Compiler

https://webassembly.org/getting-started/developers-guide/

## Compiling the fibonacci.c

```bash
emcc fibonacci.c -Os -s WASM=1 -s MODULARIZE=1 -o fibonacci.js
```

-Os Reduce code size
-s MODULARIZE=1  wrap that code into a module



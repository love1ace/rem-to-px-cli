#!/usr/bin/env node

const [remValue, baseSize = 16] = process.argv.slice(2).map(Number);

if (!remValue || isNaN(baseSize)) {
  console.log("Usage: rem2px-cli <remValue> [baseSize]");
  console.log("Example: rem2px-cli 2 16");
  process.exit(1);
}

const pxValue = remValue * baseSize;
console.log(`${remValue}rem = ${pxValue}px (Base: ${baseSize}px)`);
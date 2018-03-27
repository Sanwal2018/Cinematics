// renderIf(predicate)(element).

// renderif.js
"use strict";
const isFunction = input => typeof input === "function";
export default predicate => elemOrThunk =>
  predicate ? (isFunction(elemOrThunk) ? elemOrThunk() : elemOrThunk) : null;

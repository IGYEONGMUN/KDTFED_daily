"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 선언형방식 프로그래밍
const range_1 = require("./range");
const fold_1 = require("./fold");
let numbers = (0, range_1.range)(1, 101);
let result = (0, fold_1.fold)(numbers, (result, value) => result + value, 0);
console.log(result);

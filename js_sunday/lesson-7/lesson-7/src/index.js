import { yo, inc, Counter } from './test';
//области видимости-
//1.глобальная ОВ
//2.локальная ОВ
//2.1 блочная ОВ

{
  let testLet = 'let'
  const testConst = 'const'
  var testVar = 'var'
}
// console.log(testLet);
// console.log(testConst);
console.log(testVar); 

// let array=[1,2,3]
// var i
// for (let i = 0; i < array.length; i++) {
//   const ifunction=() => console.log(i);
//   setTimeout(ifunction)
// }
//2.2 функциональная ОВ
// let forMyFunc = 'forMyFunc'

// function myFunc(name){
//   let testLet = 'let'
//   const testConst = 'const'
//   var testVar = 'var'
//   console.log(name);
//   console.log(testLet);
//   console.log(forMyFunc);
// }

// console.log(testVar);
// console.dir(myFunc);

function makeCounter() {
  let counter=0
  function counterFn() {
    return ++counter
  }
  return counterFn
}
let counterFn = makeCounter()
console.dir(counterFn)
console.dir(counterFn())//1
console.dir(counterFn())//2
//2.3 модульная ОВ
// console.log(yo);
// console.dir(inc);
// console.dir(inc());

const counter = new Counter()
console.dir(typeof counter);// object
console.dir(counter.value());

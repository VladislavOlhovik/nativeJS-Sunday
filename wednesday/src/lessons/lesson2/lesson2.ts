console.log('lesson 2');

// Lexical environment
// http://jsflow.org/docs/lex-env/

//// Closure
// https://learn.javascript.ru/closure
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Closures
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%B7%D0%B0%D0%BC%D1%8B%D0%BA%D0%B0%D0%BD%D0%B8%D1%8F-%D0%B2-javascript-%D1%80%D0%B0%D0%B7-%D0%B8-%D0%BD%D0%B0%D0%B2%D1%81%D0%B5%D0%B3%D0%B4%D0%B0-c211805b6898
// https://www.youtube.com/watch?v=pahO5XjnfLA

//// Сurrying
// https://learn.javascript.ru/currying-partials
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%BA%D0%B0%D1%80%D1%80%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B2-javascript-5ec4a1d88827

// Pattern Module
// https://habr.com/ru/company/ruvds/blog/419997/

// Recursion
// https://learn.javascript.ru/recursion
// https://www.youtube.com/watch?v=Kuq6oIN3PH0


// Task 01
// Реализовать функцию sum которая суммирует 2 числа следующим образом sum(3)(6) === 9
// function sum(n:number){
//     return function(b:number){
//         return n+b
//     }
// }
// let sum3 = sum(3)
// console.log(sum3(6));



// Task 02
// Реализовать функцию makeCounter которая работает следующим образом:
// function makeCounter () {
//     let count = 0
//     return ()=>{
//         return console.log(++count)
//     }
    
// }
// const counter = makeCounter();
// counter(); // 1
// counter(); // 2
// const counter2 = makeCounter();
// counter2(); // 1
// counter(); // 3
// let obj:any = {
//     b:0,
//     a:(function(){
//         return ++this.b
//     })()
// }
// debugger
// console.log(obj.a);
// console.log(obj.a);
// console.log(obj.a);

// if(obj.a === 1 && obj.a === 2 && obj.a === 3){
//     console.log('Work');    
// }

// Task 03
// Переписать функцию из Task 02 так, что бы она принимала число в качестве аргумента и это число было стартовым значением счетчика
// и возвращала следующий объект методов:
// increase: +1
// decrease: -1
// reset: установить счетчик в 0;
// set: установить счетчик в заданное значение;
// function makeCounter (n:number) {
//     let count = n
//     return {
//         increase: ()=>++count,
//         decrease: ()=>--count,
//         reset: ()=>{
//             count=0
//             return count
//         },
//         set: (num:number)=>{
//             count = num
//             return count
//         },
//     }        
// }
// let counter = makeCounter(3)
// console.log(counter.increase());
// console.log(counter.decrease());
// console.log(counter.reset());
// console.log(counter.set(50));
// console.log(counter.increase());
// function sumTo(n:number):number{
//     if(n===1)return n;
//     return n+sumTo(n-1)
// }
// function sumTo(n:number,acc:number = 0):number{
//     if(n===1)return n+acc;
//     return sumTo(n-1,acc+n)
// }
// console.log(sumTo(100));

// Task 04*
// Реализовать функцию superSum которая принимает число в качестве аргумента, которое указывает на количество слагаемых
// и что бы корректно работали следующие вызовы:
// 1) superSum(0) //0
// 2) superSum(3)(2)(5)(3) //10
// 3) superSum(3)(2)(5,3) //10
// 4) superSum(3)(2,5,3) //10
// 5) superSum(3)(2,5)(3) //10
// 6) superSum(3)(2,5)(3,9) //10
// function superSum(num:number){
//     if(num===0)return num;
//     return 

// }
// function test(...args:number[]){
//     console.log(args);
// }
// function test1(a:number,b:number,c:number,d:number){
//     console.log(arguments);
    
// }
// test1(1,2,3,4)
// function superSum(num:number){
//     if(num===0) return 0;
//     if(num===1) return (n:number)=>n
//     let _arguments:number[]=[]
//     function helper (...args:number[]){
//         _arguments=[..._arguments,...args]
//         if(_arguments.length>=num){
//             _arguments.length=num
//             return _arguments.reduce((acc,number)=>acc+number)
//         }else{
//             return helper
//         }
//     }
//     return helper
// }
// console.log(superSum(0))
// //@ts-ignore
// console.log(superSum(3)(2)(5)(3))
// //@ts-ignore
// console.log(superSum(3)(2)(5,3))
// //@ts-ignore
// console.log(superSum(3)(2,5,3))
// //@ts-ignore
// console.log(superSum(3)(2,5)(3))
// //@ts-ignore
// console.log(superSum(3)(2,5)(3,9))
// P.S. типизируйте только аргументы, а при вызове функции используйте @ts-ignore

// Task 05
// решить все задачи по рекурсии которые даны в конце статьи https://learn.javascript.ru/recursion
//1.a цикл
// function sumTo(n:number) {
//     if(n===1)return n
//     let sum = 0
//     for (let i = 0; i <= n; i++) {
//         sum+=i        
//     }
//     return sum
// }
// function sumTo (n:number):number{
//     if(n===1)return n
//     return n + sumTo(n-1)
// }

// // alert( sumTo(100) ); 
// function factorial (n:number):number{
//     if(n===1)return n
//     return n*factorial(n-1)
// }
// // alert(factorial(5))
// function fib(n:number):number{
//     if(n<=1)return n
//     return fib(n-1)+fib(n-2)
// }
// console.log(fib(6));
// let list = {
//     value: 1,
//     next: {
//       value: 2,
//       next: {
//         value: 3,
//         next: {
//           value: 4,
//           next: null
//         }
//       }
//     }
//   };
  
//   function printReverseList(list:any) {
//   debugger
//     if (list.next) {
//       printReverseList(list.next);
//     }
  
//     alert(list.value);
//   }
  
//   printReverseList(list);


// just a plug
export default () => {};
console.log('Lesson 8');

// Итератор
// https://learn.javascript.ru/iterable
// https://medium.com/@stasonmars/%D1%81%D0%B0%D0%BC%D0%BE%D0%B5-%D0%BF%D0%BE%D0%BD%D1%8F%D1%82%D0%BD%D0%BE%D0%B5-%D1%80%D1%83%D0%BA%D0%BE%D0%B2%D0%BE%D0%B4%D1%81%D1%82%D0%B2%D0%BE-%D0%BF%D0%BE-%D0%B8%D1%82%D0%B5%D1%80%D0%B0%D1%82%D0%BE%D1%80%D0%B0%D0%BC-%D0%B2-es6-javascript-%D1%81-%D0%BF%D1%80%D0%B8%D0%BC%D0%B5%D1%80%D0%B0%D0%BC%D0%B8-e1c01206af23


// Генераторы
// https://learn.javascript.ru/generators
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Iterators_and_Generators
// https://habr.com/ru/company/ruvds/blog/417481/
// https://frontender.info/es6-in-depth-generators/


// https://www.youtube.com/watch?v=7wtbNNiOh30
// https://www.youtube.com/watch?v=ejdhriCfF8s

// Saga
// https://www.youtube.com/watch?v=DG9rXV1kI0o&t=228s
// https://github.com/redux-saga/redux-saga/blob/master/README_ru.md
// https://ru.redux-saga.js.org/soderzhanie/introduction/beginnertutorial

// Task 01
// Реализуйте итератор на Number, что бы работала такая конструкция [...3] // [3, 2, 1, 0];

//iterator

//@ts-ignore
// Number.prototype[Symbol.iterator] = function (){
//     let inner = this
//     return {
//         next(){
//             if(inner >= 0){
//                 return {
//                     done: false,
//                     //@ts-ignore
//                     value: inner--
//                 }
//             } else {
//                 return {
//                     done: true
//                 }
//             }
//         }
//     }
// }
// console.log(new Number(8));

// //@ts-ignore
// let l = [...8]
// console.log(l);
// console.log(new String('str'));


//Generator

// function* f(){
//     yield 1
//     yield 2
//     yield 3
//     yield 4
// } 
// let gen = f()
// console.log(g.next());
// console.log(g.next());
// console.log(g.next());
// console.log(g.next());
// console.log(g.next());
// console.log(g.next());


// function* b(){
//     let param = yield 10
//     yield param
// }
// let g = b()
// console.log(g.next());
// console.log(g.next('hi'));
// console.log(g.next());

// function* f(){
//         yield 1
//         yield 2
//         yield 3
//         yield 4
//     } 

// function* l () {
//     //@ts-ignore
//     yield* f()
// }
// let gener = l()
// console.log(gener.next());
// console.log(gener.next());
// console.log(gener.next());
// console.log(gener.next());
// console.log(gener.next());  

// Task 02
// Наишите функцию-генератор, которая генерирует числа в диапазоне от start до end.

function* range (start: number, end: number){
    let current = start
    while(current<end){
        yield current++
    }
}
let ren = range(0,8)
console.log(ren.next());
console.log(ren.next());
console.log(ren.next());
console.log(ren.next());
console.log(ren.next());
console.log(ren.next());
console.log(ren.next());
console.log(ren.next());
console.log(ren.next());
console.log(ren.next());

// Task 03
// Создать массив из чисел от 1 до 1000.
// Реализовать функцию-генератор для формирования всех пар из этого массива.
// Результат [1, 1], [1, 2], ..., [2, 1], [2, 2], ..., [1000, 1000]

// let arr = []
// for (let i = 0; i < 10; i++) {
//     arr.push(i)    
// }

// function* getLongSequences (arr:number[]){
//     let first = 0
//     let second = 0
//     let end = arr.length - 1
//     while(first <= end && second <= end){
//         yield [arr[first], arr[second]]
//         second++
//         if(first === end && second > end) return
//         if(second > end) {
//             first++
//             second = 0
//         }
//     }
// }

// let gr = getLongSequences(arr)
// let s = 0 
// while(s<100){
//     console.log(gr.next().value);
//     s++
// }

// Task 04
// Реализуйте функцию генерации чисел Фибоначчи до бесконечности

// function* fib(){
//     let first = 0
//     yield first
//     let second = 1
//     yield second
//     while(true){
//         let temp = first + second
//         first = second
//         second = temp
//         yield temp
//     }
// }
// let fbn = fib()
// let i = 0
// while(i<50){
//     console.log(fbn.next());
//     i++
// }



// Task 05
// Реализуйте функцию-генератор, которая будет генерировать последовательность
// символов от 0 до 9, затем от a до z, затем от A до Z. Воспользуйтесь функцией генератором
// generateSequence, реализованой выше, String.fromCharCode(code), и диапазоном чисел от 48 до 57,
// от 65 до 90 и от 97 до 122

function* sequense(){
    //@ts-ignore
    yield* range(48, 57)
    //@ts-ignore
    yield* range(65, 90)
    //@ts-ignore
    yield* range(97, 122)
}
let sqn = sequense()
let i = 0
while(i < 100){
    console.log(String.fromCharCode(sqn.next().value));
    i++
}

// Task 06
// Создайте-функцию генератор multipleByTwo, которая принимает массив чисел,
// умножает каждое число на 2 и возвращает их по одному
// Создайте-функцию генератор minusOne, которая принимает массив чисел,
// отнимает 1 и возвращает их по одному
// Создайте-функцию генератор isMultipleOfThree, которая принимает массив чисел,
// и возвращает только те, которые делятся на 3 без остатка по одному
// Объявите массив от 0 до 9
// Вызовите первую функцию и передайте ей массив, результат этой функции передайте второй
// а затем результат второй передайтетретей.
// Примените спред оператор к резульату третей функции и создайте массив тех чисел,
// которые останутся


// just a plug
export default () => {
};
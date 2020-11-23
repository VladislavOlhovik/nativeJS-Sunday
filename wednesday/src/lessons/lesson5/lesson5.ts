import './lessen_5'
console.log('Lesson 5');

// Keyword - this
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/this
// https://learn.javascript.ru/object-methods
// https://habr.com/ru/company/ruvds/blog/419371/
// https://www.youtube.com/watch?v=aQkgUUmUJy4&list=PLqKQF2ojwm3l4oPjsB9chrJmlhZ-zOzWT

// А тут заходим и ставим лайк!!!
// https://www.youtube.com/watch?v=T1vJ8OdJq0o

// https://www.youtube.com/watch?v=xY-mwUzDjsk

// Keyword - new. Function-constructor
// https://learn.javascript.ru/constructor-new
// https://metanit.com/web/javascript/4.5.php
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/new

// Call, Apply, Bind
// https://learn.javascript.ru/call-apply-decorators
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%B4%D1%80%D0%BE%D0%B1%D0%BD%D0%BE-%D0%BE-%D0%BC%D0%B5%D1%82%D0%BE%D0%B4%D0%B0%D1%85-apply-call-%D0%B8-bind-%D0%BD%D0%B5%D0%BE%D0%B1%D1%85%D0%BE%D0%B4%D0%B8%D0%BC%D1%8B%D1%85-%D0%BA%D0%B0%D0%B6%D0%B4%D0%BE%D0%BC%D1%83-javascript-%D1%80%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%87%D0%B8%D0%BA%D1%83-ddd5f9b06290
// let obj = {
//     name:'evgen',
//     k(){
//         console.log('this in obj method', this)
//         setTimeout(()=>console.log('this is setTimeout in obj method', this),5)
//         setTimeout(function(){
//             console.log('this is setTimeout2 in obj method', this)
//         },5)
//         console.log(obj===this)
//     }
// }
// let obj = {
//     name:'evgen',
//     k(){
//         console.log('this in obj method', this)
//         setTimeout(()=>console.log('this is setTimeout in obj method', this),5)
//         const _this = this
//         setTimeout(function(){
//             console.log('this is setTimeout2 in obj method', _this)
//         },5,_this)
//         console.log(obj===this)
//     }
// }
// let obj = {
//     name: 'evgen',
//     s: () => {
//         console.log('this in obj method', this)
//         setTimeout(() => console.log('this is setTimeout in obj method', this), 5)
//         const _this = this
//         setTimeout(function () {
//             console.log('this is setTimeout2 in obj method', _this)
//         }, 5, _this)
//         console.log(obj === this)
//     },
//     k:function() {
//         console.log('this in obj method', this)
//         setTimeout(() => console.log('this is setTimeout in obj method', this), 5)
//         setTimeout(function () {
//             console.log('this is setTimeout2 in obj method', this)
//         }, 5)
//         console.log(obj === this)
//     }
// }
// const test = obj.s;
// const test2 = obj.k;

// function f(){
//     console.log('this is function', this)
// }
// obj.r = f
// const s = () => console.log('this is function', this)
// obj.l = s

// let obj = {
//     name: 'evgen',
//     s: () => {
//         console.log('this in obj method', this)
//         setTimeout(() => console.log('this is setTimeout in obj method', this), 5)
//         const _this = this
//         setTimeout(function () {
//             console.log('this is setTimeout2 in obj method', _this)
//         }, 5, _this)
//         console.log(obj === this)
//     },
//     k: function () {
//         console.log('this in obj method', this)
//         function test() {
//             console.log('this in test', this)
//         }
//         test()
//     }
// }

// let obj = {
//     name: 'evgen',
//     k: function () {
//         console.log('this in obj method', this)
//         const _this = this
//         function test() {
//             console.log('this in test', _this)
//         }
//         test()
//     }
// }
// let obj = {
//     name: 'evgen',
//     s() {
//         console.log('this in obj method', this)
//         function test1() {
//             console.log('this in test', this)
//         }
//         test1()
//         const test = () => {
//             console.log('this in test', this)
//         }
//         test()
//     }
// }



// Task 01
// Дан объект someObj, реализуйте функцию greeting и присвойте ее ключу объекта с аналогичным именем.
// Функция должна вернуть строку `My name is ${name}. I am ${age}`, где name и age берутся из свойств объекта

type someObjType = {
    name: string;
    age: number;
    greeting?:Function
}

let someObj: someObjType = {
    name: 'Eugene',
    age: 32
}
function greeting () {
    //@ts-ignore
    return console.log(`My name is ${this.name}. I am ${this.age}`);
}
someObj.greeting = greeting
// someObj.greeting()

// Task 02
// реализовать счетчик counter в виде объекта со следующими методами:
// get current count; - выводит текущее значение счетчика
// increment; - увеличивает значение счетчика на 1
// decrement; - уменьшает значение счетчика на 1
// set current count; - принимает и присваивает значение счетчику
// rest current count - устанавливает значение счетчика равным 0
// все методы должны ссылаться на сам объект
type Counter = {
    count:number
    get:()=>void
    increment:()=>Counter
    decrement:()=>Counter
    setCurrentCount:(n:number)=>Counter
    restCurrentCount:()=>Counter
}
let counter: Counter = {
    count:0,
    get(){console.log(this.count)},
    increment(){
        this.count+=1
        return this
    },
    decrement(){
        this.count-=1
        return this
    },
    setCurrentCount(n){
        this.count=n
        return this
    },
    restCurrentCount(){
        this.count = 0
        return this
    },
}
counter.increment()
counter.increment()
counter.increment()
counter.get()
counter.decrement()
counter.get()
counter.restCurrentCount()
counter.get()
counter.setCurrentCount(10)
counter.get()

// Task 03
// переделайте код из Task 02, что бы сработал следующий код:
// counter.setCurrentCount(10).increment().increment().increment().decrement().getCurrentCount() // 12

// counter.setCurrentCount(10).increment().increment().increment().decrement().get()

// Task 04
// Написать функцию конструктор myFirstConstructorFunc которая принимает 2 параметра name и age и возвращает объект
// у которого будут эти свойства и метод greeting из Task 01

// in lesson_5.js

// Task 05 есть 2 объекта One и Two. С помощью bind и метода sayHello заставьте поздороваться объект One

let One = { name: 'One' };
// let Two = { name: 'Two', sayHello: function () { console.log(`Hello, my name is ${this.name}`) } };

// Two.sayHello.bind(One)()
// let fn = Two.sayHello.bind(One)
// fn()
let Two = { name: 'Two', sayHello: function ( arg1: any, arg2: any ) { console.log(`Hello, my name is ${this.name}, args ${arg1} and ${arg2}`) } };
// Two.sayHello.bind(One,10,13)()
// Two.sayHello.call(One,10,13)
// Two.sayHello.apply(One,[10,13])




// Task 06
// создайте объект helperObj у которого есть следующие методы:
// changeName - меняет значение у свойства name объекта на полученное значение
// setAge - устанавливает полученное значение в свойство age объекта
// greeting - используется функция sayHello из Task 05
// можно использовать @ts-ignore
type helperObjtype = {
    name:string
    age:number
    changeName:Function
    setAge:Function
    greeting:Function
}
let helperObj = {
    name:'name',
    age:22,
    changeName:function(name:string){
        this.name = name
    },
    setAge:function(age:number){
        this.age = age
    },
    greeting:function(){
        Two.sayHello.call(this,20,10)
    }
}
helperObj.changeName('vlad')
helperObj.setAge(26)
helperObj.greeting()

// Bind
// 1) Дана функция sumTwoNumbers, реализовать функцию bindNumber которая принимает функцию sumTwoNumbers и число, и
// возвращает другую функцию, которое также принимает число и возвращает сумму этих чисел. Замыкание использовать нельзя
function sumTwoNumbers(a: number, b: number): number { return a + b };
function bindNumber(fn:Function,n:number){
    return fn.bind(null,n)
}
const func = bindNumber(sumTwoNumbers,5)
console.log(func(10))
// 2) Напишите функцию которая принимает первым аргументом объект One, а вторым helperObj. Данная функция
// возвращает другую функцию которая принимает строку в качестве аргумента и устанавливает ее свойству name объекта One

function task2(obj:Object, helper:helperObjtype){
    return function(str:string){
        helper.changeName.bind(obj,str)()
    }
}
task2(One,helperObj)('vlad')
console.log(One);

// 3) Одной строкой установить с помощью helperObj объекту Two поле age в значение 30
helperObj.setAge.bind(Two,30)()
console.log(Two);

// 4) Создать метод hi у объекта One, который всегда вызывает метод greeting объекта helperObj от имени Two
//@ts-ignore
One.hi = helperObj.greeting.bind(Two)
//@ts-ignore
console.log(One.hi());

// Реализовать задачи 2-4 из Bind с помощью Call



// just a plug
export default () => { };
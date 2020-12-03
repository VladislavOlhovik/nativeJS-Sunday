import './test'

console.log('Lesson 7');

// __Proto__
// https://learn.javascript.ru/prototype-inheritance
// https://habr.com/ru/post/518360/
// https://learn.javascript.ru/native-prototypes

// Prototype
// https://learn.javascript.ru/function-prototype
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype


// https://www.youtube.com/watch?v=aQkgUUmUJy4&t=21s
// https://www.youtube.com/watch?v=b55hiUlhAzI


//Task 01
// Реализовать класс Animal который принимает name(по умолчанию 'Animal') в качестве параметра, у которого будет 3
// метода walk, eat, sleep - каждый метод должен выводить в консоль строку имя + действие. Пример:
// walk => `${this.name} walking`
// проверить, что методы работают

class Animal {
    name: string;
    constructor(name: string = 'Animal') {
        // this.name = name || 'default Name';
        this.name = name;
    }
    walk() {
        console.log(`${this.name} walking`);
    }

    eat() {
        console.log(`${this.name} eating`);
    }

    sleep() {
        console.log(`${this.name} sleeping`);
    }
}

// let an = new Animal();
// an.eat();
// console.log(an)


//Task 02
// Реализовать класс Monkey на базе класса Animal,  конструктор принимает name(по умолчанию 'Monkey') в качестве
// параметра, реализовать методы roar и climb аналогично классу Animal
// проверить, что все методы работают

class Monkey extends Animal {
    constructor(name: string = 'Monkey') {
        super(name);
    }

    roar() {
        console.log(`${this.name} roaring`);
    }

    climb() {
        console.log(`${this.name} climbing`);
    }

}

let m = new Monkey()

console.log(m);
// m.eat()
// //@ts-ignore



//Task 03
// Реализовать класс Human на базе класса Monkey, конструктор принимает name(по умолчанию 'Human') в качестве
// параметра, реализовать методы speak и think аналогично классу Animal
// проверить, что все методы работают

class Human extends Monkey {
    constructor(name:string = 'Human') {
        super(name);
    }

    speak(){
        console.log(`${this.name} speaking`);
    }

    think(){
        console.log(`${this.name} thinking`);
    }

}

// const human = new Human();

// console.log(human)
// human.eat()


// Task 04
// Реализовать таски 01-03 через функции конструкторы в отдельном JS файле, реализовать наследование


// Task 05
// Используя метод Apply реализовать свой собственный метод bind

let obj = {
    name: 'Eugene',
    //@ts-ignore
    sayHi(a, b) {
        console.log(`${this.name}, a is - ${a}, b is - ${b}`);
    }
}
//@ts-ignore
Function.prototype.customBind = function(ctx, ...args) {
    ctx.__temp__ = this;
    //@ts-ignore
    return function (...args2) {
        return ctx.__temp__(...args, ...args2)
    }
}

let obj2 = {
    name: 'Vlad'
}
//@ts-ignore
// let f = obj.sayHi.customBind(obj2, 10, 20);
// f(50)

//@ts-ignore
Function.prototype._bind = function(ctx, ...args) {
    const _this = this;
    //@ts-ignore
    return function (...args2) {
        return _this.call(ctx, ...args, ...args2);
        //return _this.apply(ctx, [...args, ...args2]);
    }
}

// just a plug
export default () => {};


// задача с собеса
//@ts-ignore
async function sleep(ms) {
    setTimeout(() => {
        console.log(ms);
    }, ms*100);
}


async function show() {
    await sleep(3)
    await sleep(2)
    await sleep(1)
}

// show();

//
// function func() {
//     +1
// }
//
// const counter = func();
//
// console.log(counter())
// console.log(counter())
// console.log(counter())

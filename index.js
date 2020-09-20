/*
// основные типы данных
1. number
2. string
3. boolean
4. null
5. underfined

// https://learn.javascript.ru/types

// https://learn.javascript.ru/object

Объекты:

1. object
2. array
3. function

1. Множество значений разного типа
2. Имеет свойства и методы
3. Объект - ссылочный тип данных

Создание оьъекта
1. Литерал
2. через конструктор: let obj = new Object();


*/

let studentBob = {
    name: "Bob",
    age: 21,
    isMarried: false,
    "student address": {
        city: "Minsk"
    },
    getInfo: function () {
        return [this.name, this.age, this.isMarried]
    }
};

console.log(studentBob.name);
console.log(studentBob["student address"]);


let prop = "age";

console.log(studentBob[prop]);

let studentAlex = studentBob;
studentAlex.name = "Alex"
console.log(studentBob.name);

let studentPeter = {
    ...studentBob
}



// клонирование объекта с помощью деструктуризации

// lo_dash - liba - библиотека для губокого клонирования

let BotReport = ["2", "3", "23"];

console.log(Number(BotReport[0]));
console.log(studentBob.getInfo())

console.log(BotReport.toString())

/* pop/push shift/unshift
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array*/


function getNumber(str) {
    if (typeof str === "string") {
        return Number(str);
    } else {
        return "string is required"
    }
}
// map-function

function map(arr, fn) {
    let mappedArr = [];
    for (let i = 0; i < arr.length; i++) {
        mappedArr[i] = fn(arr[i]);
    }
    return mappedArr;
}
 
console.log(map(BotReport, getNumber));
console.log(BotReport);



console.log(BotReport.map(getNumber));

console.log(BotReport);




// let botReport2 = [...BotReport]


// Task 04
// Написать функцию конструктор MyFirstConstructorFunc которая принимает 2 параметра name и age и возвращает объект
// у которого будут эти свойства и метод greeting из Task 01
function greeting () {
    return console.log(`My name is ${this.name}. I am ${this.age}`);
}

function MyFirstConstructorFunc (name,age) {
    this.name = name
    this.age = age
}
let vlad = new MyFirstConstructorFunc('vlad', '26')
console.log(vlad);
vlad.greeting = greeting

vlad.greeting()

console.log(vlad instanceof MyFirstConstructorFunc);
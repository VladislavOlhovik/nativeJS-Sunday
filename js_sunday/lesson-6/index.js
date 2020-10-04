const arr = [1,2,3] // new Array(1,2,3)
arr.push(4)
console.log(arr);
//откуда беруться методы
function greet(){
  console.log(`Hi! I'm ${this.name}`)
}
const bob ={
  name:'Bob',
  age:23,
  scores:120,
  // greating: function(){
  //   console.log(`Hi! I'm ${bob.name}`)
  // }
  greeting:greet
}

bob.greeting()

const alex ={
  name:'Alex',
  age:22,
  scores:110,
  // greeting: function(){
  //   console.log(`Hi! I'm ${alex.name}`)
  // }
  greeting:greet
}
alex.greeting()

btn.onclick = greet.bind(bob)

// function Student (name, age, scores){
//   this.name=name
//   this.age=age
//   this.scores=scores
//   // this.greeting=function greet(){
//   //   console.log(`Hi! I'm ${this.name}`)
//   // }
// }
// const helga = new Student('helga',20,121)
// console.log(helga);

// Student.prototype.greeting=greet
// helga.greeting()
// Student.prototype.sayAge=function(){
//   console.log(`i am ${this.age} years old`);
// }
// helga.sayAge()
// const oleg = new Student('oleg',54,120)
// oleg.greeting()
// oleg.sayAge()
// console.log(helga);
// console.dir(helga.__proto__===Student.prototype)

Array.prototype.yo=function(){
  console.log('yo!!!!!!!!!!!!');
}

const ar = [1,2,3,4,5]
ar.yo()

Array.prototype.lastItem=function(){
  return this[this.length-1]
}
console.log(ar.lastItem())

class Student {
  constructor(name, age, scores) {
    this.name = name;
    this.age = age;
    this.scores = scores;
  }
  greeting (){
      console.log(`Hi! I'm ${alex.name}`)
  } //  если обычная функция то она добовляется в proptotype
  sayAge=()=>{
      console.log(`i am ${this.age} years old`);
  } // если используется стрелочная функция то она добоаляется в видимые свойства
}

const ivan = new Student('Ivan',33,123)
ivan.sayAge()
ivan.greeting()
console.log(ivan);

console.log(ivan.hasOwnProperty('greeting'));

for(let prop in ivan){
  console.log(prop);
}
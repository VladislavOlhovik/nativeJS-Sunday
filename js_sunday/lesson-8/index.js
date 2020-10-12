class Human {
  constructor(name,age){
    this.name=name
    this.age=age
  }
  greeting(){
    console.log(`Hi! I'm ${this.name}`);
  }
  sayAge=()=>{
    console.log(`I'm ${this.age} years old`);
  }
}

let john = new Human('John',23)
console.dir(john);
const btn = document.getElementById('btn')
// btn.onclick = john.greeting
// 1.bind
// btn.onclick = john.greeting.bind(john)

// 2. arrow function how class method
// btn.onclick = john.greeting

// 3. arrow function how wrapper
// btn.onclick = () =>john.greeting()


class Student extends Human {
  constructor(name,age,scores){
    super(name,age)
    this._scores = scores
  }
  get scores(){
    return this._scores
  }
  set scores(value){
    if(typeof value == 'number'){
    this._scores=value
    } else {
      alert('Value is not a number')
    }
  }
  // greeting(){
  //   console.log("hi, i'm instance of Student")
  // }
}
const bob = new Student('bob',25,120)
console.dir(bob);

bob.greeting()

class Student1 extends Human{
  #scores=0
  get scores(){
    return this.#scores
  }
  set scores(value){
    if(typeof value == 'number'){
      this.#scores=value
    } else {
      alert('Value is not a number')
    }
  }
  aboutMe(){
    super.greeting()
    this.sayAge()
    console.log(`I have ${this.#scores} scores`);
  }
}
const gena = new Student1('gena',40)
console.dir(gena);
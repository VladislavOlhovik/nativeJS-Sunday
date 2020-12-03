function Animal(name = 'Animal') {
  this.name = name;
}

Animal.prototype.walk = function () {
  console.log(`${this.name} walking`);
};
Animal.prototype.eat = function () {
  console.log(`${this.name} eating`);
};
Animal.prototype.sleep = function () {
  console.log(`${this.name} sleeping`);
};
let an = new Animal();
an.sleep();
console.log(an);

function Monkey(name = 'Monkey') {
  this.name = name;
}
// Monkey.prototype = Animal.prototype;
// Monkey.prototype.prototype = Monkey;
Monkey.prototype = Object.assign( Animal.prototype, { constructor:Monkey } )
Monkey.prototype.roar = function () {
  console.log(`${this.name} roaring`);
};
Monkey.prototype.climb = function () {
  console.log(`${this.name} climbing`);
};

let m = new Monkey();
m.sleep()
console.log(m);

function Human (name = 'Human') {
    this.name = name;
}
Human.prototype = Object.assign(Monkey.prototype,{constructor: Human})
Human.prototype.speak = function(){
    console.log(`${this.name} speaking`);
}
Human.prototype.think = function(){
    console.log(`${this.name} thinking`);
}

let h = new Human()
h.sleep()
h.speak()
console.log(h);


Function.prototype.__bind =  function (cnx,...args){
    cnx._t = this
    return function(...args2){
        return cnx._t(...args,...args2)
    }
}
Function.prototype.__bind1 =  function (cnx,...args){
    const _this = this
    return function(...args2){
        return _this.apply(cnx,[...args,...args2])
    }
}


let vlad = {
    name:'vlad',
    hi(){
        console.log(this.name);
    }
}
vlad.hi()
let alex = {
    name:'alex'
}
vlad.hi.__bind1(alex)()
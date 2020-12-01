console.log('Lesson 6');

// Class
// https://learn.javascript.ru/classes
// https://medium.com/front-stories/%D0%BA%D0%B0%D0%BA-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B0%D1%8E%D1%82-%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D1%8B-%D0%B2-javascript-7978c0003f1d
// https://www.typescriptlang.org/docs/handbook/classes.html
// https://www.youtube.com/watch?v=BASquaxab_w
// https://www.youtube.com/watch?v=uLY9GXGMXaA

// interface IpersonClass {
//     name:string;
//     age:number
//     city: string
// }
// class Person implements IpersonClass {
//     name:string;
//     age:number
//     city: string
//     education: string 
//     constructor(name:string, age:number, city:string, education: string){
//         this.name = name
//         this.age = age
//         this.city = city
//         this.education = education
//     }
//     sayHi(){
//         console.log('hi i am Person');
//     }
// }

// interface IspeekPerson extends IpersonClass {
//     greeting: () => void
// }
// interface testPerson  {
//     sayHi: () => void
// }


// class AngryPerson extends Person implements IspeekPerson, testPerson {
//     constructor(name:string, age:number, city: string, education: string){
//         super(name, age, city, education)
//     }
//     greeting(){
//         console.log('What do you want');
//     }
//     sayHi(){
//         console.log('hi');
//         super.sayHi()
//     }
// }
// class PolitePerson extends Person implements IspeekPerson {
//     constructor(name:string, age:number, city: string, education: string){
//         super(name, age, city, education)
//     }
//     greeting(){
//         console.log('Hi');
//     }
// }

// const testPerson = new Person ('Vlad', 26, 'Grodno', 'high')
// console.log(testPerson);
// const angryPerson = new AngryPerson ('Vlad', 26, 'Grodno', 'high')
// console.log(angryPerson);
// // angryPerson.greeting()
// const politePerson = new PolitePerson ('Vlad', 26, 'Grodno', 'high')
// console.log(politePerson);
// // politePerson.greeting()
// testPerson.sayHi()
// angryPerson.sayHi()
// politePerson.sayHi()


//legacy code
// class SuperTest {
//     _name: string
//     constructor(){
//         this._name=''
//     }
//     get name (){
//         return this._name
//     }
//     set name (name){
//         this._name = name
//     }
// }

//TS    

// class SuperTest {
//     private _name: string
//     constructor(){
//         this._name=''
//     }
//     get name (){
//         return this._name
//     }
//     set name (name){
//         this._name = name
//     }
// }
// console.log(new SuperTest());
// let pr = new SuperTest()
// pr._name //Property '_name' is private and only accessible within class 'SuperTest'

//static class

// interface IMan {
//     name: string
//     sureName: string
// }

// class Test implements IMan {
//     static greting = 'I am '
//     name: string
//     sureName: string
//     constructor(name: string, sureName: string){
//         this.name=name
//         this.sureName=sureName
//     }
//     static getFullName(obj:IMan){
//         return this.greting+obj.name+' '+obj.sureName
//     }
// }

// let tesObj = new Test( 'test', 'testovich')
// console.log(tesObj);
// console.log(Test.getFullName(tesObj));


// Task 01
// Дан интерфейс класса транспортное средство. На его основе реализуйте класс vehicle.
// - максимальная скорость по умолчанию ограничена в 150
// - необходимо предусмотреть: нельзя завести рабочий двигатель, как и остановить не рабочий.
// - нельзя остановить стоящее транспортное средство и т.д. Чем больше тем лучше)
// - метод startMoving должен раз в секунду выводить текущую скорость, при это увеличивать ее на произвольное число
// скорость не должна увеличиться больше чем максимальная скорость. Выводить в консоль предупреждение о большой скорости,
// выводить в консоль сообщение о достижении максимальной скорости.
// - метод stopMoving должен раз в секунду выводить текущую скорость, при это уменьшать ее на произвольное число
// (можно на тоже что и метод startMoving), скорость не может быть меньше 0. Выводить сообщение о остановки.
// создайте экземпляр класса и проверьте что все работает

interface IVehicle {
    isStartEngine: boolean;
    isMoving: boolean;
    speed: number;
    startEngine: () => void;
    stopEngine: () => void;
    startMoving: (maxSpeed?: number) => void;
    stopMoving: () => void;
}
class Vehicle implements IVehicle {
    isStartEngine: boolean;
    isMoving: boolean;
    speed: number;
    constructor () {
        this.isStartEngine = false
        this.isMoving = false
        this.speed = 0
    }
    startEngine () {
        if(this.isStartEngine) {
            console.log('Are you sure? The engine is working now!');
        } else {
            this.isStartEngine = true
            console.log('The engine is working now!');
        }
    }
    stopEngine(){
        if(!this.isStartEngine){
            console.log('Hmm... How to stop not working engine?!');
        } else if (this.isMoving) {
            console.log('It is not a good idea to stop the engine');
        } else {
            this.isStartEngine = false
            console.log('Engine was stop');
        }
    }
    startMoving(maxSpeed = 150){
        if(!this.isStartEngine){
            console.log('Cannot move');
        } else if (this.isMoving){
            console.log('We are already moving!');
        } else {
            this.isMoving = true
            let i = 1
            while (this.speed<=maxSpeed){
                setTimeout((speed)=>{
                    if(speed > 120){
                        console.log(`The speed is ${speed}! We are moving too fast!`);
                    } else {
                        console.log(`The speed is ${speed}!`);
                    }
                }, i*1000, this.speed)
                this.speed+=15
                i++
            }
            this.speed = maxSpeed
            setTimeout(()=>console.log(`The speed is ${this.speed}!! we are going to die!!!`),i*1000)
        }
    }
    stopMoving(){
        if (this.speed === 0){
            console.log('We are not moving, dude!!!');
        } else {
            let i = 1
            while (this.speed>0){
                setTimeout((speed)=>{
                    if(speed < 40){
                        console.log(`The speed is ${speed}! Huh we won't die!!`);
                    } else {
                        console.log(`The speed is ${speed}!`);
                    }
                }, i*1000, this.speed)
                this.speed-=15
                i++
            }
            setTimeout(()=>console.log(`The speed is ${this.speed}!! we arrived`),i*1000)
            this.isMoving = false    
        
        }
    }
}

const vehicle = new Vehicle()
//@ts-ignore
window.vehicle = vehicle

// Task 02
// на базе класса Vehicle реализовать класс Motorbike у которого максимальная скорость 200 и
// есть свой метод burnOut который выводит в консоль 'Zoom zoom zoom zoom zoom...'
class Motorbike extends Vehicle {
    burnOut () {
        if (!this.isStartEngine){
            console.log('Start the engine bro');
        } else {
            console.log('Zoom Zoom Zoom Zoom Zoom');
        }
    }
    startMoving(){
        super.startMoving(200)
    }
}

const bike = new Motorbike()
// bike.startEngine()
// bike.burnOut()
// bike.startMoving()

class Car extends Vehicle {
    startMoving(){
        super.startMoving(180)
    }
}
const car = new Car()
// car.startEngine()
// car.startMoving()
// Task 03
// на базе класса Vehicle реализовать класс Car у которого максимальная скорость 180 и
// есть свой метод beep который выводит в консоль 'Beeeeeeeeeeeep...'
// Приведите в движение мотоцикл и автомобиль одновременно


// Task 04
// Создать класс Warrior который реализует интерфейс IWarrior.
// метод attack возвращает значение damage
// метод attackWithBonus оставить пустым
// у класса должен быть статический метод battle который принимает 2 аргумента (объекты с интерфейсом IWarrior)
// метод battle должен реализовывать поочередные ходы до тех пор пока не останется в живых только один.
// выбор кто ходит первым должен быть случайным.
// на каждом ходе должна выводиться информация о нанесенном уроне и остатке здоровья у противника
// в конце написать кто победил

interface IWarrior {
    health: number;
    damage: number;
    defence: number;
    attack: () => number;
    attackWithBonus: Function
}
class Warrior implements IWarrior {
    static isBattle = false;
    static isFirst = false;
    health: number;
    damage: number;
    defence: number;
    constructor(health: number, damage: number, defence: number) {
        this.health = health;
        this.damage = damage;
        this.defence = defence;
    }

    attack() {
        return this.damage;
    }
    attackWithBonus() {
    }

    static battle(solder1: IWarrior, solder2: IWarrior) {
        if(!this.isBattle) {
            this.isFirst = Math.random() >= 0.5;
        }
        while (solder1.health > 0 && solder2.health > 0) {
            if (this.isFirst) {
                const damage = solder1.attackWithBonus() - solder2.defence;
                console.log(`The warrior One attack with ${damage}!`);
                solder2.health -= damage;
                console.log(`The warrior Two has left ${solder2.health} health!`);
                this.isFirst = !this.isFirst;
            } else {
                const damage = solder2.attackWithBonus() - solder1.defence;
                console.log(`The warrior Two attack with ${damage}!`);
                solder1.health -= damage;
                console.log(`The warrior One has left ${solder1.health} health!`);
                this.isFirst = !this.isFirst;
            }
        }
        if (solder1.health > 0 && solder2.health <= 0) {
            console.log('The One has won!!!!!');
        } else {
            console.log('The Two has won!!!!!');
        }
    }
}

class Solder extends Warrior {
    constructor(health: number, damage: number, defence: number) {
        super(health, damage, defence);
    }
    attackWithBonus() {
       if(Math.random() <= 0.1) {
           return this.attack() * 2;
       } else {
           return this.attack();
       }
    }
}

class Wizard extends  Warrior {
    constructor(health: number, damage: number, defence: number) {
        super(health, damage, defence);
    }
    attackWithBonus() {
        if(Math.random() >= 0.5) {
            return this.attack() + this.attack() * 0.2;
        } else {
            return this.attack();
        }
    }
}

const solder = new Solder(300, 30, 10);
const wizard = new Wizard(150, 20, 20);

Warrior.battle(solder, wizard);


// Task 05
// На базе класса из // Task 04 создать 2 класса Solder и Wizard
// реализовать обоим классам метод attackWithBonus
// у класса Solder есть вероятность (10%) нанести двойной урон
// у класса Wizard есть вероятность (50%) нанести тройной урон

// Task 06
// Устройте несколько драк. Подумайте о сложности нахождения баланса



// just a plug
export default () => {};
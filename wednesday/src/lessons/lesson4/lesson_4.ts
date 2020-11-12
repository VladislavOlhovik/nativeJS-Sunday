console.log('lesson 4');

// Task 01
// setTimeout(()=>console.log(1),0)
// console.log(2);
// (()=>console.log(3))();
// Promise.resolve(console.log(4))
//2341

// new Promise((res,rej)=>{
//     console.log(1);    
// })
// new Promise((res,rej)=>{
//     setTimeout(()=>console.log(2),0);    
// })
// Promise.resolve(setTimeout(()=>console.log(3),0));
// console.log(4);
// Promise.reject(console.log(5))
//14523

// (function () {
//     setTimeout(()=>console.log(1),100)
// })()
// console.log(2);
// new Promise((res,rej)=>{
//     setTimeout(()=>console.log(3),50)
// })
// function f(){
//     console.log(4)   
// }
// Promise.resolve(console.log(5))
// //2531

// function f(num:number){
//     console.log(num);    
// }
// Promise.resolve(1)
// .then(f);
// (function(){
//     console.log(2);    
// })()
// console.log(3);
// new Promise((res,rej)=>{
//     console.log(4);    
// })
// setTimeout(f,0,5)
// //23415

// Создайте промис, который постоянно находиться в состоянии pending.
// В конструкторе промиса выведите в консоль сообщение "Promise is created".
let task1 = new Promise((res,rej) => {
    console.log("Promise is created")
})
console.log(task1);


// Task 02
// Создайте промис, который после создания сразу же переходит в состояние resolve
// и возвращает строку 'Promise Data'
// Получите данные промиса и выведите их в консоль
let task2 = new Promise((res,rej) => {
    res('Promise Data')
})
task2.then(data=>console.log(data))


// Task 03
// Создайте промис, который после создания сразу же переходит в состояние rejected
// и возвращает строку 'Promise Error'
// Получите данные промиса и выведите их в консоль
let task3 = new Promise((res,rej) => {
    rej('Promise Error')
})
// task3.catch(data=>console.log(data))
task3.then(null, data=>console.log(data))

// Task 04
// Создайте промис, который переходит в состояние resolved через 3с.
// (Используйте setTimeout)
// и возвращает строку 'Promise Data'
// Получите данные промиса и выведите их в консоль
// let task4 = new Promise((res,rej) => {
//     setTimeout(res,3000,'Promise Data')
// })
// task4.then(data=>console.log(data))

// Task 05
// Создайте литерал объекта handlePromise со следующими свойствами:
// promise, resolve, reject, onSuccess, onError
// Проинициализируйте первые три свойства null,
// а последние два функциями, которые принимают один параметр и выводят
// в консоль сообщения: первая - `Promise is resolved with data: ${paramName}`
// вторая - `Promise is rejected with error: ${paramName}`
// Создайте три обработчика события click для кнопок "Create Promise", "Resolve Promise", "Reject Promise".
// Первый обработчик, создает промис, заполняет первые три свойства,
// описаного выше объекта: свойство promise получает новый созданный промис,
// свойства resolve и reject получают ссылки на соответствующие функции
// resolve и reject. Следующие два обработчика запускают методы resolve и reject.
type testObj = {
    promise: null|Promise<any>
    resolve: null|Function
    reject: null|Function
    onSuccess: (paramName: string)=>void
    onError: (paramName: string)=>void
}
const handlePromise: testObj = {
    promise: null,
    resolve: null,
    reject: null,
    onSuccess: (paramName: string)=>{
        console.log(`Promise is resolved with data: ${paramName}`)
        },
    onError(paramName: string){
        console.log(`Promise is rejected with error: ${paramName}`)
        },
}
export const createPromise = () =>{
    const somePromis:Promise<any> = new Promise((res, rej) => {
        handlePromise.resolve = res
        handlePromise.reject = rej
    })
    handlePromise.promise = somePromis
    handlePromise.promise
    .then(res=>handlePromise.onSuccess(res))
    .catch(rej=>handlePromise.onError(rej));
    console.log(handlePromise);
}
export const res = () => handlePromise.resolve&&handlePromise.resolve('1')
export const rej = () => handlePromise.reject&&handlePromise.reject('0')
// Task 06
// Создайте промис, который через 1 с возвращает строку "My name is".
// Создайте функцию onSuccess, которая получает один параметр,
// прибавляет к нему Ваше имя и возвращает новую строку из функции
// Создайте функцию print, которая выводит в консоль значение своего параметра
// Добавьте два метода then и передайте созданные функции.
const task6 = new Promise((res,rej)=>{
    setTimeout(()=>{
        res("My name is")
    }, 1000)
    
})
const onSuccess = (a:any) => a+' vlad'
const print = (b:any) => console.log(b);
task6.then(onSuccess).then(print)

// Task 7
// Создайте три промиса. Первый промис возвращает объект { name: "Anna" } через 2с,
// второй промис возвращает объект {age: 16} через 3 с, а третий {city: ''} через 4с.
// Получите результаты работы промисов, объедините свойства объектов
// и выведите в консоль {name, age, city}
const one = new Promise((res,rej)=>{
    setTimeout(()=>{
        res({ name: "Anna" })
    },2000)
});
const two = new Promise((res,rej)=>{
    setTimeout(()=>{
        res({age: 16})
    },3000)
});
const three = new Promise((res,rej)=>{
    setTimeout(()=>{
        res({city: 'Minsk'})
    },4000)
})
//@ts-ignore
Promise.all([one,two,three]).then(s=>console.log({name:s[0].name, age:s[1].age,city:s[2].city}))


// console.log(`${one.then(data=>data.name)} ${two.then(data=>data.age)} ${three.then(data=>data.city)}`);





// just a plug
export default ()=>{};
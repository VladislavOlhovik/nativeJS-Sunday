const tlId1 = '12sdf-sare'
const tlId2 = '13sdf-sare'



const todoList = [
    {
        id: tlId1,
        titel: 'What to buy',
    },
    {
        id: tlId1,
        titel: 'What to learn',
    }
]
const tasks = {
    [tlId1]: [
        { name: 'beer', isDone: false },
        { name: 'fish', isDone: false }
    ],
    [tlId1]: [
        { name: 'beer', isDone: false },
        { name: 'fish', isDone: false }
    ]
}
const key = 'age'
const obj = {
    'user name': 'Bob',
    [key]: 26
}
console.log(obj['user name']);
console.log(obj[key]);
console.log(obj['age']);


console.log(tasks[tlId1][0]);
console.log(tasks[todoList[0]['id']][0]);
console.log(tasks[todoList[0].id][0]);
const friends = {
    0: 'Alex',
    1: 'Bob',
    2: 'Nick'
}
console.log(friends[0]);
//reduce
const num = [23, 43, 2, 432, 23, 2321, 3, 2, 1]
const average = num.reduce((acc, el) => acc + el, 0) / num.length
console.log(average);

function itReduce(fn, array, starValue) {
    let acc = starValue
    for (let i = 0; i < array.length; i++) {
        acc = fn(acc, array[i])
    }

    return acc
}

console.log(itReduce((acc, el) => acc + el, num, 0) / num.length)

const maxArray = num.reduce((acc, el) => acc > el ? acc : el)
console.log(maxArray)
let students = [
    {
        name: 'Bob',
        age: 22,
        isMarried: true,
        scores: 85
    },
    {
        name: 'Alex',
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        name: 'Nick',
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: 'Jhon',
        age: 19,
        isMarried: false,
        scores: 100
    }
]
//find
console.log(students.reduce((acc, el) => acc + el.scores, 0));
let name = 'Bob'
function findName(acc, el) {
    if (el.name === name) {
        acc = el
    }
    return acc
}
console.log(students.reduce((acc, el) => el.name === name ? acc = el : acc, null));
console.log(students.reduce(findName, null));


//filter
let lavel = 100
function filterByScores(acc, el) {
   el.scores >= lavel?acc.push(el): acc
   return acc
}
console.log(students.reduce(filterByScores, []));


//map добовляем к age 5 
function addAge(acc, el){
    // let newObj = {}
    // for(let key in el){
    //     newObj[key]=el[key]
    // }
    // newObj.age=newObj.age +5
    // acc.push(newObj)
    acc.push({...el, age:el.age+5})
    return acc
}
console.log(students.reduce(addAge,[]));



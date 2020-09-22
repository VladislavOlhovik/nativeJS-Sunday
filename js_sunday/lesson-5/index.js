let friends = ["йоу", "Bob", "Alex", "Nick", "John", "1"];
let copyFriends =[...friends]
friends.sort();
console.log(friends);

let scores = [100, 120, 89, 85];
scores.sort((a, b) => a - b);
console.log(scores);

let students = [
  {
    name: "Bob",
    age: 22,
    isMarried: true,
    scores: 85,
  },
  {
    name: "Alex",
    age: 21,
    isMarried: true,
    scores: 89,
  },
  {
    name: "Nick",
    age: 20,
    isMarried: false,
    scores: 120,
  },
  {
    name: "Jhon",
    age: 19,
    isMarried: false,
    scores: 100,
  },
];
students.sort((a, b) => b.scores - a.scores);
console.log(students);

function sortByName(a, b) {
  switch (a.name > b.name) {
    case true:
      return 1;
    case false:
      return -1;
    default:
      return 0;
  }
}
students.sort(sortByName);
console.log(students);
// function findByIndex(el, index) {
//   if (index === 3) {
//     return true;
//   } else {
//     return false;
//   }
// }

// let student = students.find(findByIndex);
let student = students.find((el, index) => index === 3);
console.log(student);

function filterByIndex(el, i, arr) {
    console.log(el);
    console.log(arr);
  if (i === 3) {
    return false;
  } else {
    return true;
  }
}
// console.log(students.filter(filterByIndex))

//splice-сращивать, склеивать
//1.удаление элементка из массива по индексу
let bob = copyFriends.splice(1,1)
console.log(copyFriends);
//2.добавление элементка  по индексу
copyFriends.splice(1,0,'bob')
console.log(copyFriends);
//3.замена элементка  по индексу
copyFriends.splice(1,1,'boris')
console.log(copyFriends);
//4.обрезать нос
copyFriends.splice(0,2)
console.log(copyFriends);
//5.обрезать хвост
copyFriends.splice(-1,1)
console.log(copyFriends);
copyFriends.splice(1)
console.log(copyFriends);







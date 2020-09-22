let students = [
    {
        name:'Bob',
        age:22,
        isMarried:true,
        scores:85
    },
    {
        name:'Alex',
        age:21,
        isMarried:true,
        scores:89
    },
    {
        name:'Nick',
        age:20,
        isMarried:false,
        scores:120
    },
    {
        name:'Jhon',
        age:19,
        isMarried:false,
        scores:100
    }
]

function map(arr,fn){
    let mappedArr = []
    arr.forEach(element => {
        mappedArr.push(fn(element))
    });
    return mappedArr
}
// console.log(map(students,el=>({...el,scores:el.scores+10})))

function find(arr,fn){
    for(let element of arr){
        if(fn(element)===true){
            return element
        }
    }
}
function findForEach(arr,fn){
   arr.forEach(fn(element))
}

console.log(find(students,st=>st.name === 'Bob'&& st.age===22))


function filter(arr,fn){
    let filteredArr=[]
    for(let element of arr){
        if(fn(element) ===true){
            filteredArr.push(element)
        }
    }
    return filteredArr
}
console.log(filter(students,st=>st.scores<100))

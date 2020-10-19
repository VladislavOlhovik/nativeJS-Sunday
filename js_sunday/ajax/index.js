const resultBlock = document.querySelector("#result")
const pageNumberEl = document.querySelector("#page-number")
const clickMeButton = document.querySelector("#click")
const getTasksButton = document.querySelector("#get-tasks")
const enterValueButton = document.querySelector("#enter")
const valueTitle = document.querySelector("#page-title")

enterValueButton.addEventListener('click',()=>{

    createTask(valueTitle.value).then(data=>{
        // debugger
        // console.log(data);
    })
    valueTitle.value=''
})

// deleteTask('3a2a3031-b9e9-4b73-8d3c-e382a0869d64')
updateTask('LearnJS','c1887743-6da8-4894-9ccd-3643e66ec1b0',true)

clickMeButton.addEventListener("click",()=>{
    const promise = getImages(pageNumberEl.value)
    promise.then(onImagesRecived)
})
getTasksButton.addEventListener("click",()=>{
    const promise = getTasks()
    promise.then(onTasksRecived)
})


const onTasksRecived=(tasks)=>{
    const result = document.querySelector("#tasks-result")
    result.innerHTML = ''
    tasks.forEach(el => {
        const li = document.createElement('li')
        li.innerHTML = `${el.title}-id: ${el.id}`
        result.appendChild(li)            
    });
}
const onImagesRecived=(array)=>{
    array.forEach(el => {
        console.log(2);
        const img = document.createElement('img')
        img.src=el.thumbnail
        document.querySelector("#result").appendChild(img)            
    });
}

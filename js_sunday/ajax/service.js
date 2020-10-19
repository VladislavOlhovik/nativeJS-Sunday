
function getImages(pageNumber) {
    const promise = axios.get(`https://repetitora.net/api/JS/Images?page=${pageNumber}&count=1`)
    return promise.then(response=>response.data)
}
function getTasks() {
    const promise = axios.get(`https://repetitora.net/api/JS/Tasks?widgetId=53452&count=30`)
    return promise.then(response=>response.data)
}
function createTask(title) {
    const promise = axios.post(`https://repetitora.net/api/JS/Tasks`,{
        widgetId: 53452,
        title: title
    })
    return promise.then(response=>response.data)
}
function updateTask(title, id, done) {
    const promise = axios({
        method:'put',
        url:`https://repetitora.net/api/JS/Tasks`,
        data:{
            widgetId: 53452,
            title: title, 
            taskId: id,
            done: done
        }
    })
    
    return promise.then(response=>response.data)
}
function deleteTask(id) {
    const promise = axios.delete(`https://repetitora.net/api/JS/Tasks?widgetId=53452&taskId=${id}`)
    return promise.then(response=>response.data)
}
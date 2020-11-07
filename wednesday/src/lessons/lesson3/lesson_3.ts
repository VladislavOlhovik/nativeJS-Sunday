import axios from 'axios';

console.log('lesson 3');

// Event loop
// https://learn.javascript.ru/event-loop
// https://habr.com/ru/company/ruvds/blog/340508/
// https://www.youtube.com/watch?v=8aGhZQkoFbQ
// https://www.youtube.com/watch?v=j4_9BZezSUA

// Promise
// https://learn.javascript.ru/promise-basics
// https://www.youtube.com/watch?v=1idOY3C1gYU


// https://jsonplaceholder.typicode.com/posts/1
// https://habr.com/ru/company/oleg-bunin/blog/417461/?_ga=2.54695343.543933152.1602500664-1040035071.1596811661
const configOMB = {
    baseURL: 'https://jsonplaceholder.typicode.com/posts',
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
};
const axiosInstance2 = axios.create(configOMB);

const get = async () => {
    try {
        const result = await axiosInstance2.get('/1')
        console.log(result.data);

        const list = await axiosInstance2.get('')
        console.log('Get: ', list.data);

        const post = await axiosInstance2.post('', {
            body: JSON.stringify({
                title: 'foo',
                body: 'bar',
                userId: 1,
            }),
        })
        console.log('Post: ', post.data);

        const put = await axiosInstance2.put('/1', {
            body: JSON.stringify({
                id: 1,
                title: 'foo',
                body: 'bar',
                userId: 1,
            }),
        })
        console.log('Put: ', put.data);

        const patch = await axiosInstance2.patch('/1', {
            body: JSON.stringify({
                title: 'foo',
              }),
        })
        console.log('Patch: ', patch.data);

        const delet = await axiosInstance2.delete('/1')
        console.log('Delete: ', delet.data);
    } catch (e) { }
}
get()

// just a plug
export default () => { };
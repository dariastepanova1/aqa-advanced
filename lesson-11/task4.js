import ToDoGetter from "./ToDoGetter.js";
import UserGetter from "./UserGetter.js";

const toDoGetter = new ToDoGetter();
const userGetter = new UserGetter();

const toDoPromise = toDoGetter.getToDo();
const userPromise = userGetter.getUser();

Promise.all([toDoPromise, userPromise])
    .then(([toDo, user]) => {
        console.log('ToDo:', toDo);
        console.log('User:', user);
    })
    .catch((error) => {
        console.error('Error:', error);
    });

Promise.race([toDoPromise, userPromise])
    .then((result) => {
        console.log('Result:', result);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
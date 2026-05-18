
function getToDo(){
return fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json());
};

function getUser(){
return fetch('https://jsonplaceholder.typicode.com/users/1')
  .then(response => response.json());
};

let todoPromise = getToDo();
let userPromise = getUser();

Promise.all([todoPromise, userPromise])
    .then(([todo, user]) => {       
        console.log('ToDo:', todo);
        console.log('User:', user);
    })
    .catch((error) => {
        console.error('Error:', error);
    });

Promise.race([todoPromise, userPromise])
    .then((result) => {       
        console.log('Result:', result);
})
    .catch((error) => {
        console.error('Error:', error);
    });
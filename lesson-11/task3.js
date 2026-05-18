async function getToDo() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const toDo = await response.json();
  return toDo;
}

async function getUser() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
  const user = await response.json();
  return user;
}

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
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30
}

person.email = "someemail@gmail.com"
delete person.age;

console.log(person);
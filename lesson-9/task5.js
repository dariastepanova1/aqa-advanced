const users = [
  { name: "Ben", email: "email1@gmail.com", age: 24 },
  { name: "John", email: "email2@gmail.com", age: 18 },
  { name: "Sam", email: "email3@gmail.com", age: 35 }
];

for (const user of users) {
  console.log(`${user.name} with email ${user.email} is ${user.age} years old`);
}

for (const { name, email, age } of users) {
  console.log(name,email,age);
}
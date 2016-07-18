interface Person {
  firstName: string;
  lastName: string;
}

function greeter(person: Person) {
  return "Hello, " + person;
}

var user = { firstName: "Jane", lastName: "User" };

document.body.innerHTML = greeter(user);
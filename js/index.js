'use strict';

// Task #1

let user = {};

user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

console.log(user);


// Task #2
// Можно ли изменить объект, объявленный с помощью const? - так

const user2 = {
    name: 'John'
};

user2.name = 'Pete';

console.log(user2);

// это будет работать? - так, тому що в консолі було виведено наступне:
// {name: 'Pete'}


// Task #3

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

// варіант 1:
// let sum = (salaries.John + salaries.Ann + salaries.Pete);

// console.log(sum);

// варіант 2:
let sum = 0;
for (let key in salaries) {
    sum += salaries[key];
}

console.log(sum);
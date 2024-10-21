// Map이란 배열의 멤버에게 공통적으로 원하는 함수를 적용하여 새로운 배열을 만드는 함수이다.

const numbers = [1, 2, 3, 4, 5];

function double(number) {
    return number * 2;
}

const doubleNumbers = numbers.map(double);
console.log(doubleNumbers); // [2, 4, 6, 8, 10]

const doubleNumbers2 = numbers.map((number) => number * 2);
console.log(doubleNumbers2); // [2, 4, 6, 8, 10]

// 사람들의 이름만 가져오기
const people = [
    { name: 'Alice', age: 21 },
    { name: 'Max', age: 20 },
    { name: 'Jane', age: 22 },
];

const names = people.map((person) => person.name);
console.log(names); // ['Alice', 'Max', 'Jane']

// 과일이름에 태그를 붙이기
const fruits = ['apple', 'banana', 'cherry'];

const fruitsWithTags = fruits.map((fruit) => `<li>${fruit}</li>`);
console.log(fruitsWithTags); // ['<li>apple</li>', '<li>banana</li>', '<li>cherry</li>']

// 맵을 통해서 사용자의 full name을 만들기
const users = [
    { firstName: 'Alice', lastName: 'Johnson' },
    { firstName: 'Max', lastName: 'William' },
    { firstName: 'Jane', lastName: 'Doe' },
];

const fullNames = users.map((user) => `${user.firstName} ${user.lastName}`);
console.log(fullNames); // ['Alice Johnson', 'Max William', 'Jane Doe']

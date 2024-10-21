const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function isBiggerThan5(element) {
    return element > 5;
}

const above5_2 = array.filter(isBiggerThan5);
console.log(above5_2);

const above5 = array.filter((number) => number > 5);
console.log(above5);

// 짝수만 골라내기
const evenNumbers = array.filter((number) => number % 2 === 0);

// 홀수만 골라내기
const oddNumbers = array.filter((number) => number % 2 !== 0);

console.log(evenNumbers);
console.log(oddNumbers);

// a 단어 포함된 문자열만 골라내기
const words = ['apple', 'banana', 'hi', 'ready', 'book', 'ahah'];
const result = words.filter((word) => word.includes('a'));
console.log(result);

// a로 끝나는 문자열만 골라내기
const test = words.filter((word) => word.endsWith('a'));

console.log(test);

// 30세 이상인 사람만 골라내기

const people = [
    {
        name: 'John',
        age: 20,
    },
    {
        name: 'Jane',
        age: 30,
    },
    {
        name: 'Mike',
        age: 40,
    },
    {
        name: 'Tom',
    },
];

const over30 = people.filter((person) => person.age >= 30);
console.log(over30);

// 나이가 없는 사람만 골라내기
const noAge = people.filter((person) => person.age === undefined);
console.log(noAge);

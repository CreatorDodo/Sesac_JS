console.log('==========구구단==========');

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

array.forEach((num) => {
    console.log('==========' + num + '단==========');
    for (let i = 1; i < 10; i++) {
        console.log(num + ' * ' + i + ' = ' + num * i);
    }
});

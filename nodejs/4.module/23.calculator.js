import process from 'process';
import readline from 'readline';

const readLine = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const calculator = (num1, num2, operator) => {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
        default:
            return 'Invalid operator';
    }
};

readLine.question('Enter first number: ', (num1) => {
    readLine.question('Enter second number: ', (num2) => {
        readLine.question('Enter operator: ', (operator) => {
            console.log(`Result: ${calculator(+num1, +num2, operator)}`);
            readLine.close();
        });
    });
});

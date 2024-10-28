const Coffee = ['Americano', 'Latte', 'Mocha', 'Espresso', 'Cappuccino'];
const Cake = ['Cheese', 'Chocolate', 'Strawberry', 'Blueberry', 'GreenTea'];

function generateFood() {
    const foodType = Math.floor(Math.random() * 2) === 0 ? 'Coffee' : 'Cake';
    const coffeeIndex = Math.floor(Math.random() * Coffee.length);
    const cakeIndex = Math.floor(Math.random() * Cake.length);
    const foodName =
        foodType === 'Coffee'
            ? `${Coffee[coffeeIndex]} Coffee`
            : `${Cake[cakeIndex]} Cake`;
    return { foodName, foodType };
}

export default generateFood;
